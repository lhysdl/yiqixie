// JavaScript Document
$(document).ready(function(e) {
	$(".btn").click(function() {
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
});