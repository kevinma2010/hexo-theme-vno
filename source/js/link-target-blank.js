(function () {
	$("article.post-container--single a[href^=http]").attr("target", "_blank");
	$("article.post-container--single a[href^=mailto]").attr("target", "_blank");
})();