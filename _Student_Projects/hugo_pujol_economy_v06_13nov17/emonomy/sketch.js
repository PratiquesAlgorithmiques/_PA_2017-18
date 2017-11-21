// EMONOMY v0.6

// NOTES
//
// - Nettoyer fichier res.js
//

blobarray = [];
squarearray = [];
playerarray = [];
stringarray = [];
imagearray = [];

function setup() {
	createCanvas(windowWidth, windowHeight);

	m = loadFont('m.ttf');
	textFont('m', 30);

	background(0);

	like = loadImage("like.png");
	sad = loadImage("sad.png");
	love = loadImage("love.png");
	angry = loadImage("angry.png");

	imagearray[0] = loadImage("f/f0.jpg");
	imagearray[1] = loadImage("f/f1.jpg");
	imagearray[2] = loadImage("f/f2.jpg");
	imagearray[3] = loadImage("f/f3.jpg");
	imagearray[4] = loadImage("f/f4.jpg");
	imagearray[5] = loadImage("f/f5.jpg");
	imagearray[6] = loadImage("f/f6.jpg");
	imagearray[7] = loadImage("f/f7.jpg");
	imagearray[8] = loadImage("f/f8.jpg");
	imagearray[9] = loadImage("f/f9.jpg");
	imagearray[10] = loadImage("f/f10.jpg");
	imagearray[11] = loadImage("f/f11.jpg");
	imagearray[12] = loadImage("f/f12.jpg");
	imagearray[13] = loadImage("f/f13.jpg");
	imagearray[14] = loadImage("f/f14.jpg");
	imagearray[15] = loadImage("f/f15.jpg");
	imagearray[16] = loadImage("f/f16.jpg");
	imagearray[17] = loadImage("f/f17.jpg");
	imagearray[18] = loadImage("f/f18.jpg");
	imagearray[19] = loadImage("f/f19.jpg");

	playerarray[0] = new Player(4, "player1", 0, 2);
	playerarray[1] = new Player(3, "player2", 0, 1);
	playerarray[2] = new Player(2, "player3", 1, 4);
	playerarray[3] = new Player(1, "player4", 1, 1);

	for (i = 0; i < playerarray.length; i++) {
		if (playerarray[i].team == 0) { nb_b++; }
		if (playerarray[i].team == 1) { nb_w++; }
	}

	squarearray[0] = new Square(width / 2, height / 2);
	blobarray[0] = new Blob(width / 2, height / 2, 3);
	blobarray[1] = new Blob(width / 2, height / 2, 2);
	blobarray[2] = new Blob(width / 2, height / 2, 1);
	blobarray[3] = new Blob(width / 2, height / 2, 0);

	intro();
}

e = 0;
f = 0;

pb_score = 0;
pw_score = 0;

b_score = 0;
w_score = 0;
love_s = 0;
angry_s = 0;

tb_score = 0;
tw_score = 0;

stringarray[0] = "the day begins! ready? ";
stringarray[1] = "it's the lunch break! ready? ";
stringarray[2] = "it's evening! ready? ";
stringarray[3] = "it's bedtime! ready? ";

i = 0;
j = 0;
k = 0;
nr = 1;
r = 10;
n = 11;
t = 0;
o = 0;

nb_b = 0;
nb_w = 0;

los = 0;
win = 0;

function draw() {
	textAlign(LEFT, CENTER);
	noStroke();

	intro.hide();

	if (t == -2) {
		background(0);
		theend();
	}
	if (t == -1) {
		background(0);
		intro.hide();
	}
	if (t == 0) {
		background(0);
		results();
	}
	if (t > 0) {
		f = 0;
		back(0);
		for (var i = 0; i < squarearray.length; i++) {
			squarearray[i].display();
		}
		for (var i = 0; i < blobarray.length; i++) {
			blobarray[i].move();
			blobarray[i].display();
		}
		settings();
	}
}

function theend() {
	textAlign(CENTER, CENTER);
	if (playerarray[los].team == 0) {
		fill(0, 0, 255);
		text("TEAM LIKE WON!", width / 2, height / 2 - 50);
		fill(255, 255, 0);
		text("team Sad lost because of " + playerarray[los].name, width / 2, height / 2 + 50);
	} else {
		fill(255, 255, 0);
		text("TEAM SAD WON!", width / 2, height / 2 - 50);
		fill(0, 0, 255);
		text("team Like lost because of " + playerarray[los].name, width / 2, height / 2 + 50);
	}
}

function intro() {
	intro = createInput();
	intro.position(width / 2 - intro.width / 2, height / 2 - intro.height / 2);
	// intro.elt.placeholder = 'nb intro';
	intro.elt.maxLength = 2;
	intro.elt.focus();
}

function back(c) { // ***** OK *****
	fill(c);
	rect(0, 0, 480, height);
}