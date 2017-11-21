
class Bouton { //shéma d'un bouton
  
  constructor(x, y, d, c, son) { //paramêtre qu'il faut pour creer un bouton
    this.x = x; //position X
    this.y = y; //position Y
    this.d = d; // diametre
    this.clice = false; // est ce qu'il est cliqué (non par défaut)
    this.color = c; //fonce ou pale
    this.son = son; //blurp ou hooray
  }

  clicked(px, py) { // voir si on a cliqué (ligne 14 et 15 copier/coller web)
    var d = dist(px, py, this.x, this.y); // ? coordonnées de ma souris sont bien dans le cercle ?
    if (d < this.d) { // si je clique sur le bouton le clice deviens true et le son est joué 
      this.clice = true;
      this.son.play()
    }
  }

  move() { // fonction pour faire bouger les boutons
    if (this.color == "fonce") { // si le bouton est foncé
      this.x = this.x + random(-5, 5); // alors il bouge d'un nombre aléatoire entre -5 et 5
      this.y = this.y + random(-5, 5);
    }

    if (this.color == "pale") { // si le bouton est pale il bouge moins
      this.x = this.x + random(-2, 2);
      this.y = this.y + random(-2, 2);
    }
  }

  show() { // fonction qui affiche le bouton  l'écran
    strokeWeight(0); // on supprime les bordures
    if (this.color == "fonce") { // si le bouton est foncé
      fill(255,120,110); // on le rempli avec la couleur foncée
    }  
    if (this.color == "pale") {
      fill(255,160,122);
    }
    
    ellipse(this.x, this.y, this.d * 2); // le gros cercle
 
    fill(255,255,200) // la couleur du cercle interne (pustule)
    ellipse(this.x, this.y, this.d/1.2); // le cercle interne

    if ((this.clice) && (this.color == "pale")) { // si le bouton est cliqué et pâle
      fill(255,255,100); // il devient blanc pale
      ellipse(this.x, this.y, this.d * 2); // la couleur remplit tout le gros cercle
    }
    if ((this.clice) && (this.color == "fonce")) {
      fill(255,255,150); // il devient blanc jaune
      ellipse(this.x, this.y, this.d * 3); // il grossit
    }
  }
}