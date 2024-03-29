# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

# from millenniumweb.api import get_items as my_get_item
# from erpnext.portal.product_configurator import utils
# utils.get_items = my_get_item
# # import erpnext
# # erpnext.portal.product_configurator.utils.get_items = my_get_item

# # override bcz getting 404 error in thirt party files
# from frappe.website import render
# from millenniumweb.api import add_preload_headers as my_add_preload_headers
# render.add_preload_headers = my_add_preload_headers

app_name = "millenniumweb"
app_title = "Millennium Website"
app_publisher = "Finbyz"
app_description = "Millennium Website"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "info@finbyz.com"
app_license = "GPL 3.0"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/millenniumweb/css/millenniumweb.css"
# app_include_js = "/assets/millenniumweb/js/millenniumweb.js"
app_include_js = ["millenniumweb.bundle.js"]
# include js, css files in header of web template
# web_include_css = "/assets/millenniumweb/css/millenniumweb.css"
# web_include_js = "/assets/millenniumweb/js/millenniumweb.js"

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# web_include_js = [
# 	"/assets/js/millennium-products-listening.min.js",
# ]
# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "millenniumweb.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "millenniumweb.install.before_install"
# after_install = "millenniumweb.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "millenniumweb.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"millenniumweb.tasks.all"
# 	],
# 	"daily": [
# 		"millenniumweb.tasks.daily"
# 	],
# 	"hourly": [
# 		"millenniumweb.tasks.hourly"
# 	],
# 	"weekly": [
# 		"millenniumweb.tasks.weekly"
# 	]
# 	"monthly": [
# 		"millenniumweb.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "millenniumweb.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "millenniumweb.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "millenniumweb.task.get_dashboard_data"
# }


# override_whitelisted_methods = {
# 	"erpnext.portal.product_configurator.utils.get_products_html_for_website": "millenniumweb.api.get_products_html_for_website",
# }

# index.get_context = my_get_context
