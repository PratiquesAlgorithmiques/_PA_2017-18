var mymap;
var mapOptions, markerOptions;
var latlong;
var marker;
var counter = 17;

function setup() {

	latlong = {
		lat: 49.036709, 
		lng: 2.0755313
	};

	mapOptions = {
    center: latlong,
    zoom: counter
    // mapTypeId: 'satellite'
  };

  mymap = new google.maps.Map(document.getElementById('map'), mapOptions);

  markerOptions = {
    position: latlong,
    map: mymap,
    title: 'Hello World!',
    animation: google.maps.Animation.DROP,
    draggable: true
  };

  marker = new google.maps.Marker(markerOptions);

  var bikeLayer = new google.maps.BicyclingLayer();
  bikeLayer.setMap(mymap);
}

function mousePressed() {
	counter = counter - 1;
	print(latlong.lat);

	mymap.setZoom(counter);
	// mymap.setTilt({tilt:45});

}