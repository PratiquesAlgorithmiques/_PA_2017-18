var d;
var temp;

function setup(){
	createCanvas(windowWidth, windowHeight);

	monArray = ["Rest", "In", "Life"];

    textFont('Varela Round');
    textSize(100);
    textAlign(CENTER, CENTER);

	//var d = new Date();

	frameRate(1);
	//text_1 = "Rest";
    //text_2 = "In";
    //text_3 = "Life";

    mots(); 
    mybackground();
}


function draw(){
    mots();	
}

function mybackground(){

    noStroke();
    fill(random(255),random(255), random(255));  
    rect(0, 0, windowWidth, windowHeight/3);
    fill(random(255),random(255), random(255));
    rect(0, windowHeight/3, windowWidth, windowHeight/3);
    fill(random(255),random(255), random(255));
    rect(0, windowHeight/3*2, windowWidth, windowHeight/3); 

}

function mots(){
    text(monArray[0], width/2, height/3/2);
    fill(random(255),random(255), random(255));
    text(monArray[1], width/2, height/2);
    fill(random(255),random(255), random(255));
    text(monArray[2], width/2, (height/6)*5);
    fill(random(255),random(255), random(255)); 
}


function ashuffle(a) {
    console.log("coucou");
    
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    } 
}

//fonction qui permet de melanger la position des elements dans un array, fonction generique qui peut etre reutilisée !  

function mousePressed() {

	 mybackground();
	 ashuffle(monArray);
	 
	 console.log("souris click");
}

