import frappe
from erpnext.portal.product_configurator.utils import (get_product_settings,
	get_field_filter_data, get_attribute_filter_data)

sitemap = 1

def get_context(context):
	frappe.throw("Get Context Called")
	if frappe.form_dict:
		search = frappe.form_dict.search
		field_filters = frappe.parse_json(frappe.form_dict.field_filters)
		attribute_filters = frappe.parse_json(frappe.form_dict.attribute_filters)
	else:
		search = field_filters = attribute_filters = None

	context.items = get_products_for_website(field_filters, attribute_filters, search)

	product_settings = get_product_settings()
	context.field_filters = get_field_filter_data() \
		if product_settings.enable_field_filters else []

	context.attribute_filters = get_attribute_filter_data() \
		if product_settings.enable_attribute_filters else []

	context.product_settings = product_settings
	context.page_length = product_settings.products_per_page

	context.no_cache = 1

# To change the values brought from Item table, we written same function just changed sql query in get_items function
def get_products_for_website(field_filters=None, attribute_filters=None, search=None):
	frappe.msgprint("Our Get Products Called")
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

def get_items(filters=None, search=None):
	frappe.msgprint("Our Get Items Called")
	start = frappe.form_dict.start or 0
	products_settings = get_product_settings()
	page_length = products_settings.products_per_page

	filters = filters or []
	# convert to list of filters
	if isinstance(filters, dict):
		filters = [['Item', fieldname, '=', value] for fieldname, value in filters.items()]

	enabled_items_filter = get_conditions({ 'disabled': 0 }, 'and')

	show_in_website_condition = ''
	if products_settings.hide_variants:
		show_in_website_condition = get_conditions({'show_in_website': 1 }, 'and')
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
			{where_conditions}
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