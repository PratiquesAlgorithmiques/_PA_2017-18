var steps = sessionStorage.getItem("steps");
var step = steps.split(",");
console.log(steps);
var limit = step.length;
var count = 0;
var fps = 1;
var i = 0;
var w;
var h;

var rgby = [];

rgby[0] = '#db3236';
rgby[1] = '#3cba54';
rgby[2] = '#4885ed';
rgby[3] = '#f4c20d';

function setup() {
	w = windowWidth / 2;
	h = windowHeight / 2;
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER);
	textSize(50);
	background(0);
	frameRate(fps);
}

function draw() {
	background(0);
	if (i < limit)
	{
		fill(rgby[i % 4]);
		rect(50, 50, windowWidth - 100 , windowHeight - 100);
		fill(0);
		text(step[i], w, h);
		i++;
	}
	else
		handleVoid();
}

function handleVoid() {
	fill(255);
	let str = "No step.";
	if (!step)
		text(str, w, h);
	else
	{
		let s = "";
		if (count > 1)
			s = "s"
		str = count.toString() + "/" + limit.toString() + " instruction" + s + ".";
		text(str, w, h);
	}
}

function keyPressed() {
	if (step[i - 1])
	{
		if (keyCode == LEFT_ARROW)
		{
			if (step[i - 1].indexOf("left") != -1)
				count++;
			else
				accelerate();
		}
		else if (keyCode == RIGHT_ARROW)
		{
			if (step[i - 1].indexOf("right") != -1)
				count++;
			else
				accelerate();
		}
		else if (keyCode == 38)
		{
			if (step[i - 1].indexOf("straight") != -1)
				count++;
			else
				accelerate();
		}
	}
}

function accelerate()
{
	fps += (fps < 10 ? 1 : 0);
	frameRate(fps);
	console.log(fps + ": fps.")
}
