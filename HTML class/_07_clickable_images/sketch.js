var img, img2;

function setup() {

	noCanvas();

	div = createDiv('');
	div.id('mydiv');
	div.size(windowWidth, windowHeight);

  img = createImg("imgs/cat1.jpg");
  img.parent('#mydiv');
  img.position(190, 50);
  img.size(200, 200);
  img.id("img1");

  img2 = createImg("imgs/cat2.jpg");
  img2.parent('#mydiv');
  img2.position(800, 50);
  img2.size(200, 200);
  img2.id("img2");


  $('#img1').click(function() {
  	console.log("img1");
  });

  $('#img2').click(function() {
  	console.log("img2");
  });

  // $('#mydiv').click(function() {
  // 	$('#mydiv').empty();
  // });

 //  imageclicker = function(quelleimage) {
	//   $('#img' + quelleimage).click(function() {
	//   	console.log(quelleimage);
	//   });
	// };
}