import frappe
from erpnext.portal.product_configurator.utils import (get_products_for_website, get_product_settings, get_attribute_filter_data, get_conditions)


sitemap = 1

def get_context(context):

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

	context.available_filters = get_filters_from_items(field_filters, attribute_filters, search)

	context.attribute_filters = get_attribute_filter_data() \
		if product_settings.enable_attribute_filters else []

	context.product_settings = product_settings
	context.page_length = product_settings.products_per_page

	context.no_cache = 1

def get_field_filter_data():
	product_settings = get_product_settings()
	filter_fields = [row.fieldname for row in product_settings.filter_fields]

	meta = frappe.get_meta('Item')
	frappe.errprint(str(meta))
	fields = [df for df in meta.fields if df.fieldname in filter_fields]

	filter_data = []
	for f in fields:
		doctype = f.get_link_doctype()

		# apply enable/disable filter
		meta = frappe.get_meta(doctype)
		filters = {}
		if meta.has_field('enabled'):
			filters['enabled'] = 1
		if meta.has_field('disabled'):
			filters['disabled'] = 0

		values = [d.name for d in frappe.get_all(doctype, filters)]
		filter_data.append([f, values])
	
	return filter_data

def get_filters_from_items(field_filters=None, attribute_filters=None, search=None):
	if attribute_filters:
		item_codes = get_item_codes_by_attributes(attribute_filters)
		items_by_attributes = get_available_filters([['name', 'in', item_codes]])

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
		return get_available_filters(search=search)

	return get_available_filters()

def get_available_filters(filters=None, search=None):
	
	filters = filters or []
	# convert to list of filters
	if isinstance(filters, dict):
		filters = [['Item', fieldname, '=', value] for fieldname, value in filters.items()]
		
	enabled_items_filter = get_conditions({ 'disabled': 0 }, 'and')

	show_in_website_condition = ''
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
	
	meta_filters = "`tabItem`.`tile_type` , `tabItem`.`tile_size`, `tabItem`.`tile_surface`, `tabItem`.`item_design`, `tabItem`.`tile_texture`, `tabItem`.`tile_thickness`"



	product_settings = get_product_settings()
	my_filter_fields = [row.fieldname for row in product_settings.filter_fields]
	data = []
	result = {}
	for d in my_filter_fields:
		data = (frappe.db.sql('''
			SELECT
				DISTINCT `tabItem`.{filter}
			FROM
				`tabItem`
			{left_join}
			WHERE
				{where_conditions} and `tabItem`.`website_image` IS NOT NULL
			'''.format(
				filter=d,
				meta_filters= meta_filters,
				where_conditions=where_conditions,
				left_join=left_join
			)
		, as_dict=1))
		data = [row[d] for row in data if row[d]] 
		if data:
			result[d] = data
	return result

