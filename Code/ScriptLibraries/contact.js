var validator;
$(document).ready(function() {
	validator = $("#contactform").kendoValidator().data("kendoValidator"), status = $(".status");

	$("button").click(function() {
		if (validator.validate()) {
			status.text("Contact Saved").addClass("valid");
		} else {
			status.text("Oops! There is invalid data in the form.").addClass("invalid");
		}
	});
	
	$(".companyfield").kendoAutoComplete({
        dataTextField: "Company",
        filter: "contains",
        minLength: 3,
        dataSource: {
            type: "xml",
            serverFiltering: false,
            serverPaging: true,
            pageSize: 20,
            transport: {
                read: "Companies?readviewentries"
            }, 
            schema: {
                // specify the the schema is XML
                type: "xml",
                // the XML element which represents a single data record
                data: "/viewentries/viewentry/entrydata",
                // define the model - the object which will represent a single data record
                model: {
                    // configure the fields of the object
                    fields: {
                        // the "Company" field is mapped to the text of the "Company" XML element
                        Company: "text/text()"
                    }
                }
            }
        }
    });
});