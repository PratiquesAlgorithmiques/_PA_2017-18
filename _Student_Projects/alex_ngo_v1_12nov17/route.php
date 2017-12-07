<!DOCTYPE html>
<html>
	<head>
	<title>Lost Map</title>
	<meta name="viewport" content="initial-scale=1.0">
	<meta charset="utf-8">
	<script src="http://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js"></script>
	<script src="map.js"></script>
	<script 
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDOP1QxyKr6xPD-7VigSthCwxZlIysoGRQ&callback=initMap"
	async defer>
	</script>
	<link rel="stylesheet" type="text/css" href="style.css">
	</head>
	<body>
	<div id="map" style="display:none"></div>
	<div id="log" style="display:none"><?php echo $_GET["From"]; ?>
	<?php echo $_GET["To"]; ?></div>
	<script src="sketch.js">
	</script>
	</body>
</html>
