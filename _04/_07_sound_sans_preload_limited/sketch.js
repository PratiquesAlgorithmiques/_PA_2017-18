var mySound;
var counter = 0;
var myboolean = false;

var soundList = ['gong.wav', 'whip.wav', 'door.wav'];

function mousePressed() {
	if (myboolean === false) {
		loadSound('sounds/' + soundList[counter], ready);
	}

	counter = counter + 1;

	if (counter >= soundList.length) {
		myboolean = true;
	}
}


function ready(sound) {
	mySound = sound;
	mySound.play();
}

function draw() {}