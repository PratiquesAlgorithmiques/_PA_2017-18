// HUMAN-ASSISTED v0.3

function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(LEFT, CENTER);

	r = 255;
	g = 255;
	b = 255;
	alpha = 0;

	m = loadFont('m.ttf');

	p = new modPlay();
	mod1 = new modPad("bop", 200, "triangle", windowWidth / 16 * 6, windowHeight / 16 * 2);
	mod2 = new modPad("bap", 400, "triangle", windowWidth / 16 * 5, windowHeight / 16 * 4);
	mod3 = new modPad("bip", 800, "triangle", windowWidth / 16 * 8, windowHeight / 16 * 7);
	mod4 = new modPad("hip", 1600, "triangle", windowWidth / 16 * 1, windowHeight / 16 * 10);
}

i = 1;
loop = 1;
time = 1;
max_time = 60;

play = 0;
bpm = 0.5; // 0.5
volume = 0.5;

function draw() {
	background(40);
	noStroke();
	fill(r, g, b, alpha);
	rect(0, 0, width, height);
	alpha = alpha - 6;

	if (int(frameCount / 10) % 2 === 1) { fill('#00ff84'); }
	else { fill(0, 0); }
	textFont('m', 20);
	text("EARLY DEMO", 80, 40);

	fill(100);
	textFont('m', 20);
	text("LOOP " + loop + ".8", 240, 40);
	text("TIME " + time + "." + (max_time + 40), 350, 40);

	if (play === 1) { i++; }
	else { i = 1; loop = 1; time = 1; }
	if (i > 10 * bpm) { i = 1; loop++; }
	if (loop > 8) {
		loop = 1;
		time++;

		r = random (0, 255);
		g = random (0, 255);
		b = random (0, 255);
		alpha = 200;
		// print(r + " + " + g + " + " + b);

		a = int(random(0, 4));
		b = int(random(0, 8));
		if (a == 0) {
			if (b === 0) { if (mod1.pad1.f === 0 && time < max_time) { mod1.pad1.f = 1; } else { mod1.pad1.f = 0; } }
			if (b === 1) { if (mod1.pad2.f === 0 && time < max_time) { mod1.pad2.f = 1; } else { mod1.pad2.f = 0; } }
			if (b === 2) { if (mod1.pad3.f === 0 && time < max_time) { mod1.pad3.f = 1; } else { mod1.pad3.f = 0; } }
			if (b === 3) { if (mod1.pad4.f === 0 && time < max_time) { mod1.pad4.f = 1; } else { mod1.pad4.f = 0; } }
			if (b === 4) { if (mod1.pad5.f === 0 && time < max_time) { mod1.pad5.f = 1; } else { mod1.pad5.f = 0; } }
			if (b === 5) { if (mod1.pad6.f === 0 && time < max_time) { mod1.pad6.f = 1; } else { mod1.pad6.f = 0; } }
			if (b === 6) { if (mod1.pad7.f === 0 && time < max_time) { mod1.pad7.f = 1; } else { mod1.pad7.f = 0; } }
			if (b === 7) { if (mod1.pad8.f === 0 && time < max_time) { mod1.pad8.f = 1; } else { mod1.pad8.f = 0; } }
		}
		if (a == 1) {
			if (b === 0) { if (mod2.pad1.f === 0 && time < max_time) { mod2.pad1.f = 1; } else { mod2.pad1.f = 0; } }
			if (b === 1) { if (mod2.pad2.f === 0 && time < max_time) { mod2.pad2.f = 1; } else { mod2.pad2.f = 0; } }
			if (b === 2) { if (mod2.pad3.f === 0 && time < max_time) { mod2.pad3.f = 1; } else { mod2.pad3.f = 0; } }
			if (b === 3) { if (mod2.pad4.f === 0 && time < max_time) { mod2.pad4.f = 1; } else { mod2.pad4.f = 0; } }
			if (b === 4) { if (mod2.pad5.f === 0 && time < max_time) { mod2.pad5.f = 1; } else { mod2.pad5.f = 0; } }
			if (b === 5) { if (mod2.pad6.f === 0 && time < max_time) { mod2.pad6.f = 1; } else { mod2.pad6.f = 0; } }
			if (b === 6) { if (mod2.pad7.f === 0 && time < max_time) { mod2.pad7.f = 1; } else { mod2.pad7.f = 0; } }
			if (b === 7) { if (mod2.pad8.f === 0 && time < max_time) { mod2.pad8.f = 1; } else { mod2.pad8.f = 0; } }
		}
		if (a == 2) {
			if (b === 0) { if (mod3.pad1.f === 0 && time < max_time) { mod3.pad1.f = 1; } else { mod3.pad1.f = 0; } }
			if (b === 1) { if (mod3.pad2.f === 0 && time < max_time) { mod3.pad2.f = 1; } else { mod3.pad2.f = 0; } }
			if (b === 2) { if (mod3.pad3.f === 0 && time < max_time) { mod3.pad3.f = 1; } else { mod3.pad3.f = 0; } }
			if (b === 3) { if (mod3.pad4.f === 0 && time < max_time) { mod3.pad4.f = 1; } else { mod3.pad4.f = 0; } }
			if (b === 4) { if (mod3.pad5.f === 0 && time < max_time) { mod3.pad5.f = 1; } else { mod3.pad5.f = 0; } }
			if (b === 5) { if (mod3.pad6.f === 0 && time < max_time) { mod3.pad6.f = 1; } else { mod3.pad6.f = 0; } }
			if (b === 6) { if (mod3.pad7.f === 0 && time < max_time) { mod3.pad7.f = 1; } else { mod3.pad7.f = 0; } }
			if (b === 7) { if (mod3.pad8.f === 0 && time < max_time) { mod3.pad8.f = 1; } else { mod3.pad8.f = 0; } }
		}
		if (a == 3) {
			if (b === 0) { if (mod4.pad1.f === 0 && time < max_time) { mod4.pad1.f = 1; } else { mod4.pad1.f = 0; } }
			if (b === 1) { if (mod4.pad2.f === 0 && time < max_time) { mod4.pad2.f = 1; } else { mod4.pad2.f = 0; } }
			if (b === 2) { if (mod4.pad3.f === 0 && time < max_time) { mod4.pad3.f = 1; } else { mod4.pad3.f = 0; } }
			if (b === 3) { if (mod4.pad4.f === 0 && time < max_time) { mod4.pad4.f = 1; } else { mod4.pad4.f = 0; } }
			if (b === 4) { if (mod4.pad5.f === 0 && time < max_time) { mod4.pad5.f = 1; } else { mod4.pad5.f = 0; } }
			if (b === 5) { if (mod4.pad6.f === 0 && time < max_time) { mod4.pad6.f = 1; } else { mod4.pad6.f = 0; } }
			if (b === 6) { if (mod4.pad7.f === 0 && time < max_time) { mod4.pad7.f = 1; } else { mod4.pad7.f = 0; } }
			if (b === 7) { if (mod4.pad8.f === 0 && time < max_time) { mod4.pad8.f = 1; } else { mod4.pad8.f = 0; } }
		}

		if (time > max_time + 20) { volume = volume - 0.02; }
		if (time > max_time + 40) { play = 0; volume = 0; }
	}

	p.display();

	mod1.move();
	mod1.play();
	mod1.display();

	mod2.move();
	mod2.play();
	mod2.display();

	mod3.move();
	mod3.play();
	mod3.display();

	mod4.move();
	mod4.play();
	mod4.display();
}

