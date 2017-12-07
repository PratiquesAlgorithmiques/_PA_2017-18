var monArray;

function setup() {
	createCanvas(windowWidth, windowHeight);

	monArray = ["apple", "orange", "pear", "grape", "banana", "grapefruit"];

	print(monArray);
	
	print("length = " + monArray.length);


	print(monArray[0]);
	print(monArray[4]);
	print(monArray[100]);

	print(random(6));						// float entre 0 et 5,9999999
	print(int(random(6)));			// int entre 0 et 5
	print(int(random(monArray.length)));		// int entre 0 et 5


	print(monArray[int(random(monArray.length))]); // int entre 0 et 5

	print(random(monArray));
	// monArray.length = 6
	// monArray[0] ou monArray[4]
}
