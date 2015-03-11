// JavaScript Document
$("#menu-start").mouseover(function() {
	$("#menu-newfile").show();
	$("#menu-newfile").animate({top: "65px", opacity: 1}, 200, "easeInCubic");
	$("#menu-newfolder").show();
	$("#menu-newfolder").animate({top: "120px", opacity: 1}, 200, "easeInCubic");
	$("#menu-upgrade").show();
	$("#menu-upgrade").animate({top: "175px", opacity: 1}, 200, "easeInCubic");
	$("#menu-setting").show();
	$("#menu-setting").animate({top: "230px", opacity: 1}, 200, "easeInCubic");
	$("#menu-exit").show();
	$("#menu-exit").animate({top: "285px", opacity: 1}, 200, "easeInCubic");
	return(false);
});
$("#menu-wrapper").mouseleave(function() {
	$("#menu-newfile").animate({top: "10px", opacity: 0}, 200, "easeOutCubic", function() {$("#menu-newfile").hide()});
	$("#menu-newfolder").animate({top: "10px", opacity: 0}, 200, "easeOutCubic", function() {$("#menu-newfolder").hide()});
	$("#menu-upgrade").animate({top: "10px", opacity: 0}, 200, "easeOutCubic", function() {$("#menu-setting").hide()});
	$("#menu-setting").animate({top: "10px", opacity: 0}, 200, "easeOutCubic", function() {$("#menu-setting").hide()});
	$("#menu-exit").animate({top: "10px", opacity: 0}, 200, "easeOutCubic", function() {$("#menu-exit").hide()});
	return(false);
});