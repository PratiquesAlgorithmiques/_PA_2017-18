// je définie les variables
var boutons = []; // liste vide pour la remplir après
var couleurs = ["fonce", "pale", "pale"]; // 2 fois plus de chance de tomber sur pale
var blurp;
var hooray;

// je charge les sons
function preload() {
  blurp = loadSound('sounds/blurp.mp3');
  hooray = loadSound('sounds/hooray.wav');
}


function setup() { // quand je charge la page 
  createCanvas(windowWidth, windowHeight);
  background(233,150,122);
  frameRate(30) // nombre d'image par seconde (vitesse d'oscillation)
  for (var i = 0; i < 100; i++) { 
// pour une bloucle for =
     //for(declare le compteur à 0 ; déclare la condition de validation pour que la boucle marche (il va creer jusqu'a 100 boutons ); a chaque passage dans la boucle (iteration) je modifie le compteurs)
     // i ++ équivaut a i=i+1 (je lui rajoute 1 pour pouvoir comptabiliser jusqu'a 100 sinon le i reste a 0)
  
  // à chaque tours dans la boucle : 
    var x = random(width);
    var y = random(height);
    var d = random(20, 100);
    var c = random(couleurs)
    if (c == "fonce") {  // si la couleur choisit est foncé le son est hooray
      var son = hooray;
    }
    if (c == "pale") {
      var son = blurp
    }
    var b = new Bouton(x, y, d, c, son); // création d'un bouton aléatoire
    boutons = append(boutons, b) //  on ajoute un bouton a la liste boutons. donc dans la premiere boucle : liste vide +1 et a la fin 100 boutons dans la liste
  }
}


function draw() { // faire bouger les boutons
  background(191, 2, 2, 2); // background transparent => effet trainée (R,G,B,opacité)
  for (var i = 0; i < boutons.length; i++) {
    boutons[i].move(); // trouver l'élément I et le faire bouger 
    boutons[i].show(); // trouver l'élément I et l'afficher
  }
}


function mousePressed() { // quand on clique sur la souris 
  for (var i = 0; i < boutons.length; i++) {
    boutons[i].clicked(mouseX, mouseY); // des que je clique il vérifie que ma souris est sur 1 des 100 boutons et LE bouton sera modifié
  }
}


