var maListe, current, counter;
var doigt = [];
var bullle = [];

function preload () {
	for ( var i = 0; i <= 24; i++) {
		doigt[i] = loadImage ('toucher_du_doigt/doigt' + i + '.jpg');
	}
}

//importation des images

function setup() {
	createCanvas(windowWidth, windowHeight);

	loadStrings('test.txt');
	current = "";

	textAlign(CENTER, CENTER);
	textSize(20);
	fill(255, 0, 0);

	// importation texte et typo

	counter = -1;

	// en lien avec le fait que l'image tremble?
}

function draw() {
	background(255);
	text(current, width/2, height/2);

	for (var i = bullle.length - 1; i >= 0; i-- ) {
		bullle[i].update();
		bullle[i].display();
	}
}


//image qui tremble 

function mousePressed() {
	// current = random(maListe);
	var r = doigt (random (0, doigt.length));
	var b = bullle(mouseX, mouseY, doigt[r]);
	bullle.push (b);
// à chaque "mousePressed" une nouvelle image apparait et se met à trembler

	counter = counter + 1;

	if (counter >= maListe.length) {
		counter = 0;
	}

	current = maListe[counter];

}


// à chaque pression une nouvelle ligne de texte apparait 