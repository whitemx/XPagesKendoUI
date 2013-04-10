$(document).ready( function() {
	$("#grid").kendoGrid( {
		dataSource : {
			transport : {
				read : {
					url : "jsonView.xsp/getRows",
					dataType : "json"
				}
			}, 
			pageSize: 10
		},
		groupable : true,
		selectable: "row",
		sortable : true,
		change : onChange, 
		pageable : {
			refresh : true,
			pageSizes : false
		},
		columns : [ {
			field : "FirstName",
			title : "First Name"
		}, {
			field : "LastName",
			title : "Last Name"
		}, {
			field : "Country"
		}, {
			field : "Email", 
			width: 400
		}, {
			field : "DateOfBirth",
			title : "Date Of Birth", 
			template: '#= kendo.toString(new Date(DateOfBirth),"dd MMM yyyy") #'
		}, {
			field: "Twitter"
		}, {
			field: "Telephone"
		}, {
			field: "UNID", 
			hidden: true
		}]
	});
});

function onChange(arg) {
	var selected = $.map(this.select(), function(item) {
        return $(item).text();
    });

    console.log("Selected: " + selected.length + " item(s), [" + selected.join(", ") + "]");

    window.location.href = "contact.xsp?action=editDocument&documentId=" + selected[0].substr(selected[0].length - 32);
}