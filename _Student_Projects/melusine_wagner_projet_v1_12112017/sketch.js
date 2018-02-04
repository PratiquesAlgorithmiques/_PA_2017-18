

var alpha;
var beta;
var gamma;
var delta;
var epsilon;
var digamma;
var Planet;


function preload(){
  alpha = loadImage('models/alpha.jpg');
  beta = loadImage('models/beta.png');
  gamma = loadImage('models/gamma.PNG');
  delta = loadImage('models/delta.png');
  epsilon = loadImage('models/epsilon.PNG');
  digamma = loadImage('models/digamma.PNG');
}

function setup(){

  createCanvas(windowWidth, windowHeight, WEBGL);

  directionalLight(238, 127, 86, 0, 0, 1);

  mapWidth = 1000; 
  mapHeight = 1000;
  mapDepth = 1000;

  
}

function draw(){

  background(2, 20, 35);

  
  rotateY(frameCount * 0.004);
  rotateZ(0.4);


  texture(alpha);
  //rotateX(frameCount*0.01);
  //translate(-500,0);
  p1=sphere(60);
 
  //rotateX(frameCount*0.006);
  texture(beta);
  //translate(200,0);
  p2=sphere(50);
 
  //rotateX(frameCount*0.03);
  texture(gamma);
  //translate(100, 0);
  p3=sphere(40);
  
  //rotateX(frameCount*0.001);
  texture(delta);
  //translate(100,0);
  p4=sphere(30);
 
  //rotateX(frameCount*0.009);
  texture(epsilon);
  //translate(60,0);
  p5=sphere(20);
  
 
  texture(digamma);
  //translate(40,0);
  p6=sphere(10);
  
}

function  OnMousePressed(){

//Cliquer sur la planete ? pour afficher des infos

}
