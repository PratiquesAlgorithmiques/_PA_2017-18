function setup() {
	createCanvas(windowWidth, windowHeight);

	myfunction3(100, 100);
	myfunction3(700, 700);
	myfunction3(500, 0);
}

function myfunction3(x, y) {
	fill(random(256), random(256), random(256));
	rect(x, y, 200, 200);
}