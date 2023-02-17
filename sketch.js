/**
 * Sinusodial Sketch
 */

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function draw() {
  background(255);



  var points = [];
  translate(width/2, height/2);

  beginShape();
  for(var i = 0; i < 360; i++) {
 
    stroke(200,100,50);
    noFill();
    var r1Min = map(cos(frameCount/30), -1, 1, 400, -100);
    var r1Max = map(sin(frameCount/25), -1, 1, 200, -50);

    var r2Min = map(sin(frameCount/15), -1, 1, 200, 100);
    var r2Max = map(cos(frameCount/15), -1, 1, 100, 200);

    var r1 = map(sin(i*3), -1, 1, r1Min, r1Max);
    var r2 = map(sin(i*6), -1, 1, r2Min, r2Max);
    var r = r1 + r2;
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x,y);
    points.push([x,y]);
  }

  // for (var i = 0; i < points.length-1; i++){
    // draw line between points[i] and points[i+1]
// 
  // }
  endShape(CLOSE);
   
}