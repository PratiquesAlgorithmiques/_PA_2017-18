var blobarray = [];

function setup() {
	createCanvas(windowWidth, windowHeight);

  // planetarray[0] = new Planet(0, "venus", 100, alpha, -500);
  // planetarray[1] = new Planet(1);
  // planetarray[2] = new Planet(2);

  for(var i=0; i < 2; i++) {
    blobarray[i] = new Blob(0);
  }  
}

function draw() {
  background(50);

  for(var i=0; i < blobarray.length; i++) {
    blobarray[i].move();
    blobarray[i].display();
  }   
}

function mousePressed() {
	blobarray = append(blobarray, new Blob(0)); 
}