// EMONOMY v0.6

function settings() {
	if (i > 19) { i = 0; r--; t--; }
	i++;
	if (r > 1 || r == 0) { e = 0; }
	if (r < 2) { e = 1; }
	if (r < 1) {
		r = 10;
		nr++;
		for (var l = 0; l < squarearray.length; l++) {
			squarearray[l].i = 60;
			squarearray[l].x = int(random(480, width - squarearray[l].w));
			squarearray[l].y = int(random(0, height - squarearray[l].h));
		}
		if (blobarray.length < 40) {
			if (o == 0) {
				o = 1;
				blobarray = append(blobarray, new Blob(squarearray[0].x + squarearray[0].w / 2, squarearray[0].y + squarearray[0].h / 2, 0));
				blobarray = append(blobarray, new Blob(squarearray[0].x + squarearray[0].w / 2, squarearray[0].y + squarearray[0].h / 2, 3));
				blobarray = append(blobarray, new Blob(squarearray[0].x + squarearray[0].w / 2, squarearray[0].y + squarearray[0].h / 2, 2));
				blobarray = append(blobarray, new Blob(squarearray[0].x + squarearray[0].w / 2, squarearray[0].y + squarearray[0].h / 2, 1));
			} else if (o == 1) {
				o = 2;
				blobarray = append(blobarray, new Blob(squarearray[0].x + squarearray[0].w / 2, squarearray[0].y + squarearray[0].h / 2, 1));
				blobarray = append(blobarray, new Blob(squarearray[0].x + squarearray[0].w / 2, squarearray[0].y + squarearray[0].h / 2, 0));
				blobarray = append(blobarray, new Blob(squarearray[0].x + squarearray[0].w / 2, squarearray[0].y + squarearray[0].h / 2, 3));
				blobarray = append(blobarray, new Blob(squarearray[0].x + squarearray[0].w / 2, squarearray[0].y + squarearray[0].h / 2, 2));
			} else if (o == 2) {
				o = 3;
				blobarray = append(blobarray, new Blob(squarearray[0].x + squarearray[0].w / 2, squarearray[0].y + squarearray[0].h / 2, 2));
				blobarray = append(blobarray, new Blob(squarearray[0].x + squarearray[0].w / 2, squarearray[0].y + squarearray[0].h / 2, 1));
				blobarray = append(blobarray, new Blob(squarearray[0].x + squarearray[0].w / 2, squarearray[0].y + squarearray[0].h / 2, 0));
				blobarray = append(blobarray, new Blob(squarearray[0].x + squarearray[0].w / 2, squarearray[0].y + squarearray[0].h / 2, 3));
			} else if (o == 3) {
				o = 0;
				blobarray = append(blobarray, new Blob(squarearray[0].x + squarearray[0].w / 2, squarearray[0].y + squarearray[0].h / 2, 3));
				blobarray = append(blobarray, new Blob(squarearray[0].x + squarearray[0].w / 2, squarearray[0].y + squarearray[0].h / 2, 2));
				blobarray = append(blobarray, new Blob(squarearray[0].x + squarearray[0].w / 2, squarearray[0].y + squarearray[0].h / 2, 1));
				blobarray = append(blobarray, new Blob(squarearray[0].x + squarearray[0].w / 2, squarearray[0].y + squarearray[0].h / 2, 0));
			}
		}
	}

	fill(0, 0, 255);
	text("ATN/LKE " + tw_score + " " + w_score, 100, 100);
	if (w_score > b_score && int(frameCount / 10) % 2 == 1) { textSize(60); text("☺", 100, height - 100); textSize(30); }
	fill(255, 255, 0);
	text("ATN/SAD " + tb_score + " " + b_score, 100, 200);
	if (b_score > w_score && int(frameCount / 10) % 2 == 1) { textSize(60); text("☺", 100, height - 100); textSize(30); }
	fill(255, 0, 255);
	text("ATN/LVE " + tw_score + " " + love_s, 100, 300);
	fill(255, 0, 0);
	text("ATN/AGR " + tb_score + " " + angry_s, 100, 400);
	fill('#00ff84');
	text("round " + r + " " + nr + ".8", 100, 500);
	fill(0, 0);
	if (w_score > b_score && w_score > love_s && w_score > angry_s && int(frameCount / 10) % 2 == 1) { fill(0, 0, 255); }
	if (b_score > w_score && b_score > love_s && b_score > angry_s && int(frameCount / 10) % 2 == 1) { fill(255, 255, 0); }
	if (love_s > b_score && love_s > w_score && love_s > angry_s && int(frameCount / 10) % 2 == 1) { fill(255, 0, 255); }
	if (angry_s > b_score && angry_s > w_score && angry_s > love_s && int(frameCount / 10) % 2 == 1) { fill(255, 0, 0); }
	textSize(60);
	text("☺", 100, height - 100);
	textSize(30);
}