var x = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(240);

	if (x > 5) {
		ellipse(100, 100, 100, 100);

	} else if (x == 1) {
		ellipse(100, 100, 1, 1);
		
	} else {
		rect(100, 100, 100, 100);
	}
}