function mousePressed() {
	p.selected();

	mod1.selected();
	mod1.pad1.selected();
	mod1.pad2.selected();
	mod1.pad3.selected();
	mod1.pad4.selected();
	mod1.pad5.selected();
	mod1.pad6.selected();
	mod1.pad7.selected();
	mod1.pad8.selected();

	mod2.selected();
	mod2.pad1.selected();
	mod2.pad2.selected();
	mod2.pad3.selected();
	mod2.pad4.selected();
	mod2.pad5.selected();
	mod2.pad6.selected();
	mod2.pad7.selected();
	mod2.pad8.selected();

	mod3.selected();
	mod3.pad1.selected();
	mod3.pad2.selected();
	mod3.pad3.selected();
	mod3.pad4.selected();
	mod3.pad5.selected();
	mod3.pad6.selected();
	mod3.pad7.selected();
	mod3.pad8.selected();

	mod4.selected();
	mod4.pad1.selected();
	mod4.pad2.selected();
	mod4.pad3.selected();
	mod4.pad4.selected();
	mod4.pad5.selected();
	mod4.pad6.selected();
	mod4.pad7.selected();
	mod4.pad8.selected();
}

function keyTyped() {
	// print("key: " + key);
	// print("keyCode: " + keyCode);
	if (keyCode === 32) {
		if (play === 0) {
			play = 1;
			volume = 0.5;

			mod1.osc.start();
			mod2.osc.start();
			mod3.osc.start();
			mod4.osc.start();
		} else {
			play = 0;
			volume = 0;

			mod1.osc.stop();
			mod2.osc.stop();
			mod3.osc.stop();
			mod4.osc.stop();

			r = 255;
			g = 255;
			b = 255;
			alpha = 200;
		}	
	}
}

