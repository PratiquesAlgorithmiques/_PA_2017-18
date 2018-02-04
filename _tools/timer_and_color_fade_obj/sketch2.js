var counter = 0;
var timer;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
}

function draw() {}

function mousePressed() {
	counter = 0;
	new Fader();
}


class Fader {
	constructor() {
		
		self = this;

		this.counter = 0;
		this.x = random(width);
		this.y = random(height);
		this.timer = setInterval(this.display, 20);
	}

	display() {
		fill(self.counter);
		rect(self.x, self.y, 200, 200);

		self.counter = self.counter + 1;
		
		if (self.counter >= 255) {
			clearInterval(self.timer);
			// this = null;
		}
	}
}



