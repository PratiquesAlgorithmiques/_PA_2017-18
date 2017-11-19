var map;
var maneuver = [];

function initMap() {
	var pos = new google.maps.LatLng(48.858674, 2.340878);
	var opt = {
		center: pos,
		disableDefaultUI: true,
		zoom: 15,
	};
	var customMapTypeId = 'nc';
	var customMapType = new google.maps.StyledMapType([
	{stylers: [
	{hue: '#890000'},
	{visibility: 'simplified'},
	{gamma: 0.5},
	{weight: 0.5}]},
	{featureType: 'all',
		stylers: [{color: '#FFFFFF'}]},
	{elementType: 'labels',
		stylers: [{visibility: 'off'}]},
	{elementType: 'labels.icon',
		stylers: [{visibility: 'off'}]},
	{featureType: 'road',
		stylers: [{color: '#db3236'}]},
	{featureType: 'road.arterial',
		stylers: [{color: '#3cba54'}]},
	{featureType: 'road.highway',
		stylers: [{color: '#4885ed'}]},
	{featureType: 'road.local',
		stylers: [{color: '#f4c20d'}]}],
	{name: 'Custom Style'});

	map = new google.maps.Map(document.getElementById('map'), opt);

	map.mapTypes.set(customMapTypeId, customMapType);
	map.setMapTypeId(customMapTypeId);
}

function localize() {
	var geocoder = new google.maps.Geocoder();

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
		let pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		geocoder.geocode({'latLng': pos}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					document.getElementById("From").value = results[0].formatted_address;
					console.log(results);
				}});
		map.setCenter(pos);
		}, function() {
			locationError();
		});
	}
	else {
		locationError();
	}
}

function calcRoute() {
	var directionsService = new google.maps.DirectionsService();

	var start = document.getElementById("From").value;
	var end = document.getElementById("To").value;
	console.log(start + "/" + end);
	var request = {
		origin:start,
		destination:end,
		travelMode: 'WALKING',
	};
	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			console.log(response);
			var steps = response.routes[0].legs[0].steps;
			var j = steps.length;
			var i = 0;
			while (i < j)
			{
				if (steps[i].maneuver)
					maneuver.push(steps[i].maneuver);
				i++;
			}
			sessionStorage.setItem("steps", maneuver);
		} else {
			if (status == 'ZERO_RESULTS') {
				alert('No route could be found between the origin and destination.');
			} else if (status == 'UNKNOWN_ERROR') {
				alert('A directions request could not be processed due to a server error.');
			} else if (status == 'REQUEST_DENIED') {
				alert('This webpage is not allowed to use the directions service.');
			} else if (status == 'OVER_QUERY_LIMIT') {
				alert('The webpage has gone over the requests limit in too short a period of time.');
			} else if (status == 'NOT_FOUND') {
				alert('At least one of the origin, destination, or waypoints could not be geocoded.');
			} else if (status == 'INVALID_REQUEST') {
				alert('The DirectionsRequest provided was invalid.');					
			} else {
				alert("There was an unknown error in your request. Requeststatus: \n\n"+status);
			}
		}
	});
}

function locationError() {
	console.log("Location error.");
}