function modPlay() {
	this.selected = function() {
		this.d = dist(mouseX, mouseY, 40, 40);
		if (this.d < 20) {
			if (play === 0) {
				play = 1;
				volume = 0.5;

				mod1.osc.start();
				mod2.osc.start();
				mod3.osc.start();
				mod4.osc.start();
			} else {
				play = 0;
				volume = 0;

				mod1.osc.stop();
				mod2.osc.stop();
				mod3.osc.stop();
				mod4.osc.stop();

				r = 255;
				g = 255;
				b = 255;
				alpha = 200;
			}
		}
	};

	this.display = function() {
		noStroke();
		fill(100);
		rect(20, 20, 40, 40, 3);
		fill(200);
		triangle(35, 35, 35, 45, 45, 40);
	};
}

function modPad(title, osc, type, x, y) {
	this.w = 430;
	this.h = 200;
	this.x = x;
	this.y = y;

	this.f = 0;

	this.pad1 = new pad(this.x + 20, this.y + this.h / 2 - 20);
	this.pad2 = new pad(this.x + 70, this.y + this.h / 2 - 20);
	this.pad3 = new pad(this.x + 120, this.y + this.h / 2 - 20);
	this.pad4 = new pad(this.x + 170, this.y + this.h / 2 - 20);
	this.pad5 = new pad(this.x + 220, this.y + this.h / 2 - 20);
	this.pad6 = new pad(this.x + 270, this.y + this.h / 2 - 20);
	this.pad7 = new pad(this.x + 320, this.y + this.h / 2 - 20);
	this.pad8 = new pad(this.x + 370, this.y + this.h / 2 - 20);

	this.osc = new p5.Oscillator();
	this.osc.setType(type);
	this.osc.freq(osc);
	this.osc.amp(0);

	// this.delay = new p5.Delay();
	// this.delay.process(this.osc, .12, .7, 2300);

	this.reverb = new p5.Reverb();
	this.reverb.process(this.osc, 3, 2);

	this.selected = function() {
		this.d = dist(mouseX, mouseY, this.x + 25, this.y + 25);
		if (this.d < 10) {
			if (this.f === 0) { this.f = 1; }
			else { this.f = 0; }
		}
	};

	this.move = function() {
		if (this.f === 1) {
			this.y = mouseY - 20;
			this.x = mouseX - 20;
		} else {
			this.x = this.x;
			this.y = this.y;
		}
	};

	this.play = function() {
		if (this.pad1.f === 1 && loop === 0) { this.osc.amp(volume); }
		else if (this.pad2.f === 1 && loop === 1) { this.osc.amp(volume); }
		else if (this.pad3.f === 1 && loop === 2) { this.osc.amp(volume); }
		else if (this.pad4.f === 1 && loop === 3) { this.osc.amp(volume); }
		else if (this.pad5.f === 1 && loop === 4) { this.osc.amp(volume); }
		else if (this.pad6.f === 1 && loop === 5) { this.osc.amp(volume); }
		else if (this.pad7.f === 1 && loop === 6) { this.osc.amp(volume); }
		else if (this.pad8.f === 1 && loop === 7) { this.osc.amp(volume); }
		else { this.osc.amp(0); }
	};

	this.display = function() {
		// noStroke();
		stroke(100, 40);
		strokeWeight(50);
		fill(100);
		rect(this.x, this.y, this.w, this.h, 10);
		noStroke();
		fill('#00ff84');
		ellipse(this.x + 20, this.y + 20, 10);
		fill(255);
		textFont('m', 20);
		text(title, this.x + 40, this.y + 20);
		fill(80);
		textFont('m', 12);
		text("0.1", this.x + this.w - 40, this.y + 20);
		stroke(80);
		strokeWeight(1);
		line(this.x + 10, this.y + 40, this.x + this.w - 10, this.y + 40);
		this.pad1.display(this.x + 20, this.y + this.h / 2 - 5);
		this.pad2.display(this.x + 70, this.y + this.h / 2 - 5);
		this.pad3.display(this.x + 120, this.y + this.h / 2 - 5);
		this.pad4.display(this.x + 170, this.y + this.h / 2 - 5);
		this.pad5.display(this.x + 220, this.y + this.h / 2 - 5);
		this.pad6.display(this.x + 270, this.y + this.h / 2 - 5);
		this.pad7.display(this.x + 320, this.y + this.h / 2 - 5);
		this.pad8.display(this.x + 370, this.y + this.h / 2 - 5);
	};
}

function pad(x, y) {
	this.w = 40;
	this.h = 40;
	this.x = x;
	this.y = y;

	this.f = 0;

	this.selected = function() {
		this.d = dist(mouseX, mouseY, this.x + 20, this.y + 20);
		if (this.d < 20) {
			if (this.f === 0) { this.f = 1; }
			else { this.f = 0; }
		}
	};

	this.display = function(x, y) {
		this.x = x;
		this.y = y;
		noStroke();
		if (this.f === 1) { fill('#00ff84'); }
		else { fill(200); }
		rect(this.x, this.y, this.w, this.h, 3);
	};
}