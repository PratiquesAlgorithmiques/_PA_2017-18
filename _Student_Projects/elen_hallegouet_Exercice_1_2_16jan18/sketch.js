var imageCount = 15;// 2= nombe d'images
var images = [];
var currentImageIndex = 0;
var fingers = [
  '☝',
  '☞',
  '☟',
  '☜',
];
var currentFingerIndex = 0;


function preload() {
  for (var i = 0; i < imageCount; i++) {
    images.push(loadImage('./images/img' + (i + 1) + '.jpg'));
  }
}


function setup() {
  createCanvas(1000, 800);

  textSize(50);
  imageMode(CENTER);

  drawImageAndFinger();
}


function mousePressed() {
  currentImageIndex = getRandomImageIndex();
  currentFingerIndex = (currentFingerIndex + 1) % fingers.length;

  drawImageAndFinger();
}

function drawImageAndFinger() {
  var currentImage = images[currentImageIndex];
  var imageRatio = currentImage.width / currentImage.height;
  var canvasRatio = width / height;
  if (imageRatio > canvasRatio) {
    currentImage.resize(width, 0);
  } else {
    currentImage.resize(0, height);
  }
  clear();
  image(currentImage, width / 2, height / 2);
  text(fingers[currentFingerIndex], width / 2, height / 2);
}

function getRandomImageIndex() {
  return getRandomInt(images.length);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

