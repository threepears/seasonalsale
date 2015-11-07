define(["jquery"],
	function($) {

		return {
			productInfo: function(callback) {
				function ajax1 $.ajax({url: "./data/products.json"})
				.done(function(products){
					callback(products);
				$.ajax({url: "./data/categories.json"})
				.done(function(categories){
					callback(categories);
				})
				});
			},
			// categoriesInfo: function(callback) {
			// 	$.ajax({url: "./data/categories.json"})
			// 	.done(function(categories){
			// 		callback(categories);
			// 	})
			// }
		};




});