var canvas = document.querySelector("#game-canvas");
var cxt = canvas.getContext("2d");
var map = [
	[x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x],
	[x, o, o, o, o, o, x, o, o, o, o, x, o, o, o, x, o, o, o, x],
	[x, o, x, x, x, o, x, o, x, x, o, x, o, x, o, x, o, x, o, x],
	[x, o, x, o, o, o, x, o, o, x, o, x, o, x, o, o, o, x, o, x],
	[x, o, x, o, x, x, x, x, x, x, o, x, x, x, x, x, x, x, o, x],
	[x, o, x, o, o, o, x, o, o, o, o, o, o, o, o, x, o, x, o, x],
	[x, o, x, o, x, o, o, o, x, x, x, x, x, x, o, x, o, x, o, x],
	[x, x, x, o, x, x, x, x, x, x, x, x, x, o, o, x, o, o, o, x],
	[o, o, o, o, x, x, x, x, o, o, o, x, x, o, x, x, x, x, o, x],
	[x, x, x, x, x, x, x, x, o, x, o, x, x, o, o, o, o, o, o, x],
	[x, x, x, x, o, o, o, x, o, x, o, x, x, x, x, x, x, x, o, x],
	[x, o, o, o, o, x, o, o, o, x, o, x, o, o, o, o, o, o, o, x],
	[x, o, x, x, x, x, x, x, x, x, o, x, o, x, o, x, x, x, x, x],
	[x, o, x, x, o, x, o, o, o, x, o, x, o, x, o, o, o, o, o, x],
	[x, o, x, x, o, x, o, x, o, x, o, x, o, x, x, x, x, x, o, x],
	[x, o, o, o, o, o, o, x, o, x, o, o, o, x, o, o, o, o, o, x],
	[x, x, x, x, x, x, x, x, x, x, x, x, x, x, o, x, x, x, x, x],
	[x, o, o, o, x, o, o, o, x, x, o, o, o, x, o, o, x, x, o, x],
	[x, o, x, o, x, o, x, o, x, x, o, x, o, x, x, o, x, x, o, x],
	[e, o, x, o, o, o, x, o, o, o, o, x, o, o, o, o, o, o, o, x],
	[x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x],
];

// Drawing the map
function drawMap(m) {
	for (var index = 0; index < m.length; index++) {}
}

window.onload = function () {
	drawMap(map);
};
