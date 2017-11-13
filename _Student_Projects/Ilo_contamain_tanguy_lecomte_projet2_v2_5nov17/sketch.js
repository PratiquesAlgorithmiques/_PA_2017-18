var material, locate, light_source, inhabitants, current_0, current_1, current_2, current_3, T;

function preload() {
	material = loadStrings('data/material.txt');
	locate = loadStrings('data/_locate.txt');
	light_source = loadStrings('data/_light_source.txt');
	inhabitants = loadStrings('data/_inhabitants.txt');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign((width/2)-100, CENTER);
	T = 25;
	textSize(T);
	fill(0);
	current_0 = "";
	current_1 = "";
	current_2 = "";
	current_3 = "";
	
	// loadStrings('data/material.txt', m);
	// loadStrings('_locate.txt', lieu);
	// loadStrings('_light_source.txt', l_s);
	// loadStrings('_inhabitants.txt', i);
}

// function m(result_1) {
// 	material = result_1;
// 	print(material);
// }

// function lieu(result_2) {
// 	locate = result_2;
// }

// function l_s(result_3) {
// 	light_source = result_3;
// }

// function i(result_4) {
// 	inhabitants = result_4;
// }

function draw(){
	background(174, 214, 241);

	text((current_0 + " \n\ " + current_1 + " \n\ " + current_2 + " \n\ " + current_3), width/3, height/2);
	
}

function mousePressed() {

	current_0 = ("A HOUSE OF " + random(material));
	current_1 = ("      " + random(locate));
	current_2 = ("            USING " + random(light_source));
	current_3 = ("                  INHABITED BY " + random(inhabitants));
}