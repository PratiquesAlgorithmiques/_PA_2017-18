// EMONOMY v0.6

class Blob {
	constructor(x, y, c) {
		this.w = 75;
		this.x = x - this.w / 2;
		this.y = y - this.w / 2;
		this.c = c;
	}
	move() {
		this.ran_x = random(-5, 5);
		this.ran_y = random(-5, 5);
		if (this.x + this.ran_x < 480 + 100) { this.ran_x += random(5, 10); }
		this.x = this.x + this.ran_x;
		this.y = this.y + this.ran_y;
	}
	display() {
		if (this.c == 0) { image(like, this.x, this.y, this.w, this.w); }
		if (this.c == 1) { image(sad, this.x, this.y, this.w, this.w); }
		if (this.c == 2) { image(love, this.x, this.y, this.w, this.w); }
		if (this.c == 3) { image(angry, this.x, this.y, this.w, this.w); }
	}
}

class Player {
	constructor(n, name, team, m) {
		this.n = n;
		this.name = name;
		this.team = team;
		this.m = m * 0.1;
		this.mon = 500;
		this.n_mon = 0;
		this.alive = 1;
	}
	display() {
		if (this.team == 0) { fill(255, 255, 0); }
		else { fill(0, 0, 255); }
		// if (this.n_mon < 0) { text(this.name + " " + this.mon + "⨎ " + this.n_mon, 100, height - this.n * 100); }
		// else { text(this.name + " " + this.mon + "⨎ +" + this.n_mon, 100, height - this.n * 100); }
		text(this.name + " " + this.mon + "⨎ " + this.n_mon, 100, height - this.n * 100);
	}
}

class Square {
	constructor(x, y) {
		this.w = 240;
		this.h = 160;
		this.x = x - this.w / 2;
		this.y = y - this.h / 2;
		this.i = 60;
	}
	display() {
		this.g = get(this.x + this.w / 2, this.y + this.h / 2);
		if (this.i > 0) {
			image(imagearray[int(random(0, imagearray.length))], this.x, this.y, this.w, this.h);
			this.i--;
		} else {
			if ((this.g[0] == 0 && this.g[1] == 0 && this.g[2] == 255) || (this.g[0] == 255 && this.g[1] == 255 && this.g[2] == 255)) { w_score++; }
			if ((this.g[0] == 255 && this.g[1] == 255 && this.g[2] == 0) || (this.g[0] == 0 && this.g[1] == 0 && this.g[2] == 254)) { b_score++; }
			if ((this.g[0] == 255 && this.g[1] == 0 && this.g[2] == 255) || (this.g[0] == 255 && this.g[1] == 255 && this.g[2] == 254)) { love_s++; }
			if ((this.g[0] == 255 && this.g[1] == 0 && this.g[2] == 0) || (this.g[0] == 0 && this.g[1] == 0 && this.g[2] == 253)) { angry_s++; }
		}
	}
}