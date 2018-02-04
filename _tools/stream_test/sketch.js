// https://github.com/processing/p5.js-sound/issues/225

function setup() {
	createCanvas(windowWidth, windowHeight);

	var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	var stream = document.getElementById('my-stream');

	var source = audioCtx.createMediaStreamSource(stream);

	source.connect(p5.soundOut);
}