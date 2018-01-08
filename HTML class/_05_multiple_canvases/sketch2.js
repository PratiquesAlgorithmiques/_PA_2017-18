var sketch2 = function(p) {

  p.setup = function(){
    p.canvas = p.createCanvas(400, 400);
    p.fill(255);
  };

  p.draw = function(){
    p.background(255, 120, 120);
    p.rect(p.width/2 + p.random(-5, 5), p.height/2 + p.random(-5, 5),100,100);
  };
};