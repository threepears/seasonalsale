define(["jquery", "getProductInfo"],
	function($, getProductInfo) {

		var spring = $("#spring");
		var summer = $("#summer");
		var fall = $("#fall");
		var winter = $("#winter");
		var content = $("#content");

		function populateDom(data) {
			require(["hbs!../templates/product"], function(dataTemplate) {
				content.append(dataTemplate(data));
			});
		}

		getProductInfo.productInfo(populateDom);

});