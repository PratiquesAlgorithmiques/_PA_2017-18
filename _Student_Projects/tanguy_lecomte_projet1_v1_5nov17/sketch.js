var bouton, bouton2, can;

function setup() {
	can = createCanvas(800, 800);
	can.position(200, 0);
	
	background(100, 0, 255);

	imageMode(CENTER);

	bouton = createButton("Karim Debbach");
	bouton2 = createButton("Kamel Debbich");

	bouton.mousePressed(kida);
	bouton2.mousePressed(kadi);

	bouton.position(10, 170);
	bouton2.position(10, 200);
	bouton.style("visibility", "hidden");

	img_0 = loadImage("imgs/1.jpg");
	img_2 = loadImage("imgs/2.jpg");
}


function kida() {
	background(100, 0, 255);
		image(img_0, width/2, height/2);
}

function kadi() {
	background(100, 0, 255);
		image(img_2, width/2, height/2);
}

