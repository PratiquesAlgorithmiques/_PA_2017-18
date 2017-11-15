var video;

var date, hours, minutes, seconds, ms, t, v;

function setup() {

createCanvas(windowWidth, windowHeight);

  video = createVideo(['night-road.mp4']);
  video.loop();
  video.hide();
  // video.size(windowWidth, windowHeight);

  frameRate(30);
  textSize(20);
  textSize(30);
  textAlign(CENTER);

}

function draw(){

  hours = hour();
  minutes = minute();
  seconds = second();
  ms = millis();

  image(video, 0, 0, width, height);
  horloge(width/2, height-250);
  print(v , t);

  //compteur
  fill(255);
  text(Math.floor(frameCount/500) + '.km', width/2, height/2);
}

function horloge(x, y){

    // Draw clock
  noFill();
  translate(x, y);
  stroke(255);
  strokeWeight(4);
  ellipse(0, 0, 250, 250);

  // Hour hand
  fill(0);
  stroke(255);
  strokeWeight(4);
  t = (hours + minutes / 60 + seconds / 3600) * TAU / 12 - HALF_PI;
  v = p5.Vector.fromAngle(t);
  v.mult(100);
  line(0, 0, v.x, v.y);

  // Minute hand
  fill(255);
  strokeWeight(2);
  t = (minutes + seconds / 60 + ms / 1000 / 60) * TAU / 60 - HALF_PI;
  v = p5.Vector.fromAngle(t);
  v.mult(120);
  line(0, 0, v.x, v.y);

  resetMatrix();
  noFill();
  noStroke();
}


