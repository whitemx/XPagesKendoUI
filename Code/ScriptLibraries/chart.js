function createChart() {
	$("#chart").kendoChart({
		title: {
		position: "bottom",
		text: "Contacts By Country"
	},
	legend: {
		visible: false
	},
	chartArea: {
		background: ""
	},
	seriesDefaults: {
		labels: {
		visible: true,
		background: "transparent",
		template: "#= category #: #= value#"
	}
	},
	series: dataSeries,
	tooltip: {
		visible: true,
		format: "{0}"
	}
	});
}

$(document).ready(function() {
	setTimeout(function() {
		// Initialize the chart with a delay to make sure
		// the initial animation is visible
		createChart();

		$("#example").bind("kendo:skinChange", function(e) {
			createChart();
		});
	}, 400);
});