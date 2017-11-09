var myblob, myblob2;

function setup() {
	createCanvas(windowWidth, windowHeight);

  fill(125);
  stroke(255);

  myblob = new Blob();
  myblob2 = new Blob(); 
}

function draw() {
  background(50, 1);

  myblob.move();
	myblob.display();

	myblob2.move();
	myblob2.display(); 
}

class Blob {
	constructor() {
		this.x = width/2;
  	this.y = height/2;
	}

	move() {
		this.x = this.x + random(-10, 10);
	  this.y = this.y + random(-10, 10);
	}

	display() {
		ellipse(this.x, this.y, 50, 50);
	}
}


