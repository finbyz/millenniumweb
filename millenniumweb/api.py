import frappe
from frappe import _
from erpnext.portal.product_configurator.utils import get_products_for_website

@frappe.whitelist()
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