let counter = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  
  var timer = select('#timer');
  timer.html('0'); //insert text
  
  function timeIt(){
    counter ++;
    timer.html(counter);
  }
  
  setInterval(timeIt, 1000);//native function 1000ms =1 s
  //request animationframe is also another func
}


