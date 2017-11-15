function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  background(0,200,50);
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  // fill(255,0,0);
  // torus(200, 60);

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(255,0,0);
  cylinder(200, 60);
}
