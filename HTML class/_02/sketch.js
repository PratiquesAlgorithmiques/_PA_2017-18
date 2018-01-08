var canvas;

function setup() {
	canvas = createCanvas(300, 250);
	canvas.parent('mycanvas');
}

function draw() {
	background(125);
	ellipse(width/2 + random(-5, 5), height/2 + random(-5, 5), 20, 20);
}