var steps = sessionStorage.getItem("steps"); 	// https://developer.mozilla.org/fr/docs/Web/API/Window/sessionStorage
var time = sessionStorage.getItem("time"); 	
sessionStorage.removeItem("steps");		// Suppression des steps
sessionStorage.removeItem("time");		// Suppression des times
var step = steps.split(",");			// Split de la grande chaine "steps"
var limit = step.length;			// Nombre d'elements dans step
var count = 0;					// Compteur d'intruction
var fps = 1;					// Variable pour la Framerate
var i = 0;					// Index
var w;						// Width/2
var h;						// Height/2
var p = 1;

var rgby = [];					// Definition des couleurs

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
						// Simple loop
function draw() {
	if (!pause && i < limit) {
		fill(255);
		rect(50, 50, windowWidth - 100 , windowHeight - 100);
		fill(rgby[i % 4]);
		text(step[i], w, h);
		i++;
	}
	if (pause)
		pause();
	else
		background(0);
	if (i == limit)
		handleVoid();
}

function pause()
{
	fill(25,25,25,0.5);
	rect(50, 50, windowWidth - 100 , windowHeight - 100);
	fill(rgby[i % 4]);
	text("Bonjour", w, h);
}

function handleVoid() {
	fill(255);
	let str = "No step.";
	if (!step)				// Si "step" n'existe pas
		text(str, w, h);
	else
	{
		let s = (count > 1 ? "s" : "");	// Count est superieur a 1 ? s devient "s" ou s devient "";
		str = count.toString() + "/" + limit.toString() + " instruction" + s + ".";
		text(str, w, h);
	}
}

function keyPressed() {
	var words = ["left", "straight", "right"];
	var curr = step[i - 1];
	console.log(keyCode);
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
