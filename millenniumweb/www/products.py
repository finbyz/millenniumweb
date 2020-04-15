# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
# MIT License. See license.txt

from __future__ import unicode_literals
import frappe
import random

# def filter_shuffle(seq):
#     try:
#         result = list(seq)
#         random.shuffle(result)
#         return result
#     except:
#         return seq
        
# environment.filters['shuffle'] = filter_shuffle


def get_context(context):
    # data = frappe.db.sql("select * from `tabWebsite Item Details",as_dict=True)
    # return data
    return { "data": frappe.get_all("Website Item Details", ['item_code', 'cover_image'],order_by = 'RAND()', page_length = 7) }