var panorama;
var mapOptions;
var canvas;
lcounter = 0;

function setup() {

  /* canvas */
  canvas = createCanvas(windowWidth/2, windowHeight);
  canvas.parent('canvas');

  fill(255, 0, 0);
  ellipse(400, 400, 400, 400);

  /* street view */
  mapOptions = {
    position: {lat: 37.869260, lng: -122.254811},
    pov: {heading: 165, pitch: 0},
    zoom: 1
  };

  panorama = new google.maps.StreetViewPanorama(document.getElementById('map'), mapOptions);
}

function mousePressed() {
  lcounter++;

  panorama.setPov({
      heading: lcounter,
      pitch: lcounter
    });
}