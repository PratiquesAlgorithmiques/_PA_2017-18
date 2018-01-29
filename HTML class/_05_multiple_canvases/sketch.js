var sketch = function(p) {

  p.setup = function(){
    p.canvas = p.createCanvas(400, 400);
    p.fill(255);
  };

  p.draw = function(){
    p.background(0);
    p.ellipse(p.width/2 + p.random(-5, 5), p.height/2 + p.random(-5, 5), 200, 200);
  };
};

new p5(sketch, 'container'); 