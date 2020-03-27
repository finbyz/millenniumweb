import frappe
from erpnext.portal.product_configurator.utils import (get_products_for_website, get_product_settings, get_attribute_filter_data)

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
	
	return 'test'
