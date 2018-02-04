
// déclarer les variables
var imageList = ["DSC_4573.JPG","DSC_4589.JPG"];
var soundList1 = ['scream1.mp3','scream2.mp3','scream3.mp3','scream4.wav','scream5.wav','scream6.wav','scream7.mp3','scream8.wav','scream9.wav','scream10.mp3'];
var soundList2 = ['cloche interieur.mp3','cri karate femme.mp3','cri1.mp3','cri2.mp3','decompte ko.mp3'];
var soundList2_40 = ['punch2.wav','punch4.wav','kick2.mp3','kick3.wav'];
var mySound1 = [] ;
var mySound2 = [];
var mySound2_40 = [];
var myImage, mySound, myStars; 
//var mySoundIsPlaying = true;
//var pageIsShifting;
//morered = 0;
var counter = 0, counterMySound1 = 0, delta = 0;// ne pas oublier de donner la valeur initiale de la variable rhaaa!;
var answer , fstars;

var coordonnéesX25 = [862,776,722,660,592,521,913,763,659,536]; // visages des statuettes de droite à gauche et de haut en bas!;
var coordonnéesY25 = [199, 258,296,283,280,286,450,437,424,480];
var coordonnéesX40 = [498,800,580,777];//f#1: main G, f#1: mains D,f#1: pied G,f#1: pied D;
var coordonnéesY40 = [71,164,604,602];
var X = 300;
var Y = -300;
var Z = 0 ;

function setup() {
	createCanvas(windowWidth, windowHeight,WEBGL);  //creating canvas; 
	
    //print("hello");   //premier check;

    //loadSound('soundList1/'+ soundList1[0], loaded);// troisième check charger un élément de soundList1, merci Jeff pour cette histoire d'arborescence!!!;
	//loadSound('soundList2/'+ soundList2[0], loaded);// quatrième check charger un élément de soundList2;

    arrow(0); // appel de la fonction arrow;     

}

function draw(){

	if(fstars === true){
		frameRate(2);
		stars(myStars);
	}
}


function loaded1(sound){ // ESSAI 4. Pour l'instant je n'essaye qu'avec les sons de l'image 1 que j'envoie dans le f° loaded1. L'idée étant d'envoyer chaque sons dans une nouvelle variable.
    mySound1[counterMySound1] = sound;
    //print(mySound1[0]);
    //print(mySound1[counterMySound1]);
    mySound1[counterMySound1].setVolume(0.5);
	mySound1[counterMySound1].play();
	//print("counterMySound1 = " + counterMySound1);

	counterMySound1 = counterMySound1 + 1;

	if(counterMySound1 >= mySound1.length){
		counterMySound1 = 0;
	}

}

function loaded(sound){
	mySound = sound;
	mySound.setVolume(0.5);
	mySound.play();

	/*if(pageIsShifting === true){       //essai 1;
		mySound.stop();
	}
	pageIsShifting = ! pageIsShifting;*/
}

function arrow(x){ // définition de la f° arrow
	
	//noFill();
	//noStroke();
	//rect(3872*0.3, 0, 110, 50);
	translate(-width/2, -height/2, 0);
	stroke(x);
	strokeWeight(3);
	line(3872*0.3, 25, 0,(3872*0.3) + 90, 25, 0);
	line((3872*0.3)+ 60, 25-15, 0, (3872*0.3) + 90, 25, 0);
	line((3872*0.3)+ 60, 25+15, 0, (3872*0.3) + 90, 25, 0);
	
}


function mousePressed(){ // changer l'image lorsqu'on clique sur la zone de la flèche;

    print(mouseX, mouseY); // obtenir les coordonées des différents boutons;


	if (mouseX >= 3872*0.3 && mouseX <= (3872*0.3)+110 && mouseY<= 50){
		//print("conditions"); 
        loadImage(imageList[counter], display);
        counter = counter + 1; 	
        background(255);

        /*if(mySound.isPlaying){
        	print("hello");
        	mySound.stopAll();
        }*/
 	 }
        //pageIsShifting = true;              //ESSAI 1;
       

        /*if(mySound.isPlaying ()){     //  ESSAI 3 : je reprends l'exemple tel qu'il est écrit sur le site de p5;
        	//print("hello");
        	mySound.stop();	
        }*/

	if (counter>= imageList.length){
		counter= 0;
		//print("counter"); //est-ce que l'incrémentation se fait?;
     }

    if (imageList[counter] === imageList[0] ){
		//print("answer= true"); 
    answer = false;
    mouseClicked();
	} 
	else {
		//print("answer= false");
    answer = true;
    mouseClicked();
	}	

}

function display(img){ // définition  de la f° display;
	myImage = img;
	translate(0, 0, -50);
	texture(myImage);
	plane(3872*0.3,2592*0.3);
	arrow(255); 

	//image(myImage, 110, 0, 3872*0.3,2592*0.3); // anciennes coordonnées des images en mode non WEBGL (2D);		
}

