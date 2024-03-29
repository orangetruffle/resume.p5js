/**
 * Sinusodial Sketch.
 * Designed and Developed by Elle Bassett for Generative Drawing.
 * ***************************************************************
 */
let overlay;

function preload() {
  overlay = loadImage("./resumeOverlay.png");
}
function setup() {
  createCanvas(2480/2, 3508/2);
  noFill();
}

function draw() {
  background("#F9E9EC");
push();
  beginShape()
  translate(width/1.5, height/1.4);
  for(var i = 0; i <= 359; i++) {
    /**
     * rMin/Max provides the animation for the shape. 
     * Make sure collective sum of Max does not exceed canvas Width.  
     * Collective sum of Min
     */

    var r1Min = map(cos(frameCount* 0.005), -1, 1, -10, 200 * 1.2);
    var r1Max = map(sin(frameCount* 0.0055), -1, 1, 97 , -190* 1.4);

    var r2Min = map(sin(frameCount*0.0045), -1, 1, -80,250  * 1.4);
    var r2Max = map(cos(frameCount*0.0045), -1, 1, 100, -10 * 1.4);

    var r1 = map(sin(i*3), -1, 1, r1Min, r1Max);
    var r2 = map(sin(i*6), -1, 1, r2Min, r2Max);
    var r = r1 + r2;
    var x = r * cos(i);
    var y = r * sin(i);
      
    stroke("#E68C8C");
    vertex(x,y);  
    
  }
  endShape();
pop();

  overlay.resize(width,height);
  image(overlay,0,0);
}