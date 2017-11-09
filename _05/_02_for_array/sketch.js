var myarray;

function setup() {
	createCanvas(windowWidth, windowHeight);

	textAlign(CENTER);

	myarray = ['hi', 'there', 'bonjour', 'goodbye'];

	for (var i = 0; i < myarray.length; i++) {
 		text(myarray[i], width/2, i * 100 + 300); 
  }
}