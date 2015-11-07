define(["jquery"],
	function($) {

	var content = $("#content");

		return {
			populateDom: function (data) {
				require(["hbs!../templates/product"], function(dataTemplate) {
					content.append(dataTemplate(data));
			});
		}
	}

});