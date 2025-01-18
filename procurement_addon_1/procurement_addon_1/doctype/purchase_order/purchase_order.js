frappe.ui.form.on('Purchase Order', {
	refresh(frm) {
		// your code here
	}
})
frappe.ui.form.on('Purchase Order', {
    before_save: function(frm) {
        if (!frm.doc.agent_name && frm.doc.owner) {
            frappe.model.get_value('User', frm.doc.owner, 'full_name', function(data) {
              if (data && data.full_name) {
                    frm.set_value('custom_prepared_by', data.full_name);
                }
            });
        }
    }
});