requirejs.config({
	baseUrl: "./javascripts",
	shim: {
		bootstrap: {
			deps: ['jquery'],
			exports: 'bootstrap'
		}
	},
	paths: {
		"jquery": "../lib/bower_components/jquery/dist/jquery.min",
		"bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
		"hbs": "../lib/bower_components/require-handlebars-plugin/hbs"
	}
});

require(
	["jquery", "bootstrap", "hbs", "seasonalsale"],
	function($, bootstrap, hbs, seasonalSale) {
		
	}
);