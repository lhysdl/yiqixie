// JavaScript Document
$(document).ready(function () {
	var poem = new Array("当然是降龙十八掌！", "蛤蟆功表示不服！", "听听我的碧海潮生曲？");
	var author = new Array("郭靖", "欧阳锋", "黄药师");
	var color = new Array("#fb6d51", "#4fc1e9", "#9fd368");
	var avatar = new Array("gj.jpg", "oyf.jpg", "hys.jpg");
	var i = 0;
	var j = 0;
	var mode = 1;
	var n = poem.length;
	text = document.getElementById("animation-text");
	var type;

	function reload() {
		type = setInterval(update, 100);
	}

	function updatename(i) {
		var name = document.getElementById("animation-name");
		name.innerHTML = author[i];
		name.style.backgroundColor = color[i];
		name.style.backgroundImage = "url(/static/yiqixie/images/" + avatar[i] + ")";
		var cursor = document.getElementById("animation-cursor");
		cursor.style.backgroundColor = color[i];
	}
	function update() {
		text.innerHTML = poem[i].substring(0, j);
		j += mode;
		if (j > poem[i].length) {
			clearInterval(type);
			setTimeout(function() {
				updatename((i + 1) % n);
				mode = -1;
				reload();
			}, 3000);
		}
		if (j < 0) {
			mode = 1;
			j = 0;
			i = (i + 1) % n;
		}
	}

	setTimeout(function () { updatename(0); reload();}, 3000);
});
