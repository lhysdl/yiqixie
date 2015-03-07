// JavaScript Document
$(document).ready(function(e) {
	$(".ebtn").click(function() {
		$(this).toggleClass("on");
	});
	$(".comment-group").click(function() {
		$(".comment-group").removeClass("comment-group-actived");
		$(".comment-add").hide();
		$(".mark-comment-actived").removeClass("mark-comment-actived");
		$(this).toggleClass("comment-group-actived");
		$(this).children(".comment-add").toggle();
		var id = $(this).prop("id");
		id = "span#m" + id.substr(1);
		$(id).toggleClass("mark-comment-actived");
	});
	$(".comment-group .comment-add").click(function() {
		return false;
	});
	$("#col-toggle").click(function() {
		$(this).toggleClass("icon-screen-full");
		$(this).toggleClass("btn-screen-full");
		$(this).toggleClass("icon-screen-split");
		$(this).toggleClass("btn-screen-split");
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
});