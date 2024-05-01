
let squareBrushBool = false
let ellipseBrushBool = false

function setup(){

	createCanvas(windowWidth,windowHeight)
	background(165, 185, 150)
	rectMode(CENTER)

}

function draw(){

	noStroke()

	if (squareBrushBool == true){
		squareBrush()
	}

	if(ellipseBrushBool == true){
		ellipseBrush()
	}


}


function ellipseBrush(){

	fill(140,35,240)
	ellipse(mouseX,mouseY, 50,50)
}


function squareBrush(){

	fill(235,140,40)
	rect(mouseX,mouseY,20,20)

}


function keyPressed(){
	if(key=='s'){
		squareBrushBool = true
		ellipseBrushBool = false
	}

	if(key=='e'){
		squareBrushBool = false
		ellipseBrushBool = true
	}

}
