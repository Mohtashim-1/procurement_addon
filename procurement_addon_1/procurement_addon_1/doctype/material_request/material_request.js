frappe.ui.form.on('Material Request', {
	refresh(frm) {
		// your code here
	}
})
frappe.ui.form.on("Material Request", {
    
    custom_item_type(frm){
       if (frm.doc.custom_item_type == "Books"){
       set_filter_books(frm); 
       }
       if (frm.doc.custom_item_type == "General Items"){
       set_filter_gi(frm); 
       }
    }
    
});

function set_filter_books(frm){
    
    
    frm.fields_dict['items'].grid.get_field("item_code").get_query = function(doc, cdt, cdn) {
    return {
        filters: [
           
          
            ['Item', 'item_group', '=', "Books"]
        ]
    }
}
}
function set_filter_gi(frm){
    
    
    frm.fields_dict['items'].grid.get_field("item_code").get_query = function(doc, cdt, cdn) {
    return {
        filters: [
           
          
            ['Item', 'item_group', '=', "General Items"]
        ]
    }
}
    
    
    
}






frappe.ui.form.on('Material Request', {
	refresh(frm) {
		// your code here
	}
})

frappe.ui.form.on('Material Request', {
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