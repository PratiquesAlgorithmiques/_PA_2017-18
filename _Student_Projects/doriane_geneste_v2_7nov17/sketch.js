var OH, monArray;
var myTimer;
var last_key;

function preload(){
 OH = loadImage('image/Debord.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  monArray = ['1',
  'Toute la vie des sociétés', 
  'dans lesquelles règnent les conditions modernes de production',
  's’annonce comme une immense accumulation de spectacles.',
  'Tout ce qui était directement vécu',
  's’est éloigné dans une représentation.', 
  ];
}

function monTexte(){
    textFont('Overpass Mono');
    textSize(40);
    textAlign(LEFT);
    text('écris debord', 20, 30);
    text('efface w', 20, height/2);
}

function guy(){
    image (OH, mouseX, mouseY);
}

function draw(){

    monTexte();

    textSize(25);
    textAlign(CENTER);

    setTimeout(guy, 1000);
}

function keyTyped() {

    if (key === "d") {
        if (last_key === "r")
            text(monArray[5], width/2, 150);
        else 
            text(monArray[0], width/2, 20);
        textsize(40);
    }

    if (key === "e") {
        text(monArray[1], width/2, 50);
    }

    if (key === "b") {
        text(monArray[2], width/2, 75);
    }

    if (key === "o") {
        text(monArray[3], width/2, 100);
    }

    if (key === "r") {
        text(monArray[4], width/2, 125);
    }

    if (key === "w") {
        background(255);
    }

    last_key = key;
}