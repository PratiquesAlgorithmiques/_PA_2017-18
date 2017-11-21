// EMONOMY v0.6

function results() {
	if (b_score > w_score) {
		if (f == 0) {
			f = 1;
			tb_score++;
			for (var z = 0; z < playerarray.length; z++) {
				if (playerarray[z].team == 0) { playerarray[z].n_mon = int(b_score / nb_b + (b_score * 100 / pb_score - 100) * playerarray[z].m); }
				else { playerarray[z].n_mon = -int(w_score / nb_w + (w_score * 100 / pw_score - 100) * playerarray[z].m); }
				playerarray[z].mon += playerarray[z].n_mon;
				if (playerarray[z].mon < 0) { los = z; t = -2; return; }
			}			
		}
		for (var z = 0; z < playerarray.length; z++) { playerarray[z].display(); }
			fill(0, 0, 255);
		text("ATN/LKE " + tw_score + " " + w_score + " " + int(w_score * 100 / pw_score - 100) + "%", 100, 100);
		// text(w_score, 100, height / 2 + 200);
		fill(255, 255, 0);
		if (int(frameCount / 10) % 2 == 1) {
			text("ATN/SAD " + tb_score + " " + b_score + " " + int(b_score * 100 / pb_score - 100) + "%", 100, 200);
			// text(b_score, 100, height / 2 - 100);
		}
	}
	else if (b_score < w_score) {
		if (f == 0) {
			f = 1;
			tw_score++;
			for (var z = 0; z < playerarray.length; z++) {
				if (playerarray[z].team == 1) { playerarray[z].n_mon = int(w_score / nb_w + (w_score * 100 / pw_score - 100) * playerarray[z].m); }
				else { playerarray[z].n_mon = -int(b_score / nb_b + (b_score * 100 / pb_score - 100) * playerarray[z].m); }
				playerarray[z].mon += playerarray[z].n_mon;
				if (playerarray[z].mon < 0) { los = z; t = -2; return; }
			}
		}
		for (var z = 0; z < playerarray.length; z++) { playerarray[z].display(); }
			fill(0, 0, 255);
		if (int(frameCount / 10) % 2 == 1) { 
			text("ATN/LKE " + tw_score + " " + w_score + " " + int(w_score * 100 / pw_score - 100) + "%", 100, 100);
			// text(w_score, 100, height / 2 - 100);
		}
		fill(255, 255, 0);
		text("ATN/SAD " + tb_score + " " + b_score + " " + int(b_score * 100 / pb_score - 100) + "%", 100, 200);
		// text(b_score, 100, height / 2 + 200);
	}
	else if (b_score == w_score && b_score > 0) {
		if (f == 0) {
			f = 1;
			tb_score++;
			tw_score++;
		}
		// (var z = playerarray.length - 1; z > -1; z--)
		for (var z = 0; z < playerarray.length; z++) { playerarray[z].display(); }
			if (int(frameCount / 10) % 2 == 1) { 
				fill(0, 0, 255);
				text("ATN/LKE " + tw_score + " " + w_score + " " + int(w_score * 100 / pw_score - 100) + "%", 100, 100);
			// text(w_score, 100, height / 2 + 200);
			fill(255, 255, 0);
			text("ATN/SAD " + tb_score + " " + b_score + " " + int(b_score * 100 / pb_score - 100) + "%", 100, 200);
			// text(b_score, 100, height / 2 - 100);
		}
	}
	j++;
	if (j > 29) {
		j = 0;
		n--;
	}
	if (n < 1) {
		nr = 1;
		r = 10;
		n = 30;
		t = 80; // 80
		pb_score = b_score;
		b_score = 0;
		pw_score = w_score;
		w_score = 0;
		love_s = 0;
		angry_s = 0;
		k++;
		if (k > 3) { k = 0; }
		for (var z = 0; z < playerarray.length; z++) { playerarray[z].n_mon = 0; }
		if (tb_score + tw_score == 1) {
			squarearray = append(squarearray, new Square(int(random(480 + 100, width - 100)), int(random(100, height - 100))));
		}
		if (tb_score + tw_score == 2) {
			squarearray = append(squarearray, new Square(int(random(480 + 100, width - 100)), int(random(100, height - 100))));
		}
	}
	if (n < 11) {
		fill ('#00ff84');
		if (tb_score == 9 || tw_score == 9) { text("it may be the end! ready? " + n, width / 2, height / 2); }
		else if (tb_score == 9 && tw_score == 9) { text("it's the end! ready? " + n, width / 2, height / 2); }
		else { text(stringarray[k] + n, width / 2, height / 2); }
	}
}