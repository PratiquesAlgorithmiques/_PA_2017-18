blobarray = [];

x = 0;
y = 0;
w = 0;
h = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	// background(0, 0, 255);

	w = width / 2;
	h = height / 2;

	x = width / 2;
	y = height / 2;

	blobs = new Blobs();
}

function draw() {
	background(0, 0, 255);
	noStroke();
	textSize(100);

	if (t > 0) {
		for (var i = 0; i < blobarray.length; i++) {
			blobarray[i].move();
			blobarray[i].display();
		}
		param();
		square();
		// blobs.intersector();
	}
	else { result(); }
}

b_score = 0;
w_score = 0;

i = 0;
r = 10;
t = 100;
n = 0;

function param() {
	i++;
	if (i > 19) { i = 0; r--; t--; }
	if (r < 1) {
		r = 10;
		w = int(random(width / 2, width));
		h = int(random(height / 3, height / 3 * 2));
		blobarray = append(blobarray, new Blob(0, w, h));
		blobarray = append(blobarray, new Blob(255, w, h));
	}

	fill(0, 255, 0);
	text("round: " + r, 100, 300);
	text("time: " + t, 100, 400);

	fill(0);
	text("black: " + b_score, 100, 100);
	if (b_score > w_score && int(frameCount / 10) % 2 == 1) { text("black is winning!", 100, 700); }
	fill(255);
	text("white: " + w_score, 100, 200);
	if (w_score > b_score && int(frameCount / 10) % 2 == 1) { text("white is winning!", 100, 700); }
}

function square() {
	a = 3;
	x = w - a / 2;
	y = h - a / 2;
	g = get(x + a / 2, y + a / 2);
	if (g[0] == 0 && g[1] == 0 && g[2] == 0) { b_score++; }
	if (g[0] == 255 && g[1] == 255 && g[2] == 255) { w_score++; }
	fill(0, 255, 0);
	ellipse(x, y, a, a);
}

function result() {
	if (b_score > w_score) {
		fill(0);
		if (int(frameCount / 10) % 2 == 1) {
			text("☺", 100, height / 2 - 150);
			text(b_score, 100, height / 2 - 50);
		}
		fill(255);
		text("ಠ_ಠ", 100, height / 2 + 50);
		text(w_score, 100, height / 2 + 150);
	}
	else if (b_score < w_score) {
		fill(255);
		if (int(frameCount / 10) % 2 == 1) { 
			text("☺", 100, height / 2 - 150);
			text(w_score, 100, height / 2 - 50);
		}
		fill(0);
		text("ಠ_ಠ", 100, height / 2 + 50);
		text(b_score, 100, height / 2 + 150);
	}
	else {
		if (int(frameCount / 10) % 2 == 1) { 
			fill(0);
			text("☺", 100, height / 2 - 150);
			text(b_score, 100, height / 2 - 50);
			fill(255);
			text("☺", 100, height / 2 + 50);
			text(w_score, 100, height / 2 + 150);
		}
	}
	fill (0, 255, 0);
	text("next round in: " + n, 600, height / 2);
}

class Blobs {
	constructor() {
		// for (var i = 0; i < 2; i++)
		blobarray[0] = new Blob(0, w, h);
		blobarray[1] = new Blob(255, w, h);
	}

	// intersector() {
	// 	for (var i = 0; i < blobarray.length && blobarray[i + 1]; i++) {
	// 		var d = dist(blobarray[i].x, blobarray[i].y, blobarray[i + 1].x, blobarray[i + 1].y);
	// 		if (d < 25 * 2 && blobarray[i].f == 0) {
	// 			blobarray = append(blobarray, new Blob(0));
	// 			blobarray[i].f = 1;
	// 		}
	// 	}
	// }
}

class Blob {
	constructor(c, w, h) {
		this.x = w;
		this.y = h;
		this.c = c;
		this.f = 0;
	}

	move() {
		this.ran_x = random(-10, 10);
		this.ran_y = random(-10, 10);
		if (this.x + this.ran_x > width) { this.ran_x -= 10; }
		if (this.y + this.ran_y > height) { this.ran_y -= 10; }
		this.x = this.x + this.ran_x;
		this.y = this.y + this.ran_y;
	}

	display() {
		fill(this.c);
		ellipse(this.x, this.y, 50, 50);
	}
}