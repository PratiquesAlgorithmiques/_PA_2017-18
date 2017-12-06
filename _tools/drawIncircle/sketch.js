var		i;

function setup() {
	createCanvas(windowWidth, windowHeight);
	i = 0;
}

function draw() {
	i = i > 360 ? 0 : i;
	background(255);
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

	// Conversion degree en radian, pour cosinus et sinus
	var radian = degree * (PI / 180);
	
	// Calcul de la nouvelle coordonee :
	// Application d'une rotation et d'une translation.
	this.x = x + (0 * Math.cos(radian) - rayon * Math.sin(radian));
	this.y = y + (0 * Math.sin(radian) + rayon * Math.cos(radian));

	// Le machin a dessiner selon le this.x et this.y
	// Vous pouvez modifier comme bon vous semble :)
	// pour mettre des trais etc.. faire une horloge...
	// ==============================================
	ellipse(this.x, this.y, 50);
	// ==============================================
}
