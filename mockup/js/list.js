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
	$(".form-component").mouseover(function() {
		$(this).children(".form-remove").show();
	});
	$(".form-component").mouseout(function() {
		$(this).children(".form-remove").hide();
	});
	$(".form-remove").click(function() {
		if (confirm("确定要删除吗？")) {
			$(this).parent("div").hide();
		}
	});
});
