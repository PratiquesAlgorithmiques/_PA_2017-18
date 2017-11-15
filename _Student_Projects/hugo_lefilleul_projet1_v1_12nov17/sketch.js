var img;
var t1, t2;

function preload (){
	img = loadImage("imgs/prestation_nuance_04.jpg");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  t1 = "";
  t2 = "";
}

function draw() {
  background(61, 121, 33);
  image(img, mouseX, mouseY);

  textSize(1000);
  text(t1, 126, 680);

  textSize(32);
  text(t2, width/2, height/2);
} 




function keyTyped() {
	if (key === "a") {
		t1 = "A";
	}
}


function mousePressed () {
	t2 = "...ligator";
}


//comment faire pour que l'image ne recouvre pas tout ? 
//Comment faire pour créer plusieurs tableau en gros ?










