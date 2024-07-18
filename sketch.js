
let arcX=0
let dia=200
let arcY= 50
function setup() {
  createCanvas(600, 600);
  describe('A yellow circle on a black background. The circle opens and closes its mouth.');
}
function draw() {
  background(3, 198, 252);
  textSize(20)
  fill(191, 234, 255)
  stroke(0)
  strokeWeight(4)
  text('HI',30,60)
  describe('The text"HI"written in blue with a black outline')
  // style arc
  noStroke();
  fill(252, 159, 235)
  //Update start and stop angle
  let biteSize = PI/10;
  let startAngle = biteSize * sin(frameCount+0.1)+ biteSize;
  let endAngle = TWO_PI - startAngle;
  //start the arc
  arc(arcX,50,80,80,startAngle,endAngle,PIE,dia);
  arcX= arcX+5
  dia=dia+2
}

function mousePressed(){ 
  arcX=0
//start/stop the animation loop
if (isLooping()) {
  noLoop();
} else {
  loop();
}
}