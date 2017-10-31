function setup() {
	createCanvas(windowWidth, windowHeight);

	myfunction();
	myfunction2();
	myfunction3(500, 0);
}

function myfunction() {
	print('hello');
}

function myfunction2() {
	print('hello');
}

function myfunction3(x, y) {
	fill(random(256), random(256), random(256));
	rect(x, y, 20, 20);
}