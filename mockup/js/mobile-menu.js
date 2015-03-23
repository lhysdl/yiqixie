// JavaScript Document
$("#btn-menu").click(function() {
	if ($("#col-left").is(":visible")) {
		$(this).removeClass("clicked");
		$("#col-left").hide(200, "easeOutCubic");
		$("#col-right").animate({marginLeft: "0"}, 200, "easeOutCubic");
	} else {
		$(this).addClass("clicked");
		$("#col-left").show(200, "easeInCubic");
		$("#col-right").animate({marginLeft: "160px"}, 200, "easeInCubic");
	}
});
$(".logo").click(function() {
	$("#mask-switch").show();
});
$(".mask-close").click(function() {
	$(this).parent().hide();
	return(false);
});