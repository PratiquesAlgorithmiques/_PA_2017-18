function initMap() {
	var pos = {
		lat: 48.858674,
		lng: 2.340878,
	};
	var opt = {
		center: pos,
		disableDefaultUI: true,
		zoom: 13,
	};
	var customMapTypeId = 'xyz';
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

	var xyz_map = new google.maps.Map(document.getElementById('xyz_map'), opt);

	xyz_map.mapTypes.set(customMapTypeId, customMapType);
	xyz_map.setMapTypeId(customMapTypeId);
}
