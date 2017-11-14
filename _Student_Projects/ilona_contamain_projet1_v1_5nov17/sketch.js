
function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	textSize(22);
	fill(225, 197, 39);
	//stroke(50);
		textAlign(LEFT);

	
	current_0 = "";
	current_1 = "";
	current_2 = "";
	current_3 = "";
	current_4 = "";
	current_5 = "";
	current_6 = "";
	current_7 = "";
	current_8 = "";
	current_9 = "";
	current_10 = "";
	current_11 = "";
	current_12 = "";
	
	loadStrings('_sante.txt', s);
	loadStrings('_travail.txt', t);
	loadStrings('_amour.txt', a);
	loadStrings('_poesie.txt', p);
	loadStrings('_phraseamour.txt', pa);
	loadStrings('_phrasepoesie.txt', pp);
	loadStrings('_phrasesante.txt', ps);
	loadStrings('_phrasetravail.txt', pt);
	loadStrings('_signes.txt', si);

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

function si(result_1) {
	signes = result_1;
}



function draw(){
	background(40, 68, 194);
	textFont('Contrail One');

	text(current_12 + " \n\ " +  " \n\ " + " SANTE " + " \n\ " + " \n\ " + current_8 + " \n\ " +  current_0 + " \n\ " + current_1 + " \n\ " + " \n\ " + " TRAVAIL " + " \n\ " + " \n\ " + current_9 + " \n\ " + current_2 + " \n\ " + current_3 + " \n\ " + " \n\ " + " AMOUR " + " \n\ " + " \n\ " + current_10 + " \n\ " + current_4 + " \n\ " + current_5 + " \n\ " + " \n\ " + " POESIE " + " \n\ " + " \n\ " + current_11 + " \n\ " + current_6 + " \n\ " + current_7 , width/3, height/2);
	

	// rect(50, 50, 450, 600);
}



function mousePressed() {

	current_0 = random(sante);
	current_1 = random(sante);
	current_2 = random(travail);
	current_3 = random(travail);
	current_4 = random(amour);
	current_5 = random(amour);
	current_6 = random(poesie);
	current_7 = random(poesie);
	current_8 = random(phrasesante);
	current_9 = random(phrasetravail);
	current_10 = random(phraseamour);
	current_11 = random(phrasepoesie);
	current_12 = random(signes);
}
	

