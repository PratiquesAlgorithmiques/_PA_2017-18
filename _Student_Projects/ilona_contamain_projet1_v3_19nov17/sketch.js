var myPrediction;
var champ;
var bouton;
var i = "";
var mySound = ['sounds/yeah.flac'];
var img;
var signes = ["poisson, Poisson, POISSON, verseau, Verseau, VERSEAU, bélier, Bélier, BELIER, taureau, Taureau, TAUREAU, gémeaux, Gémeaux, GEMEAUX, cancer, Cancer, CANCER, lion, Lion, LION, vierge, VIERGE, Vierge, balance, Balance, BALANCE, scorpion, Scorpion, SCORPION, sagittaire, Sagittaire, SAGITTAIRE, capricorne, Capricorne, CAPRICORNE"  ]; 

function preload(){

  loadStrings('_sante.txt', s);
  loadStrings('_travail.txt', t);
  loadStrings('_amour.txt', a);
  loadStrings('_poesie.txt', p);
  loadStrings('_phraseamour.txt', pa);
  loadStrings('_phrasepoesie.txt', pp);
  loadStrings('_phrasesante.txt', ps);
  loadStrings('_phrasetravail.txt', pt);
  mySound = loadSound('sounds/yeah.flac');
  img = loadImage("etoiles.jpeg"); 


}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(img);
  textAlign(CENTER, CENTER);
  textAlign(LEFT);
  textFont('Contrail One');

  mySound.play();

 
  myPrediction = new prediction();

  champ = createInput();
  champ.changed(afficheTexte);
  champ.position(10, 30);
  
  bouton = createButton("ENTREZ VOTRE SIGNE ASTROLOGIQUE ET OBTENEZ LE FUTUR");
  bouton.mousePressed(afficheTexte);
  bouton.position(195,30); 


}


function s(result_1) {
  sante = result_1;
}

function t(result_1) {
  travail = result_1;
}

function a(result_1) {
  amour = result_1;
}

function p(result_1) {
  poesie = result_1;
}

function ps(result_1) {
  phrasesante = result_1;
}

function pt(result_1) {
  phrasetravail = result_1;
}

function pa(result_1) {
  phraseamour = result_1;
}

function pp(result_1) {
  phrasepoesie = result_1;
}



function afficheTexte() {

  if (champ.value() === "Verseau") {

textFont('Contrail One');
     i = champ.value();
     myPrediction.current(i);
    myPrediction.display();

  } else {  
  /*clear();*/
  createCanvas( windowWidth, windowHeight);
  //background(img);
  textAlign(LEFT);
  textAlign(CENTER);
  textFont('Contrail One');
   textSize(20);
    fill(225, 197, 39);
 
  text( " n'est pas un signe ");
  
  
  
}
  
}
