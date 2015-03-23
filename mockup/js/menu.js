// JavaScript Document
$("#menu-start").mouseover(function() {
	$(".menu").each(function(index, element) {
		if ($(this).attr("id") != "menu-start") {
			var y = index * 55 + 61;
			$(this).show();
			$(this).animate({top: y, opacity: 1}, 200, "easeInCubic");
		}
    });
	$("#menu-wrapper").height($(".menu").size() * 55 - 19);
	return(false);
});
$("#menu-wrapper").mouseleave(function() {
	$(".menu").each(function(index, element) {
		if ($(this).attr("id") != "menu-start") {
			$(this).animate({top: "6px", opacity: 0}, 200, "easeOutCubic");
		}
	});
	$("#menu-wrapper").height(36);
	return(false);
});
$("#menu-switch").click(function() {
	$("#mask-switch").show();
});
$(".logo").click(function() {
	$("#mask-switch").show();
});
$(".mask-close").click(function() {
	$(this).parent().hide();
	return(false);
});