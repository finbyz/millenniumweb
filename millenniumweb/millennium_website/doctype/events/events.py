# -*- coding: utf-8 -*-
# Copyright (c) 2020, Finbyz and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe import _
from frappe.website.website_generator import WebsiteGenerator

class Events(WebsiteGenerator):
	def get_context(self, context):
		context.category = frappe.db.get_value("Event Category",
			context.doc.event_category, ["category"], as_dict=1)

		context.parents = [{"name": _("Home"), "route":"/"},
			{"name": "Events", "route": "/events"}]
		return context

		

def get_list_context(context=None):
	list_context = frappe._dict(
		title = _('Events'),
		event_category = frappe.get_list("Event Category", ignore_permissions=True),
		scrub = frappe.scrub
	)

	return list_context
