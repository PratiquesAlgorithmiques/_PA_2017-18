var monTexte, toggle;

function setup() {
	createCanvas(windowWidth, windowHeight);

	monTexte = "Ces fausses factures étaient confectionnées à la demande de l'UMP";

	textAlign(CENTER, CENTER);

	textFont("Gloria Hallelujah");

	fill(255, 0, 0);
	stroke(0, 0, 255);
	strokeWeight(5);

	toggle = false;

}


function draw() {
	background("#49a1ae");

	textSize(mouseX/10);

	text(monTexte, width/2, height/2);
}

function mousePressed() {

	toggle = !toggle;

	if (toggle === true) {
		textFont("Lobster");
		fill("#374818");
	} else {
		textFont("Gloria Hallelujah");
		fill(0, 255, 0);
	}
}


