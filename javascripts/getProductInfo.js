define(["jquery"],
	function($) {

		return {
			productInfo: function(callback) {

				$.ajax({url: "./data/products.json"})
				.done(callback);
					//console.log("product info", products);
			},

			categoriesInfo: function(callback) {
				$.ajax({url: "./data/categories.json"})
				.done(function(categories) {
					console.log("categories", categories);
					console.log("categories.categories[1]", categories.categories[1]);
					console.log("categories.categories[1].name", categories.categories[1].name);


					//callback(categories);
				})
			}
		};




});