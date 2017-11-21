var myPrediction;
var champ;
var bouton;
var i = "";
var mySound = ['sounds/yeah.flac'];
var img;
var signes = ["poisson, Poisson, POISSON, verseau, Verseau, VERSEAU, bélier, Bélier, BELIER, taureau, Taureau, TAUREAU, gémeaux, Gémeaux, GEMEAUX, cancer, Cancer, CANCER, lion, Lion, LION, vierge, VIERGE, Vierge, balance, Balance, BALANCE, scorpion, Scorpion, SCORPION, sagittaire, Sagittaire, SAGITTAIRE, capricorne, Capricorne, CAPRICORNE"  ]; 

function preload(){

  sante = loadStrings('_sante.txt');
  travail = loadStrings('_travail.txt');
  amour = loadStrings('_amour.txt');
  poesie = loadStrings('_poesie.txt');
  phraseamour = loadStrings('_phraseamour.txt');
  phrasepoesie = loadStrings('_phrasepoesie.txt');
  phrasesante = loadStrings('_phrasesante.txt');
  phrasetravail = loadStrings('_phrasetravail.txt');
  mySound = loadSound('sounds/yeah.flac');
  img = loadImage("etoiles.jpeg"); 


}


function setup() {

  createCanvas(windowWidth, windowHeight);
  background(img);
 
  mySound.play();

 
  myPrediction = new prediction();

  champ = createInput();
  champ.changed(afficheTexte);
  champ.position(10, 30);
  
  bouton = createButton("ENTREZ VOTRE SIGNE ASTROLOGIQUE ET OBTENEZ LE FUTUR");
  bouton.mousePressed(afficheTexte);
  bouton.position(195,30); 
}


function afficheTexte() {

  if ((champ.value() === "verseau") || (champ.value() === "Verseau") || (champ.value() === "VERSEAU") || (champ.value() === "poisson") || (champ.value() === "Poisson") || (champ.value() === "POISSON") || (champ.value() === "taureau") || (champ.value() === "Taureau") || (champ.value() === "TAUREAU") || (champ.value() === "bélier") || (champ.value() === "Bélier") || (champ.value() === "BELIER") || (champ.value() === "gémeaux") || (champ.value() === "Gémeaux") || (champ.value() === "GEMEAUX") || (champ.value() === "cancer") || (champ.value() === "Cancer") || (champ.value() === "CANCER") || (champ.value() === "lion") || (champ.value() === "Lion") || (champ.value() === "LION") || (champ.value() === "vierge") || (champ.value() === "Vierge") || (champ.value() === "VIERGE") || (champ.value() === "sagittaire") || (champ.value() === "Sagittaire") || (champ.value() === "SAGITTAIRE") || (champ.value() === "capricorne") || (champ.value() === "Capricorne") || (champ.value() === "CAPRICORNE") || (champ.value() === "scorpion") || (champ.value() === "SCORPION") || (champ.value() === "Scorpion") || (champ.value() === "balance") || (champ.value() === "Balance") || (champ.value() === "BALANCE")) {

  
     i = champ.value();
     myPrediction.current(i);
    myPrediction.display();

  } else {  

  background(img);
  text( " '' " + champ.value() + " '' " + " N'EST PAS UN SIGNE" + " \n\ " + " \n\ " + " POUR OBTENIR LE FUTUR," + " \n\ " + " \n\ " + " VEUILLEZ RECOMMENCEZ SANS MENSONGE. ", width/3, height/2);
  textFont('Julis Sans One');
    textAlign(LEFT);
    textAlign(CENTER, CENTER);
    textSize(25);
    fill(225, 197, 39);

 
  
  
  
}
  
}