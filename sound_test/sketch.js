var mySound;
var counter = 0;

function loaded(sound){
	// mySound.stop();
	// mySound = null;
	// mySound.dispose();
	mySound.stop();
	mySound = sound;
	mySound.setVolume(1);
	mySound.play();
}

function mousePressed() {
	counter++;
	if (counter > 3) { counter = 0; }
	// if (mySound !== undefined) {
	// 	mySound.dispose();
	// }
	
	mySound = loadSound('sounds/' + counter + '.mp3', loaded);
}


function draw() {}