var lengthLigne_1 = 0, arrayEcriture = [], arrayLigne_1 = [], arrayPieds = [], i;


function preload() {
	arrayEcriture = loadStrings('data/_ecriture.txt');
	arrayPieds = loadStrings('data/_pieds.txt');
}



function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	i = 0;
}


function draw() {

	if (lengthLigne_1 === 6) {

		for (var y = 0; y < arrayEcriture.length; y++) {
 		print(arrayLigne_1[y]); 
 		noLoop();
 	}

	} else if (lengthLigne_1 < 6) {

		i = int(random(arrayPieds.length));

		lengthLigne_1 = lengthLigne_1 + arrayPieds[i];
		arrayLigne_1 = append(arrayLigne_1, arrayEcriture[i]);

		print(arrayLigne_1);

	} else if (lengthLigne_1 > 6) {
		lengthLigne_1 = lengthLigne_1 - arrayPieds[i];
			arrayLigne_1 = shorten(arrayLigne_1);

	}
}