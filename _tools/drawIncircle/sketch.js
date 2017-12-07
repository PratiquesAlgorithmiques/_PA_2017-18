var		i;

function setup() {
	createCanvas(windowWidth, windowHeight);
	i = 0;
}

function draw() {
	i = (i > 360) ? 0 : i;		// syntaxe ternaire : "i = [condition] ? [oui] : [non];"
	background(255);		// page en blanc
	fill(255, 0, 0);		// remplir en rouge
	ellipse(200, 200, 10);		// dessiner une ellipse pour l'origine
	fill(0, 255, 0);		// remplir en vert
	drawInCircle(200, 200, 100, i); // Appel a la fonction
	i++;
}

function drawInCircle(x, y, rayon, degree) {
	// "x" et "y" comme coordonee d'origine.
	// "rayon" permet de decaler la position en pixel. (ici, decalage sur l'axe y).
	// "degree" est l'angle voulu par rapport a l'origine.

	// Les deux machins qui suivent constituent le coeur de la rotation
	// Conversion degree en radian, pour cosinus et sinus
	var radian = degree * (PI / 180);
	// Calcul de la nouvelle coordonee :
	// Application d'une rotation et d'une translation.
	this.mcos = cos(radian);
	this.msin = sin(radian);
	this.x = x + (0 * this.mcos - rayon * this.msin);
	this.y = y + (0 * this.msin + rayon * this.mcos);

	// Le machin a dessiner selon le this.x et this.y
	// Vous pouvez modifier comme bon vous semble :)
	// pour mettre des lignes etc...
	// ==============================================
	ellipse(this.x, this.y, 50);
	line(x, y, this.x, this.y);
	// ==============================================
}
