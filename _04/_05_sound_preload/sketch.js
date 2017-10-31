var mySound, myTimer;

function preload() {
	mySound = loadSound('sounds/gong.wav');
}

function setup() {
	myTimer = setInterval(soundPlayer, 5000);
}

function soundPlayer() {
	mySound.play();
}
