class Planet {

	constructor(x, y, z, d, tex, i)
	{
	this.x = x; //position x
	this.y = y;	//position y
	this.z = z; //position z
	this.d = d; //diametre
	this.tex = t; //texture
	this.i = i;
	this.clicked = false; // s'il est cliqué ou non
	}

	clicked(px, py, pz) 
	{
		var d = dist(px, py, pz, this.x, this.y, this.z);
		if( d< this.d) 
		{
			this.clicked = true;
			this.i.img();
		}
	}

	move() 
	{
		if(this.tex == "alpha")
		{
		rotateX(frameCount*0.01);
   		translate(-500,0);
		}
		if(this.tex == "beta"){
 		rotateX(frameCount*0.006);
		translate(200,0);
		}
		if(this.tex == "gamma"){
		rotateX(frameCount*0.03);  
		translate(100, 0);	
		}
		if(this.tex == "delta"){
		rotateX(frameCount*0.001);
		translate(100,0);
		}

		if(this.tex == "epsilon"){
		rotateX(frameCount*0.009);
		translate(60,0);
		}

		if(this.tex == "digamma"){
		rotateX(frameCount*0.2);
		translate(40,0);
		}

	}

	show() { // fonction qui affiche la Planet
		if (this.tex == "alpha") { // si la Planet est Alpha
      	image(alpha, width/2, height/3, windowWidth, windowHeight); // On affiche Alpha
    }  
   		if (this.tex == "beta") { // si la Planet est Beta
      	image(beta, width/2, height/3, windowWidth, windowHeight); // On affiche Beta
    }
		if (this.tex == "gamma") { // si la Planet est Gamma
      	image(gamma, width/2, height/3, windowWidth, windowHeight); // On affiche Gamma
    }      
		if (this.tex == "delta") { // si la Planet est Delta
      	image(delta, width/2, height/3, windowWidth, windowHeight); // On affiche Delta
    } 
		if (this.tex == "epsilon") { // si la Planet est Epsilon
      	image(epsilon, width/2, height/3, windowWidth, windowHeight); // On affiche Epsilon
    } 
		if (this.tex == "delta") { // si la Planet est Digamma
      	image(digamma, width/2, height/3, windowWidth, windowHeight); // On affiche Digamma
    } 
}