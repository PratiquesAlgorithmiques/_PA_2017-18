var	PIX_WIDTH = 480;
var	PIX_HEIGHT = 350;

//Demo setting for performance
PIX_WIDTH = 150;
PIX_HEIGHT = 85;

var	HUE_MAX = 85;

var	object = function(x, y) {
	ellipse(x, y, 10, 10);
//	rect(x, y, 10, 10);
}

var	unit_array = [];

function setup()
{
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 100);
	noStroke();
	rectMode(CENTER);
	for (let y = 5; y < PIX_HEIGHT; y += 10)
		for (let x = 5; x < PIX_WIDTH; x += 10)
			unit_array.push(new unit(100, x, y, object));
}

function draw()
{
	clear();
	for (let i = 0; i < unit_array.length; i++)
	{
		unit_array[i].update(mouseX, mouseY);
		unit_array[i].render();
	}
}

function unit(active_dist, x, y, object)
{
	this.x = x;
	this.y = y;
	this.hsb = [0.0, 0.0, 0.0, 100,0];
	this.active_dist = active_dist;
	this.obj = object;

	this.update = (x, y) =>
	{
		let	d = int(dist(x, y, this.x, this.y));
		if (d < active_dist && this.hsb[3] > 0)
		{
			let	factor = -(d / active_dist - 1);
			if (this.hsb[2] < 100)
				this.hsb[2] += 1 * factor;
			if (this.hsb[2] >= 100 && this.hsb[1] < 100)
				this.hsb[1] += 1 * factor;
			if (this.hsb[1] >= 100 && this.hsb[0] < HUE_MAX)
				this.hsb[0] += 1 * factor;
			if (this.hsb[0] >= HUE_MAX && this.hsb[3] > 0)
				this.hsb[3] -= 5;
		}
	}

	this.render = () =>
	{
		fill(this.hsb[0], this.hsb[1], this.hsb[2], this.hsb[3]);
		this.obj(this.x, this.y);
	}
}
