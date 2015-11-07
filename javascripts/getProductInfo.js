define(["jquery"],
	function($) {

		return {
			productInfo: function(callback) {

				$.ajax({url: "./data/products.json"})
				.done(function(products) {
					console.log("product info", products);

					function updateProductInfo(categoryID, categoryName) {

						for (var i = 0; i < products.products.length; i++) {
							var currentObject = products.products[i];
							console.log("currentObject", currentObject);
							var currentCategory = currentObject["category_id"];
							console.log("currentCategory", currentCategory);

							if (currentCategory === categoryID) {
								currentObject.season_discount = categoryName;
								console.log("altered object", currentObject ); 
							};
						};
					};
					updateProductInfo(1, "Winter");
					updateProductInfo(2, "Autumn");
					updateProductInfo(3, "Spring");
				});
			},
			categoriesInfo: function(callback) {
				$.ajax({url: "./data/categories.json"})
				.done(function(categories){
					callback(categories);
				})
			}
		};




});