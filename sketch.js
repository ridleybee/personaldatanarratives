let ringH = 20;
let ringW= 100;
let dayModeSwitch = false
let flashlightSwitch = false


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  background(29, 42, 125);
}

function draw() {
  
  noFill();
  strokeWeight(10);
  stroke(0);
  ellipse(380,180,ringW,ringH)
  fill(0);
  ellipse(380,180,60)

  if (dayModeSwitch==true){
    dayMode()
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

  //text
  textSize(30)
  fill(0)
  stroke(255)
  strokeWeight(2)
  text('key controls',550,110)
  text('d: day',550, 160)
  text('n: night',550, 210)
  text('f: flashlight',550,270)
  
  //landscape elements revealed
  strokeWeight(10);
  stroke(0)
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

  if (flashlightSwitch==true&&dayModeSwitch==false){
    flashlight()
  }



 //print(mouseX, mouseY);

}


function dayMode(){
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
}

function flashlight(){
  strokeWeight(4);
  stroke(29, 42, 125,100);
  fill(29, 42, 125, 100);
  ellipse(mouseX, mouseY, 300, 300)
}

function keyPressed(){
  if (key=='d'){
    dayModeSwitch = true
    flashlightSwitch = false
  }
  if (key=='n'){
    dayModeSwitch = false
    flashlightSwitch = false
  }
  if (key=='f'){
    dayModeSwitch = false
    flashlightSwitch = true
  }
}


