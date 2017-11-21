var nombreEntier, nombreFlottant, monTexte, monBoolean1, monBoolean2;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(240);

	nombreEntier = 8;
	nombreFlottant = 7.9;
	monTexte = "Hello World";
	monBoolean1 = false;
	monBoolean2 = true;
}

function draw() {}

function mousePressed() {
  print("nombreFlottant = " + nombreFlottant);
  print("nombreEntier = " + nombreEntier);
  print(nombreEntier + nombreFlottant);
  print("monTexte = " + monTexte);
  print("monBoolean1 = " + monBoolean1);
  print("monBoolean2 = " + monBoolean2);
}
