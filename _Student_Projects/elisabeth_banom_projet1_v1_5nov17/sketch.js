
// déclarer les variables
var imageList = ["DSC_4573.JPG","DSC_4589.JPG"];
var soundList1 = ['scream1.mp3','scream2.mp3','scream3.mp3','scream4.wav','scream5.wav','scream6.wav','scream7.mp3','scream8.wav','scream9.wav','scream10.mp3'];
var soundList2 = ['cloche interieur.mp3','cri karate femme.mp3','cri1.mp3','cri2.mp3','decompte ko.mp3','kick1.mp3','kick2.mp3','kick3.wav','punch1.mp3','punch2.wav','punch3.wav','punch4.wav'];

var mySound, myImage;
var counter = 0; // ne pas oublier de donner la valeur initiale de la variable rhaaa!;
var answer;




function preload (){// charger la première image, second check NB: la fonction preload ne peut pas être incluse dans setup (n'a pas le temps de charger??!!); 
		
	myImage = loadImage(imageList[0]);	
}		


function setup() {
	createCanvas(windowWidth, windowHeight);  //creating canvas; 
    //print("hello");   //premier check;


    //image(myImage, 110, 0, 3872*0.3,2592*0.3); // second check: afficher myImage = imageList[0];
     //loadSound('soundList1/'+ soundList1[0], loaded);// troisième check charger un élément de soundList1, merci Jeff pour cette histoire d'arborescence!!!;
	//loadSound('soundList2/'+ soundList2[0], loaded);// quatrième check charger un élément de soundList2;

    arrow(0); // appel de la fonction arrow; 
}
 
 
function loaded(sound){
	mySound = sound;
	mySound.setVolume(0.5);
	mySound.play();
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

	var a = dist(mouseX, mouseY,872, 259); // visages des statuettes de droite à gauche et de haut en bas!;
    var b = dist(mouseX, mouseY,786, 318);
    var c = dist(mouseX, mouseY,732, 356);
    var d = dist(mouseX, mouseY,670, 343);
    var e = dist(mouseX, mouseY,602, 340);
    var f = dist(mouseX, mouseY,531, 346);
    var g = dist(mouseX, mouseY,923, 510);
    var h = dist(mouseX, mouseY,783, 497);
    var i = dist(mouseX, mouseY,659, 484);
    var j = dist(mouseX, mouseY,556, 540);

    if (a<25){
	loadSound('soundList1/'+ soundList1[0], loaded);
    }
    else if (b<25){
	loadSound('soundList1/'+ soundList1[1], loaded);
    }
    else if (c<25){
	loadSound('soundList1/'+ soundList1[2], loaded);
    } 
    else if (d<25){
	loadSound('soundList1/'+ soundList1[3], loaded);
    }
    else if (e<25){
	loadSound('soundList1/'+ soundList1[4], loaded);
    }
    else if (f<25){
	loadSound('soundList1/'+ soundList1[5], loaded);
    }
    else if (g<25){
	loadSound('soundList1/'+ soundList1[6], loaded);
    }
    else if (h<25){
	loadSound('soundList1/'+ soundList1[7], loaded);
    }
    else if (i<25){
	loadSound('soundList1/'+ soundList1[8], loaded);
    }
    else if (j<25){
	loadSound('soundList1/'+ soundList1[9], loaded);	
	}
 }
 else if (answer === false){
	var k = dist(mouseX, mouseY,367, 112);//goddess;
    var l = dist(mouseX, mouseY,648, 127);// fighter#1 (Amazone?);
    var m = dist(mouseX, mouseY,498, 121);//  f#1: main G;
    var n = dist(mouseX, mouseY,810, 214);//f#1: mains D;
    var o = dist(mouseX, mouseY,590, 634); // f#1: pied G;
    var p = dist(mouseX, mouseY,777, 632); //f#1: pied D;
    var q = dist(mouseX, mouseY,809, 62);//wings;
    var r = dist(mouseX, mouseY,835, 134);//zizi;
    var s = dist(mouseX, mouseY,990, 277);// armored fighter;
  

    if (k<60){
	loadSound('soundList2/'+ soundList2[4], loaded);
    }
    else if (l<60){
	loadSound('soundList2/'+ soundList2[1], loaded);
    }
    else if (m<40){
	loadSound('soundList2/'+ soundList2[9], loaded);
    } 
    else if (n<40){
	loadSound('soundList2/'+ soundList2[11], loaded);
    } 
    else if (o<40){
	loadSound('soundList2/'+ soundList2[6], loaded);
    }
    else if (p<40){
	loadSound('soundList2/'+ soundList2[7], loaded);// il faut que je trouve le son de battement d'ailes pour 'var q'
    }
    else if (r<10){
	loadSound('soundList2/'+ soundList2[0], loaded);
    }
    else if (s<125){
	loadSound('soundList2/'+ soundList2[2], loaded);
    }
 }	
} 
// il faut que le son s'arrête quand on passe à une nouvelle image. Utiliser isPlaying()?
