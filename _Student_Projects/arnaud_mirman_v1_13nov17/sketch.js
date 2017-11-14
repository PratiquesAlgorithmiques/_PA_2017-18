var shapesArr = [];
var shapeNumb;
var mapWidth, mapHeight, mapDepth;

function setup(){
   createCanvas(windowWidth, windowHeight, WEBGL);

   shapeNumb = 300; //nombre de formes générées

   //dimensions de la map
   mapWidth = 3000; 
   mapHeight = 3000;
   mapDepth = 3000;

   //creation d'un array avec tous les objets Shape. Comme paramètres x, y, z qui sont selon les dimensions de la map
   for(var i = 0; i < shapeNumb; i++) {
   		append(shapesArr, new Shape(random(-mapWidth/2, mapWidth/2), random(-mapHeight/2, mapHeight/2), random(mapDepth)));
   }

   noStroke(); //enlève les contours
   ambientLight(255); //lumière blanche
 }

function draw(){
	background(0);
	
	camera(0, 0, (height/2.0) / tan(PI*30.0 / 180.0), 0, 0, 0, 0, 1, 0); //camera de base avec les paramètres par défaut 

	translate(0,0,-2500); //recule l'observateur pour ne pas être au milieu des formes

	for(var i = 0; i < shapeNumb; i++) { 
		shapesArr[i].displayMe(); //affiche chaque forme
		shapesArr[i].move();	  //déplace chaque forme
		shapesArr[i].rotation();  //rotation de chaque forme
	}
}


var Shape = function(_x, _y, _z) {
	this.locV = createVector(_x, _y, _z); //position de la forme


	this.shapeColor = color(random(255), random(255), random(255)); //couleur de la forme


	this.sizeShape = random(100); //premier diamètre
	this.sizeShape2 = random(70); //diamètre du trou

	//où va la forme
	this.destination = createVector(random(-mapWidth/2, mapWidth/2), random(-mapHeight/2, mapHeight/2), random(mapDepth)); 

	this.speed = random(5); //à quelle vitesse
	
	this.delta = createVector(0,0,0); //delta sert à move() pour donner une fraction du vecteur entre la position et la destination

	//variables pour la rotation de chaque forme
	this.rotateObjX = 0; 
	this.rotateObjY = 0;
	this.rotateObjZ = 0;

	this.rotateObjXSpeed = random(1);
	this.rotateObjYSpeed = random(1);
	this.rotateObjZSpeed = random(1);
}
	
	Shape.prototype.displayMe = function() {
		push();
		translate(this.locV.x, this.locV.y, this.locV.z); //déplacement jusqu'à la position de la forme
		ambientMaterial(this.shapeColor); 				  //couleur de la forme
		rotateX(map(this.rotateObjX, 0, 100, 0, 2*PI));	  //application de la rotation en X
		rotateY(map(this.rotateObjY, 0, 100, 0, 2*PI));	  //application de la rotation en Y
		rotateZ(map(this.rotateObjZ, 0, 100, 0, 2*PI));   //application de la rotation en Z
		torus(floor(this.sizeShape), floor(this.sizeShape2)); //affiche la forme
		pop();


		//trouve une nouvelle destination quand on s'est assez rapproché de la destination 
		if(p5.Vector.sub(this.locV, this.destination).mag() <= 10) {
			this.destination = createVector(random(-mapWidth/2, mapWidth/2), random(-mapHeight/2, mapHeight/2), random(mapDepth));
		}
	}

	Shape.prototype.move = function() {
		this.delta = p5.Vector.sub(this.destination, this.locV); //calcul de la différence entre la position et la destination
		this.delta.normalize();									 //normalisation (entre 0 et 1) du vecteur
		this.delta.mult(this.speed);							 //multiplication par la vitesse propre à chaque forme
		this.locV.add(this.delta);								 //ajout de delta au vecteur position
	}

	Shape.prototype.rotation = function() {
		this.rotateObjX += this.rotateObjXSpeed;
		this.rotateObjY += this.rotateObjYSpeed;
		this.rotateObjZ += this.rotateObjZSpeed;
	}