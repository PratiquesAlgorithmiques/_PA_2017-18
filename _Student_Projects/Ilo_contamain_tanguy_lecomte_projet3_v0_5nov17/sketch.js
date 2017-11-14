function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	textSize(25);
	fill(211, 84, 0);
	
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
	
	loadStrings('_nombres_1.txt', n1);
	loadStrings('_nombres_2.txt', n2);
	loadStrings('_nombres_3.txt', n3);
	loadStrings('_operations_1.txt', o1);
	loadStrings('_operations_2.txt', o2);
	loadStrings('_operations_3.txt', o3);
}

function n1(result_1) {
	nombres_1 = result_1;
}

function n2(result_1) {
	nombres_2 = result_1;
}

function n3(result_1) {
	nombres_3 = result_1;
}

function o1(result_1) {
	operation_1 = result_1;
}

function o2(result_1) {
	operation_2 = result_1;
}

function o3(result_1) {
	operation_3 = result_1;
}


function draw(){
	background(174, 214, 241);
 
	text((current_0 + " " + current_1 + " " + current_2 + " \n\ " + current_3 + " " + current_4 + " " + current_5 + " " + current_6 + " \n\ " + current_7 + " " + current_8 + " " + current_9 + " \n\ " + current_10 + " " + current_11 + " " + current_12), width/3, height/2);
}


function mousePressed() {
	current_0 = random(nombres_2);
	current_1 = random(operation_1);
	current_2 = random(nombres_3);
	current_3 = random(operation_2);
	current_4 = random(nombres_2);
	current_5 = random(operation_1);
	current_6 = random(nombres_1);
	current_7 = random(operation_2);
	current_8 = random(nombres_2);
	current_9 = random(operation_2);
	current_10 = random(nombres_3);
	current_11 = random(operation_2);
	current_12 = random(nombres_1);
}


