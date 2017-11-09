var myblob, myblob2;

function setup() {
	createCanvas(windowWidth, windowHeight);

  myblob = new Blob(0);
  myblob2 = new Blob(255); 
}

function draw() {
  background(50, 1);

  myblob.move();
	myblob.display();

	myblob2.move();
	myblob2.display(); 
}


