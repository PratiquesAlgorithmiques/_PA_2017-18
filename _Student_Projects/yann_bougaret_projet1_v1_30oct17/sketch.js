var img;
var meme;
var x_velib;
var laser;
var milli;
var tmp;
var sound_laser;
var velo_tube;

var x;
var al = 255, w = 20;

function preload() {
	  img = loadImage("velib.png");
	  meme = loadImage("meme.png");
	  sound_laser = loadSound('laser.mp3');

	}

function setup() {

	createCanvas(windowWidth, windowHeight);
	x = height;
	background(26, 77, 69);
	//print(displayWidth, displayHeight)

	x_velib = 0;
	laser = 0;
	milli = millis();
	velo_tube = 350;
   
	setInterval(laser_plus,10);

	fill(26, 77, 69);
	stroke(0,0,255);
	
	
	
}


function draw(){

	

	background(26, 77, 69);
	fill(26, 77, 69);
	stroke(255,0,0);
	rect((width-100),75, 25,100);
	fill(255,0,0);
	rect((width-100),75, 25,laser);

	if (keyIsDown(LEFT_ARROW)) {
    x_velib-=5;
    velo_tube-=5;
    }

  	if (keyIsDown(RIGHT_ARROW)) {
    x_velib+=5;
    velo_tube+=5;
	}
	
	
	for (var i=0; i<100; i++) {
		strokeWeight(1);
		stroke(50, 155, 138);
		line(455,22, random(0,width),height);
	}


	if (millis() < 4000) {
		texte();
	}
	
	if (laser >= 100) {
		laser = 100;


	}



	if (laser <= 20) {
		
		laser_draw();
	}
	
	image(img, (x_velib+random(5)), (170+(random(5))), img.width/2, img.height/2);





}

function keyTyped() {
		  if (key === 'a') {
		   print("milli = " + millis());
			print("laser = " + laser);
			
		}

		if (key === 'z' && laser == 100) {
			laser=0;
			sound_laser.play();
			
		}
}

function laser_plus() {
	laser += 1;
}

function remettreValeurs(){
    x = height - 100;
    al = 255;
    w = 20;
  }


function laser_draw() {
	c = color(255,0,0, al);
    fill(c);
    ellipse(velo_tube, x, w/3, w*8);
    x -= 30; al -= 4; w -= 0.3; 
    if (x <= 0) {//quand x > la largeur du canvas (on sort du cadre) on remet les valeurs de départ
      remettreValeurs();
    }
}

function texte() {
	textSize(32);
	textAlign(CENTER);
	fill(random(255));
	text("USE '←','→' & PRESS 'Z' TO DESTROY ALL MOTHAFUCKAS ON YOUR WAY", width/2, height/2);
	fill(255,0,0);
	text("USE '←','→' & PRESS '  ' TO DESTROY ALL MOTHAFUCKAS ON YOUR WAY", width/2, height/2);
}
