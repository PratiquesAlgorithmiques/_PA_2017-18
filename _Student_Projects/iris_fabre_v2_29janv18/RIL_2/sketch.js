var img;
var mySound;
var longueur;
var largeur;
var X1 = [];
var Y1 = [];

var soundList =  ['moustiquiere.wav' , 'luce.wav' , 'martine_jupe.wav', 'martine_top.wav' , 'enzo_maillot.wav', 'homme_prehistorique_1.wav', 
                  't-shirt.wav', 'sac_jeté.wav','veste_verte.wav','enzo_gillet.wav','chemisier.wav', 'robe_guingette.wav','pull.wav','homme_prehistorique_2.wav',
                  'tchatchatcha.wav','robe_hippy.wav','jordanne_2.wav','perfecto.wav','robe_sequins.wav','helene.wav','jordanne_1.wav','helene.wav',
                  'enzo_chemise.wav','lucas.wav','japonais.wav','eva.wav','japonais.wav'];

function preload(){
	img = loadImage("imgs/fond-2.jpg");
}


function setup (){
	createCanvas(windowWidth, windowHeight);

	background(100, 255, 255);

  imageMode(CORNER);
	image(img, 0, 0, windowWidth, windowHeight);

  // print(mouseX, mouseY);

	longueur = (windowWidth/6);
  largeur = (windowHeight/5);

  X1 = [0, 0, 0, 0, 0, 
        windowWidth/6, windowWidth/6, windowWidth/6, windowWidth/6, windowWidth/6, 
        (windowWidth/6)*2,(windowWidth/6)*2,(windowWidth/6)*2,(windowWidth/6)*2,(windowWidth/6)*2, 
        (windowWidth/6)*3, (windowWidth/6)*3 ,(windowWidth/6)*3 ,(windowWidth/6)*3 ,(windowWidth/6)*3,
        (windowWidth/6)*4, (windowWidth/6)*4, (windowWidth/6)*4,(windowWidth/6)*4, (windowWidth/6)*4, 
        (windowWidth/6)*5, (windowWidth/6)*5, (windowWidth/6)*5, (windowWidth/6)*5, (windowWidth/6)*5];

  Y1 = [ 0, windowHeight/5,(windowHeight/5)*2,(windowHeight/5)*3,(windowHeight/5)*4,
         0, windowHeight/5,(windowHeight/5)*2,(windowHeight/5)*3,(windowHeight/5)*4,
         0, windowHeight/5,(windowHeight/5)*2,(windowHeight/5)*3,(windowHeight/5)*4,
         0, windowHeight/5,(windowHeight/5)*2,(windowHeight/5)*3,(windowHeight/5)*4,
         0, windowHeight/5,(windowHeight/5)*2,(windowHeight/5)*3,(windowHeight/5)*4 ,
         0, windowHeight/5,(windowHeight/5)*2,(windowHeight/5)*3,(windowHeight/5)*4];
}



/*


	 rect1 [0,0,windowWidth/6,windowHeight/5];
	 rect2 [0,windowHeight/5,windowWidth/6,windowHeight/5];
	 rect3 [0,(windowHeight/5)*4,windowWidth/6,windowHeight/5];
	 rect4 [0,(windowHeight/5)*3,windowWidth/6,windowHeight/5];
	 rect5 [0,(windowHeight/5)*2,windowWidth/6,windowHeight/5];

	 rect6 [windowWidth/6,0,windowWidth/6,windowHeight/5];
	 rect7 [windowWidth/6,windowHeight/5,windowWidth/6,windowHeight/5];
	 rect8 [windowWidth/6,(windowHeight/5)*4,windowWidth/6,windowHeight/5];
	 rect9 [windowWidth/6,(windowHeight/5)*3,windowWidth/6,windowHeight/5];
	 rect10 [windowWidth/6,(windowHeight/5)*2,windowWidth/6,windowHeight/5];

	 rect11[(windowWidth/6)*2,0,windowWidth/6,windowHeight/5];
	 rect12[(windowWidth/6)*2,windowHeight/5,windowWidth/6,windowHeight/5];
	 rect13[(windowWidth/6)*2,(windowHeight/5)*4,windowWidth/6,windowHeight/5];
	 rect14[(windowWidth/6)*2,(windowHeight/5)*3,windowWidth/6,windowHeight/5];
	 rect15[(windowWidth/6)*2,(windowHeight/5)*2,windowWidth/6,windowHeight/5];

	 rect16[(windowWidth/6)*3,0,windowWidth/6,windowHeight/5];
	 rect17[(windowWidth/6)*3,windowHeight/5,windowWidth/6,windowHeight/5];
	 rect18[(windowWidth/6)*3,(windowHeight/5)*4,windowWidth/6,windowHeight/5];
	 rect19[(windowWidth/6)*3,(windowHeight/5)*3,windowWidth/6,windowHeight/5];
	 rect20[(windowWidth/6)*3,(windowHeight/5)*2,windowWidth/6,windowHeight/5];

	 rect21[(windowWidth/6)*4,0,windowWidth/6,windowHeight/5];
	 rect22[(windowWidth/6)*4,windowHeight/5,windowWidth/6,windowHeight/5];
	 rect23[(windowWidth/6)*4,(windowHeight/5)*4,windowWidth/6,windowHeight/5];
	 rect24[(windowWidth/6)*4,(windowHeight/5)*3,windowWidth/6,windowHeight/5];
	 rect25[(windowWidth/6)*4,(windowHeight/5)*2,windowWidth/6,windowHeight/5];

	 rect26[(windowWidth/6)*5,0,windowWidth/6,windowHeight/5];
	 rect27[(windowWidth/6)*5,windowHeight/5,windowWidth/6,windowHeight/5];
	 rect28[(windowWidth/6)*5,(windowHeight/5)*4,windowWidth/6,windowHeight/5];
	 rect29[(windowWidth/6)*5,(windowHeight/5)*3,windowWidth/6,windowHeight/5];
	 rect30[(windowWidth/6)*5,(windowHeight/5)*2,windowWidth/6,windowHeight/5];





function pauseAudio() {
    soundList.pause();
    soundList.currentTime = 0;
}

*/

function loaded(sound){
	mySound=sound;
	mySound.setVolume(0,5);
	mySound.play();

}


function mousePressed() {
	if (mouseX >= X1[1] && mouseX <= longueur && mouseY>=Y1[1] && mouseY<= largeur ){
		loadSound('sounds/' + soundList[1], loaded);

	} 

	//else {
	
	 //pauseAudio();

}





