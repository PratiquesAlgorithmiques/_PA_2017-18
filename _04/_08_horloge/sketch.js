function setup() {
	createCanvas(windowWidth, windowHeight);
	ellipseMode(CENTER);

	// horloge(width/2, height/2);
	// horloge(300, 300);
	// horloge(600, 600);
}

function draw() {
	background(255);
	horloge(mouseX, mouseY);
}


function horloge(x, y) {
	noFill();
	ellipse(x, y, 400, 400);
	ellipse(x-100, y-100, 50, 50);
	ellipse(x+100, y+100, 50, 50);
}