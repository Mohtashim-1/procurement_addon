frappe.ui.form.on('Supplier Quotation', {
	refresh(frm) {
		// your code here
	}
})

frappe.ui.form.on('Supplier Quotation', {
    refresh: function (frm) {
        frm.add_custom_button(__('View Quotation Comparison'), () => {
            frappe.set_route('query-report', 'Supplier Quotation Comparison', {
                supplier_quotation: frm.doc.name
            });
        }, __('Reports'));
    }
});
