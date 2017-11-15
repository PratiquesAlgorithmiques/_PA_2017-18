var steps = sessionStorage.getItem("steps");
console.log(steps);
var step = steps.split(",");
var limits = step.length;
var i = 0;
console.log(limits);

var rgby = [];

rgby[0] = '#db3236';
rgby[1] = '#3cba54';
rgby[2] = '#4885ed';
rgby[3] = '#f4c20d';

function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER);
	textSize(50);
	background(0);
	frameRate(1);
}

function draw() {
	if (i < limits)
	{
		fill(rgby[i % 4]);
		rect(50, 50, windowWidth - 100 , windowHeight - 100);
		fill(0);
		text(step[i], windowWidth / 2, windowHeight / 2);
		text
	}
	else
		background(0);
	i++;
}
