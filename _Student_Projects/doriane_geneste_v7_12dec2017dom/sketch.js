var m;
var o;
var l;
var p;
var n;
var Texte;
var Texte1;
var Texte2; 


function preload() {

 Texte = loadStrings('societe_spectacle.txt');
 Texte1 = loadStrings('etudiant.txt');
 Texte2 = loadStrings('debordrapport.txt');
}

function intoLine(string) {
	var container = "";
	for (var i = 0; i < string.length; i++) {
		container += string[i];
		container += '<br><br>';
	}
	return container;
}

function setup() {
	// c = createCanvas(windowWidth, 200);
	// c.position(0, windowHeight-200);
	// background(255,0,0);


			n = createDiv(""); 
			n.size(600, 200);
			n.style("background-color", "#fffefe");
			n.class("lemon");
			n.style("overflow-y", "auto");
			n.position(200, 50);
			n.html(intoLine(Texte));

			l = createDiv(""); 
			l.size(600, 200);
			l.style("background-color", "#fffefe");
			l.style("overflow-y", "auto");
			l.position(200, 350);
			l.html(intoLine(Texte1));

			p = createDiv(""); 
			p.size(600, 200);
			p.style("background-color", "#fffefe");
			p.style("overflow-y", "auto");
			p.position(200, 650);
			p.html(intoLine(Texte2));

		}