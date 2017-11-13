var img, imageList;

function setup() {
	createCanvas(windowWidth, windowHeight);

	imageList = ["img1.jpg", "img2.jpg", "img3.jpg"];
}

function draw() {
	if (img !== null) {
		image(img, width/2, height/2);
	}
}

function mousePressed() {
	img = loadImage(random(imageList));
}