function show_login_prompt() {
	const login_required = new frappe.ui.Dialog({
		title: __("Not Permitted"),
		primary_action_label: __("Login"),
		primary_action: () => {
			window.location.replace('/login?redirect-to=' + window.location.pathname);
		}
	});
	login_required.set_message(__("You are not permitted to access this page."));
	login_required.show();
}

var filters = {}
$("input").on('input', function (e) {
	var filters = { "from_date": frappe.utils.nowdate(), "to_date": frappe.utils.nowdate(), "company": "Millennium Vitrified Tiles Pvt. Ltd. Testing", "item_group": "", "tile_quality": "", "item_code": "", "print_with_picked_quantity": 0 }
	$("input").on('input', function (e) {
		filters[$(this).attr("list").toLowerCase().split(' ').join('_')] = $(this).val()
		console.log(filters)
		frappe.call({
			method: "millenniumweb.www.lot_wise_balance.index.get_context",
			args: {

				"context": { 'filters': filters }
			},
			callback: function (r) {
				if (!r.exc) {
					$("#table-wrapper").load(location.href + " #table-wrapper");
					console.log("Hello");
				}
			}
		});
	});
});




$(window).bind('beforeunload',function(){

	if (frappe.session.user!="Administrator") {
	
		show_login_prompt();
		
	}  else {
		console.log(frappe.session.user)
	}
	

});

