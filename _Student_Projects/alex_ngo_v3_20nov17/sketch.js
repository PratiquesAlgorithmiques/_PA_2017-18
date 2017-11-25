var steps = sessionStorage.getItem("steps");
//var bell;
sessionStorage.removeItem("steps");
var step = steps.split(",");
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
//	bell = loadSound('mp3/bellc.mp3');
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
//		bell.play();
		fill(255);
		rect(50, 50, windowWidth - 100 , windowHeight - 100);
		fill(rgby[i % 4]);
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
		let s = (count > 1 ? "s" : "");
		str = count.toString() + "/" + limit.toString() + " instruction" + s + ".";
		text(str, w, h);
	}
}

function keyPressed() {
	var words = ["left", "straight", "right"];
	var curr = step[i - 1];
	if (curr)
	{
		console.log(curr + " : " + words[keyCode - 37]);
		if (keyCode == 37 || keyCode == 38 || keyCode == 39)
		{
			if (curr.indexOf(words[keyCode - 37]) != -1)
				decrease();
			else
				increase();
		}
	}
}

function decrease()
{
	count++;
	fps -= (fps > 1 ? 1 : 0);
	frameRate(fps);
	console.log(fps + ": fps.")
}

function increase()
{
	fps += (fps < 10 ? 1 : 0);
	frameRate(fps);
	console.log(fps + ": fps.")
}
