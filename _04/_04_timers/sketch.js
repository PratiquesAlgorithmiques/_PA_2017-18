var myTimer, myTimer2;

function setup() {
	createCanvas(windowWidth, windowHeight);
	myTimer = setInterval(myfunction3, 100);
	myTimer2 = setTimeout(myfunction4, 2000);
}

function myfunction3() {
	fill(random(256), random(256), random(256));
	rect(random(width), random(height), 20, 20);
}

function myfunction4() {
	textSize(80);
	text('setTimeout was called', 400, 400);
}

function mousePressed() {
	clearInterval(myTimer);
}