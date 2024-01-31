let ringH = 20;
let ringW= 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  background(29, 42, 125);
}

function draw() {
  
  if(mouseIsPressed){
    fill(255, 212, 92);
    rect(300,300,400,400);
    noFill();
    strokeWeight(10);
    stroke(0);
    ellipse(420,150,130);
    strokeWeight(5);
    triangle(320,150,350,140,350,160);
    triangle(370,190,400,210,365,225);
    triangle(450,210,469,195,475,225);
  } else{
    noFill();
    strokeWeight(10);
    stroke(0);
    ellipse(380,180,ringW,ringH)
    fill(0);
    ellipse(380,180,60)
  }

  strokeWeight(2);  
 
  //random point generation in background (stars)
  stroke(random(255), random(255), random(255));
  point(random(windowWidth), random(windowHeight));
  
  strokeWeight(40);
  stroke(0);
  fill(0,0,0,100);
  
  // black canvas
  rect(300,300,400,400);
  
  //landscape elements revealed
  strokeWeight(10);
  noFill();
  //center house
  rect(250,400,150,100);
  triangle(170,345,330,345,250,300);
  //right house
  rect(370,380,190,100);
  triangle(270,325,470,325,370,240);
  //left house
  rect(170,320,80,150);
  triangle(110,250,170,200,220,250);
  
  //flashlight ellipse
  strokeWeight(4);
  stroke(29, 42, 125,100);
  fill(29, 42, 125, 100);
  if (keyIsPressed){
    ellipse(mouseX, mouseY, 300, 300);                           
  }

  
 print(mouseX, mouseY);

}