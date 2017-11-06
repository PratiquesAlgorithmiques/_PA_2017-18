function setup() {
	createCanvas(windowWidth, windowHeight);
	background("#9edfcb");

	monArray = ['Khand', 'Jura', 'Prata', 'Rufina', 'Cormorant', 'Inconsolata', 'Open Sans Condensed', 'Fjalla One', 'Quicksand', 'Archivo Black'];

	textSize(30);
	fill("#349a9b");
  // textAlign(?);

}

function draw() {
	background("#9edfcb");
	text(monTexte, random(width), random(height));
}


function myfunction(test) {
  fill(random(256));

  var w = textWidth(test);

	text(test, random(0, width - w), random(height));
}

function keyPressed() {
	textFont(random(monArray));
	background("#9edfcb");
	
	 if ((key == 'a') || (key == 'A')) {
    myfunction('blablabla');
  }

     if ((key == 'b') || (key == 'B')) {
    myfunction('super');
  }

     if ((key == 'c') || (key == 'C')) {
    myfunction('génial');
  }

     if ((key == 'd') || (key == 'D')) {
    myfunction("on s'amuse");
  }

     if ((key == 'e') || (key == 'E')) {
    myfunction('vraiment');
  }

     if ((key == 'f') || (key == 'F')) {
    myfunction('beaucoup');
  }

     if ((key == 'g') || (key == 'G')) {
    myfunction("j'ai vu mon ancien prof");
  }

     if ((key == 'h') || (key == 'H')) {
    myfunction("c'était super");
  }

    if ((key == 'i') || (key == 'I')) {
    myfunction("on a peu discuté");
  }

     if ((key == 'j') || (key == 'J')) {
    myfunction("mais tant pis");
  }

     if ((key == 'k') || (key == 'K')) {
    myfunction("je lui enverrai un mail");
  }

     if ((key == 'l') || (key == 'L')) {
    myfunction("bientôt!!!");
  }

     if ((key == 'm') || (key == 'M')) {
    myfunction("j'espère");
  }

     if ((key == 'n') || (key == 'N')) {
//       var aChar = myfunction("c'était une chouette soirée");
// var cWidth = textWidth(aChar);
// text(aChar, random(width), random(height));
// // line(cWidth, 0, cWidth, 50); ?

//     var aString = myfunction("c'était une chouette soirée");
// var sWidth = textWidth(aString);
// text(aString, random(width), random(height));
// // line(sWidth, 50, sWidth, 100); ?
  }

     if ((key == 'o') || (key == 'O')) {
    myfunction("youpi");
  }

     if ((key == 'p') || (key == 'P')) {
    myfunction("vive le vent");
  }

     if ((key == 'q') || (key == 'Q')) {
    myfunction("trop tard lol");
  }

     if ((key == 'r') || (key == 'R')) {
    myfunction("je devrai dormir d'ailleurs");
  }

     if ((key == 's') || (key == 'S')) {
    myfunction("surtout si demain je vais courir");
  }

     if ((key == 't') || (key == 'T')) {
    myfunction("pfiou");
  }

     if ((key == 'u') || (key == 'U')) {
    myfunction("j'irai à la fin de ncis");
  }

     if ((key == 'v') || (key == 'V')) {
    myfunction("LOS ANGELESSSSSSSSSS");
  }

  if ((key == 'w') || (key == 'W')) {
    myfunction("los anrelesssss");
  }

     if ((key == 'x') || (key == 'X')) {
    myfunction("je vais essayer 1 ou 2 trucs");
  }

     if ((key == 'y') || (key == 'Y')) {
    myfunction("je voulais pas bosser demain snif");
  }

     if ((key == 'z') || (key == 'Z')) {
    myfunction("pas grave bonne nuit!!!!!");
  }

}