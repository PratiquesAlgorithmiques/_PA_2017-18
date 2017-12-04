var x;
var img
var images
var zoom = 1

function setup() {
	imageMode(CENTER);
	image (img, width*2, height*2);
	scale(zoom);

	images = ["imgs/capture11.PNG, imgs/Capture12.PNG, imgs/Capture13.PNG, imgs/Capture21.PNG, imgs/Capture25.PNG, imgs/Capture26.PNG, imgs/Capture27.PNG,  imgs/Capture28.PNG"];
	img = loadImage(random(images));
	//affiche une img random a chq chargement
}

function mousePressed () {
	
	img = loadImage(random(images));
	//affiche une nouvelle image a chq click ?
}

function mouseWheel(event) {

  zoom += sensativity * event.delta;
  

//zoomer sur l'image suivant la position mouseX,mouseY ?

	
