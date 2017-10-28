var maListe, temp, last;

function setup() {
	createCanvas(windowWidth, windowHeight);

	maListe = ["one", "two", "three", "four", "five"];
	last = "";
}

// Vincent, jamais choisir le même deux fois de suite
function mousePressed() {

	temp = random(maListe);

	while (temp === last) {
		temp = random(maListe);
	}

	last = temp;

	print(temp);
}
 