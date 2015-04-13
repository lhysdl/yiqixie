// JavaScript Document
$(document).ready(function(e) {
	$(".btn").mousedown(function() {
		$(this).addClass("on");
	});
	$(".btn").mouseleave(function() {
		$(this).removeClass("on");
	});
	$(".btn").mouseup(function() {
		$(this).removeClass("on");
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
});