var mySound;
var counter = 0;
var soundList = ['gong.wav', 'whip.wav', 'door.wav'];


function mousePressed() {
	loadSound('sounds/' + soundList[counter], ready);

	counter = counter + 1;

	if (counter >= soundList.length) {
		counter = 0;
	}
}

function ready(sound) {
	mySound = sound;
	mySound.play();
}

function draw() {}