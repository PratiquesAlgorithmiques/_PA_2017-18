<!DOCTYPE html>
<html>
	<head>
	<title>Lost Map</title>
	<meta name="viewport" content="initial-scale=1.0">
	<meta charset="utf-8">
	<script src="map.js"></script>
	<script 
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDOP1QxyKr6xPD-7VigSthCwxZlIysoGRQ&callback=initMap"
	async defer>
	</script>
	<link rel="stylesheet" type="text/css" href="style.css">
	</head>
	<body onload="initMap()">
	<div id="map"></div>
	<form action="route.php" method="get" id="form">
		<input type="text" id="From" name="From" value="">
		<input type="text" id="To" name="To" value="">
		<!--<input type="button" value="Localize" onclick="setFrom()">-->
		<input type="submit" value="Go">
	</form>
	<script>
		function setFrom() {
			var pos = sessionStorage.getItem("pos");
			console.log(pos);
			document.getElementById("From").value = sessionStorage.getItem("pos");
		}
	</script>
	</body>
</html>
