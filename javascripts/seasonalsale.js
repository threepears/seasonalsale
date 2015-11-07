define(["jquery", "getProductInfo", "matchProductCategories", "populateDom"],
	function($, getProductInfo, matchCategories, populateDom) {

		var spring = $("#spring");
		var summer = $("#summer");
		var fall = $("#fall");
		var winter = $("#winter");
		var content = $("#content");

		getProductInfo.categoriesInfo(populateDom.populateDom);
		getProductInfo.productInfo(matchCategories.getCategory);

});