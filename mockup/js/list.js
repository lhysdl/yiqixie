// JavaScript Document
$(document).ready(function(e) {
	$(".file-options").click(function() {
		$(this).hide();
		$(this).parent("div").removeClass("file-menu-on");
		return false;
	});
	$(".file-star").click(function() {
		$(this).toggleClass("file-star-on");
	});
	$(".file-add").click(function() {
		$(this).children(".file-add-on").animate({marginTop: "0"}, 300, "easeInCubic");
	});
	$(".file-add-on").children(".btn").click(function() {
		$(this).parent(".file-add-on").animate({marginTop: "340px"}, 300, "easeOutCubic");
		return false;
	});
	$(".option-pin").click(function() {
		var pin = $(this).parent("li").parent("ul").parent("div").next(".file-pin");
		if (pin.is(":hidden")) {
			pin.show();
			pin.animate({top: "-20px", opacity: 1}, 200, "easeOutBounce");
		} else {
			pin.animate({top: "-50px", opacity: 0}, 200, "easeOutCubic", function() {pin.hide()});
		}
	});
	$(".file-pin").click(function() {
		$(this).animate({top: "-50px", opacity: 0}, 200, "easeOutCubic", function() {$(this).hide()});
	});
	$(".file").mouseover(function() {
		$(this).children(".file-menu").show();
	});
	$(".file").mouseleave(function() {
		$(this).children(".file-menu").hide();
	});
	$("#nav-menu").mouseover(function() {
		$("#nav-newfile").show();
		$("#nav-newfile").animate({top: "65px", opacity: 1}, 200, "easeInCubic");
		$("#nav-newfolder").show();
		$("#nav-newfolder").animate({top: "120px", opacity: 1}, 200, "easeInCubic");
		$("#nav-setting").show();
		$("#nav-setting").animate({top: "175px", opacity: 1}, 200, "easeInCubic");
		$("#nav-exit").show();
		$("#nav-exit").animate({top: "230px", opacity: 1}, 200, "easeInCubic");
		return(false);
	});
	$("#nav-wrapper").mouseleave(function() {
		$("#nav-newfile").animate({top: "10px", opacity: 0}, 200, "easeOutCubic", function() {$("#nav-newfile").hide()});
		$("#nav-newfolder").animate({top: "10px", opacity: 0}, 200, "easeOutCubic", function() {$("#nav-newfolder").hide()});
		$("#nav-setting").animate({top: "10px", opacity: 0}, 200, "easeOutCubic", function() {$("#nav-setting").hide()});
		$("#nav-exit").animate({top: "10px", opacity: 0}, 200, "easeOutCubic", function() {$("#nav-exit").hide()});
		return(false);
	});
	$("#nav-exit").click(function() {
		$("#dialog-close").show();
	});
	$(".dialog-close").click(function() {
		$(".dialog-mark").hide();
	});
});