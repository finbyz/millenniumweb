import frappe
from frappe import _
from erpnext.portal.product_configurator.utils import get_items_by_fields, get_product_settings, get_conditions

@frappe.whitelist(allow_guest=True)
def get_products_html_for_website(field_filters=None, attribute_filters=None):
	field_filters = frappe.parse_json(field_filters)
	attribute_filters = frappe.parse_json(attribute_filters)

	items = get_products_for_website(field_filters, attribute_filters)
	html = ''.join(get_html_for_items(items))

	if not items:
		html = frappe.render_template('millenniumweb/www/all-products/not_found.html', {})

	return html


def get_html_for_items(items):
	html = []
	for item in items:		
		html.append(frappe.render_template('millenniumweb/www/all-products/item_row.html', {
			'item': item
		}))
	return html

# To change the values brought from Item table, we written same function just changed sql query in get_items function
def get_products_for_website(field_filters=None, attribute_filters=None, search=None):
	if attribute_filters:
		item_codes = get_item_codes_by_attributes(attribute_filters)
		items_by_attributes = get_items([['name', 'in', item_codes]])

	if field_filters:
		items_by_fields = get_items_by_fields(field_filters)

	if attribute_filters and not field_filters:
		return items_by_attributes

	if field_filters and not attribute_filters:
		return items_by_fields

	if field_filters and attribute_filters:
		items_intersection = []
		item_codes_in_attribute = [item.name for item in items_by_attributes]

		for item in items_by_fields:
			if item.name in item_codes_in_attribute:
				items_intersection.append(item)

		return items_intersection

	if search:
		return get_items(search=search)

	return get_items()

def get_items(filters=None, search=None):
	start = frappe.form_dict.start or 0
	products_settings = get_product_settings()
	page_length = products_settings.products_per_page
	frappe.msgprint(str(page_length))
	filters = filters or []
	# convert to list of filters
	if isinstance(filters, dict):
		filters = [['Item', fieldname, '=', value] for fieldname, value in filters.items()]

	enabled_items_filter = get_conditions({ 'disabled': 0 }, 'and')

	show_in_website_condition = ''
	if products_settings.hide_variants:
		show_in_website_condition = get_conditions({'show_in_website': 1}, 'and')
	else:
		show_in_website_condition = get_conditions([
			['show_in_website', '=', 1],
			['show_variant_in_website', '=', 1]
		], 'or')

	search_condition = ''
	if search:
		# Default fields to search from
		default_fields = {'name', 'item_name', 'description', 'item_group'}

		# Get meta search fields
		meta = frappe.get_meta("Item")
		meta_fields = set(meta.get_search_fields())

		# Join the meta fields and default fields set
		search_fields = default_fields.union(meta_fields)
		try:
			if frappe.db.count('Item', cache=True) > 50000:
				search_fields.remove('description')
		except KeyError:
			pass

		# Build or filters for query
		search = '%{}%'.format(search)
		or_filters = [[field, 'like', search] for field in search_fields]

		search_condition = get_conditions(or_filters, 'or')

	filter_condition = get_conditions(filters, 'and')

	where_conditions = ' and '.join(
		[condition for condition in [enabled_items_filter, show_in_website_condition, \
			search_condition, filter_condition] if condition]
	)

	left_joins = []
	for f in filters:
		if len(f) == 4 and f[0] != 'Item':
			left_joins.append(f[0])

	left_join = ' '.join(['LEFT JOIN `tab{0}` on (`tab{0}`.parent = `tabItem`.name)'.format(l) for l in left_joins])

	results = frappe.db.sql('''
		SELECT
			`tabItem`.`name`, `tabItem`.`item_name`, `tabItem`.`item_design`, `tabItem`.`tile_surface`, `tabItem`.`tile_type`,
			`tabItem`.`website_image`, `tabItem`.`image`, `tabItem`.`thumbnail`,`tabItem`.`cover_image`,
			`tabItem`.`web_long_description`, `tabItem`.`description`,
			`tabItem`.`route`
		FROM
			`tabItem`
		{left_join}
		WHERE
			{where_conditions} and `tabItem`.`website_image` IS NOT NULL
		GROUP BY
			`tabItem`.`name`
		ORDER BY
			`tabItem`.`weightage` DESC
		LIMIT
			{page_length}
		OFFSET
			{start}
	'''.format(
			where_conditions=where_conditions,
			start=start,
			page_length=page_length,
			left_join=left_join
		)
	, as_dict=1)

	for r in results:
		r.description = r.web_long_description or r.description
		r.image = r.website_image or r.image

	return results

