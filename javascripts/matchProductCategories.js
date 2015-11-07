define(["jquery", "populateDom", "getProductInfo"],
	function($, populateDom, getProductInfo) {

		return {
			getCategory: function(products) {

				var currentObject = {};

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


				getProductInfo.categoriesInfo();

				updateProductInfo(1, "Apparel");
				updateProductInfo(2, "Furniture");
				updateProductInfo(3, "Household");

				console.log("products Object", products);

				populateDom.populateDom(products);






			}
		}


});