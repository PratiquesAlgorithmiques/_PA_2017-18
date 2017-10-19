function setup() {
  createCanvas(500, 700);

  print(width, height);
  print(windowWidth, windowHeight);
  print(displayWidth, displayHeight);
}

function draw() {}


function mousePressed() {
	print("mouseX, mouseY = " + mouseX + "," + mouseY);
}

function keyTyped() {
 print("the key = " + key);
 print("the keyCode = " + keyCode);
}