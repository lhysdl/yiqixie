// JavaScript Document
$("#menu-wrapper").height($(".menu").size() * 55 - 19);
$("#menu-start").mouseover(function() {
	$(".menu").each(function(index, element) {
		if ($(this).attr("id") != "menu-start") {
			var y = index * 55 + 61;
			y = y + "px";
			$(this).show();
			$(this).animate({top: y, opacity: 1}, 200, "easeInCubic");
		}
    });
	return(false);
});
$("#menu-wrapper").mouseleave(function() {
	$(".menu").each(function(index, element) {
		if ($(this).attr("id") != "menu-start") {
			$(this).animate({top: "10px", opacity: 0}, 200, "easeOutCubic", function() {$(this).hide()});
		}
	});
	return(false);
});
$("#menu-switch").click(function() {
	$("#mask").show();
});