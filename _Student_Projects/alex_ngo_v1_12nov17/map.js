var get = location.search.substr(1).split("&").reduce((o,i)=>(u=decodeURIComponent,[k,v]=i.split("="),o[u(k)]=v&&u(v),o),{});

var maneuver = [];

function initMap() {
	var directionsService = new google.maps.DirectionsService();
	var pos = {
		lat: 48.858674,
		lng: 2.340878,
	};
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
		stylers: [{color: '#000000'}]},
	{featureType: 'road.arterial',
		stylers: [{color: '#000000'}]},
	{featureType: 'road.highway',
		stylers: [{color: '#000000'}]},
	{featureType: 'road.local',
		stylers: [{color: '#000000'}]}],
	{name: 'Custom Style'});

	var map = new google.maps.Map(document.getElementById('map'), opt);

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			map.setCenter(pos);
		}, function() {
			locationError();
		});
	}
	else {
		locationError();
	}
	map.mapTypes.set(customMapTypeId, customMapType);
	map.setMapTypeId(customMapTypeId);
	calcRoute(directionsService);
}

function locationError() {
	console.log("Location error.");
}

function calcRoute(directionsService) {
	var start = get.From;
	var end = get.To;
	var request = {
		origin:start,
		destination:end,
		travelMode: 'WALKING',
	};
	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
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
