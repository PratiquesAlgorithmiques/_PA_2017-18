var canvas, counter = 0;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('mycanvas');
	fill(0);
}

function draw() {

	clear();
	counter = counter + 10;
	if (counter > width) {
		counter = 0;
	}

	background(255, 0);

	ellipse(counter, height/2, 200, 200);
	ellipse(width/2, counter, 200, 200);
}

/* AJAX */

$(document).ready(function() {
	$('.sidecontent').click(function() {
	  $('.main').load('page2.html');
	});

	// $('.sidebar').click(function() {
	//   $('.sidebar').load('sidebar2.html?cache=' + random(100000));
	// });
});