function mouseClicked(){
	// en passant à WEBGL j'ai constaté un décalage des cordonnées dont j'ai du modifier les valeurs...mais le décalage n'était pas aussi important que l'aurait supposé le passage du repère TOP LEFT au repère CENTER (?).

 if (answer === true){// il faut que je trouve un son lié au background. Une valse peut-être...

 	/*background(10 + morered, 0, 0,10);	
    morered = morered + 10; */   // ==> Pq ne f° pas en WEBGL !!

 for(i=0; i<coordonnéesX25.length; i++){
 	var d25 = dist(mouseX, mouseY, coordonnéesX25[i], coordonnéesY25[i]);
 	if(d25<=25){
 	loadSound('soundList1/'+ soundList1[i], loaded);	
 	}
 }
	
 }
 else if (answer === false){
 	
 	for(i=0; i<coordonnéesX40.length; i++){
 	var d40 = dist(mouseX, mouseY, coordonnéesX40[i], coordonnéesY40[i]);
 	if(d40<=40){
 	loadSound('soundList2/sound40/'+ soundList2_40[i], loaded);	
 	}
    }

	var k = dist(mouseX, mouseY,367, 112);//goddess;
    var l = dist(mouseX, mouseY,628, 87);// fighter#1 (Une amazone sûrement...);
    //var q = dist(mouseX, mouseY,809, 62);//wings;
    var r = dist(mouseX, mouseY,825, 84);//zizi;
    var s = dist(mouseX, mouseY,990, 227);// armored fighter;
  

    if (k<100){
	loadSound('soundList2/'+ soundList2[4], loaded);
    }
    else if (l<60){
	loadSound('soundList2/'+ soundList2[1], loaded);
    }
    else if (r<10){
	loadSound('soundList2/'+ soundList2[0], loaded);
    }
    else if (s<125){
	loadSound('soundList2/'+ soundList2[2], loaded);
	//loadImage('star.png', stars);
	preload();
	fstars = true;
	
    }
 }
} 
function preload (){

	myStars = loadImage('star.png');
}

function stars(img2){ // fonction régissant le mouvement de translation autour d'un axe, ici axe Y, d'un futur objet star. le mvt se fera dans un temps limité, il faut aussi voir comment effacer les étoiles générées par draw au fur et à mesure. je ne peux pas recréer un background dans ce cas. 

if( X >= 300 && X <= 350 && Z >= -50 && Z <= 0 ) {
translate(X,Y,Z);
texture(img2);
plane(30, 30);
delta += 10;
X = X + delta;
Z= Z - delta;
}

delta = 0;

if(X >= 350 && X <= 400 && Z >= -50 && Z <= 0){
translate(X, Y, Z);
texture(img2);
plane(30, 30);
delta+= 10;
X = X + delta;
Z= Z + delta;
}

delta = 0;

if(X >= 350 && X <= 400 && Z >=0 && Z <= 50){
translate(X, Y, Z);
texture(img2);
plane(30, 30);
delta+= 10;
X = X - delta;
Z= Z + delta;
}

delta = 0;

if(X >= 300 && X <= 350 && Z >= 0 && Z <= 50){
translate(X, Y, Z);
texture(img2);
plane(30, 30);
delta+= 10;
X = X - delta;
Z= Z - delta;

}
}

function mouseMoved (){
	if (mouseX >= 3872*0.3 && mouseX <= (3872*0.3)+110 && mouseY<= 50){
		cursor(HAND);
	} 
	else {
		(cursor(ARROW));
	}

	if (answer === true){// il faut que je trouve un son lié au background. Une valse peut-être...

    for(i=0; i<coordonnéesX25.length; i++){
 	var d25 = dist(mouseX, mouseY, coordonnéesX25[i], coordonnéesY25[i]);
 	    if(d25<=25){
 		cursor(HAND);
 	    }
 	}
    }
    else if (answer === false){

 	for(i=0; i<coordonnéesX40.length; i++){
 	var d40 = dist(mouseX, mouseY, coordonnéesX40[i], coordonnéesY40[i]);
 	if(d40<=40){
 	cursor(HAND);
 	}
    }
	var k = dist(mouseX, mouseY,367, 112);//goddess;
    var l = dist(mouseX, mouseY,628, 87);// fighter#1 (Une amazone sûrement...);
    //var q = dist(mouseX, mouseY,809, 62);//wings;
    var r = dist(mouseX, mouseY,825, 84);//zizi;
    var s = dist(mouseX, mouseY,990, 227);// armored fighter;
  

    if (k<100){
	cursor(HAND);
    }
    else if (l<60){
	cursor(HAND);
    }
    else if (r<10){
	cursor(HAND);
    }
    else if (s<125){
	cursor(HAND);
    }
 }    
}
/*console.log(mySound);
  return(mySound);
pop(); 
push();
slice(); merci alex !!! :) */

/*Suite des opérations:
- il faut que le son s'arrête quand on passe à une nouvelle image. 
-créer un objet en translation autour d'un axe pour animer des petites étoiles autour de la tête d'une des figures du vase.
-créer des liens hypertextes renvoyant au plan du musée et donnant la location des oeuvres prises en photos, ou alors un lien téléchargeable de ce plan.
-créer des petits encarts affichants quelques infos mythologiques/ historiques sur les oeuvres correspondants et des annecdotes.
-créer des GIFs.
-me démmerder mieux avec WEBGL pour : changer la couleur du background. créer des objets tout a fait plans...
-ajouter des lumières et une caméra ortho.
-faire une page d'affichage un peu plus...classe?*/




