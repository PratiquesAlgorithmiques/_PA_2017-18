
// déclarer les variables
var imageList = ["DSC_4573.JPG","DSC_4589.JPG"];
var soundList1 = ['scream1.mp3','scream2.mp3','scream3.mp3','scream4.wav','scream5.wav','scream6.wav','scream7.mp3','scream8.wav','scream9.wav','scream10.mp3'];
var soundList2 = ['cloche interieur.mp3','cri karate femme.mp3','cri1.mp3','cri2.mp3','decompte ko.mp3'];
var soundList2_40 = ['punch2.wav','punch4.wav','kick2.mp3','kick3.wav'];
var mySound1 = [ s0 = '', s1 = '' , s2 = '', s3 = '', s4= '', s5 = '', s6 = '', s7 = '', s8 = '', s9 = ''] ;
var mySound2 = [s10 = '', s11 = '', s12 = '', s13 = '', s14 = ''];
var mySound2_40 = [s20 = '', s21 = '', s22 = '', s23 = ''];
var myImage, mySound, pageIsShifting;
//var mySoundIsPlaying = true;
var counter = 0, counterMySound1 = 0;// ne pas oublier de donner la valeur initiale de la variable rhaaa!;
var answer;
var coordonnéesX25 = [872,786,732,670,602,531,923,783,659,556]; // visages des statuettes de droite à gauche et de haut en bas!;
var coordonnéesY25 = [259,318,356,343,340,346,510,497,484,540];
var coordonnéesX40 = [498,810,590,777];//f#1: main G, f#1: mains D,f#1: pied G,f#1: pied D;
var coordonnéesY40 = [121,214,634,632];


function setup() {
	createCanvas(windowWidth, windowHeight);  //creating canvas; 
    //print("hello");   //premier check;

    //loadSound('soundList1/'+ soundList1[0], loaded);// troisième check charger un élément de soundList1, merci Jeff pour cette histoire d'arborescence!!!;
	//loadSound('soundList2/'+ soundList2[0], loaded);// quatrième check charger un élément de soundList2;

    arrow(0); // appel de la fonction arrow; 

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

	/*if(pageIsShifting === true){ essai 1
		mySound.stop();
	}*/ 
}



function arrow(x){ // définition de la f° arrow
	
	noFill();
	noStroke();
	rect(3872*0.3, 0, 110, 50 );
	stroke(x);
	strokeWeight(3);
	line(3872*0.3, 25, (3872*0.3) + 90, 25);
	line((3872*0.3)+ 60, 25-15, (3872*0.3) + 90, 25);
	line((3872*0.3)+ 60, 25+15, (3872*0.3) + 90, 25);
}


function mousePressed(){ // changer l'image lorsqu'on clique sur la zone de la flèche;

    print(mouseX, mouseY); // obtenir les coordonées des différents boutons;


	if (mouseX >= 3872*0.3 && mouseX <= (3872*0.3)+110 && mouseY<= 50){
		//print("conditions"); 
        loadImage(imageList[counter], display);
        counter = counter + 1; 

      
        /*pageIsShifting = true;              //ESSAI 1;
        pageIsShifting = ! pageIsShifting;*/

       /* if(mySound.isPlaying === true){    //ESSAI 2 : synthaxe? voir essai 3; 
        	//print("hello");
        	mySound.stop();
        }*/

        /*if(mySound.isPlaying ()){     //  ESSAI 3 : je reprends l'exemple tel qu'il est écrit sur le site de p5;
        	//print("hello");
        	mySound.stop();
        }*/

	}


	 
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
	image(myImage, 110, 0, 3872*0.3,2592*0.3);
	arrow(255); 
}



function mouseClicked(){

	

 if (answer === true){// il faut que je trouve un son lié au background. Une valse peut-être...

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
    var l = dist(mouseX, mouseY,648, 127);// fighter#1 (Une amazone sûrement...);
    //var q = dist(mouseX, mouseY,809, 62);//wings;
    var r = dist(mouseX, mouseY,835, 134);//zizi;
    var s = dist(mouseX, mouseY,990, 277);// armored fighter;
  

    if (k<60){
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
    }
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
    var l = dist(mouseX, mouseY,648, 127);// fighter#1 (Une amazone sûrement...);
    //var q = dist(mouseX, mouseY,809, 62);//wings;
    var r = dist(mouseX, mouseY,835, 134);//zizi;
    var s = dist(mouseX, mouseY,990, 277);// armored fighter;
  

    if (k<60){
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


// il faut que le son s'arrête quand on passe à une nouvelle image. Utiliser isPlaying()?
