$(document).ready( function() {
	$("#menu").kendoMenu();
	$(".kendoselect").kendoComboBox();
	$(".datepicker").kendoDatePicker({
        format: "dd MMM yyyy"
    });
});
