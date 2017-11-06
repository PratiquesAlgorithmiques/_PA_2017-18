var OH, monTexte1, monTexte2, monTexte3, monTexte4, monTexte5;
var monarray;

function preload(){
 OH = loadImage('imag/Untitled-3.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

    // monTexte1 = 'Toute la vie des sociétés' ;
    // monTexte2 = 'dans lesquelles règnent les conditions modernes de production';
    // monTexte3 = 's’annonce comme une immense accumulation de spectacles.'; 
    // monTexte4 = 'Tout ce qui était directement vécu';
    // monTexte5 = 's’est éloigné dans une représentation.';

    monarray = ['Toute la vie des sociétés', 
                'dans lesquelles règnent les conditions modernes de production', 
                's’annonce comme une immense accumulation de spectacles.', 
                'Tout ce qui était directement vécu', 
                's’est éloigné dans une représentation.'
                ];

    textSize(25);
    textAlign(CENTER);
}
  
function rotation1(){
    if (frameCount % 10 === 0) {
        push();
        translate(width/2, height/2);
        rotate(radians(frameCount * 2  % 360));
        image (OH, 0, 0);
        pop();
    }
}

function draw(){

    if (millis() > 1000) {
        image (OH, mouseX, mouseY);
    }
    
    rotation1();
}

function keyTyped() {

    background (255);

    if (key === "d") {
        text(monarray[0], width/2, 20);
    }

    if (key === "e") {
        text(monarray[1], width/2, 50);
    }

    if (key === "b") {
        text(monarray[2], width/2, 75);
    }

    if (key === "o") {
        text(monarray[3], width/2, 100);
    }

    if (key === "r") {
        text(monarray[4], width/2, 125);
    }

    if (key === "g") {
        text(monarray[4], width/2, 150);
    }
}