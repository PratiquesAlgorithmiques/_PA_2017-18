var video, song1, song2, speedometer, keys;

function preload() {
  song1 = loadSound('Appels Brut.mp3');
  song2 = loadSound ('Ambiance car 2.mp3');
  speedometer = loadFont('DS-DIGI.ttf');
}

function setup() {

createCanvas(windowWidth, windowHeight);

  video = createVideo(['night-road.mp4']);
  video.loop();
  video.hide();

  textSize(100);
  textAlign(CENTER);
  
  song1.setVolume(3);

  keys = loadImage('keys.png');
}


function draw(){

  image(video, 0, 0, width, height);

  //speedometer
  fill(255);
  textFont(speedometer);
  text(Math.floor(frameCount/2000), width/1.1, height/1.11);

  //keys
  image(keys, width/12, height/1.25, keys.width/2.7, keys.height/2.7);

}


function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    if (song1.isPlaying()) {
      song1.pause();
    } else {
      song1.play();
    }
  }

  if (keyCode == RIGHT_ARROW) {
    if (song2.isPlaying()) {
      song2.pause();
    } else {
      song2.play();
    }
  }
}
