
//x and y position arrays  
let x = []
let y = []


//image variable
let furby



//load image
function preload(){

	furby = loadImage("furby.png")
}


function setup(){
	createCanvas(windowWidth, windowHeight)
	imageMode(CENTER)

}


function draw(){
	background(0)

	//cycle through the arrays with a for loop,
	//if there's an x,y position, place a furby there.
	//also, if the mouse is close to the furby, delete it 
	//from the array using splice()
	for(let i= 0; i < x.length; i++){
		image(furby, x[i], y[i], 60, 60)
		if(dist(mouseX, mouseY, x[i], y[i]) <30){
			x.splice(i, 1)
			y.splice(i, 1)
		}
	}

print(x.length)
}


//you can add a furby at the cursor location with mouse pressed here
//if you do this, comment the mouse dist() function above
function mousePressed(){
	// x.push(mouseX)
	// y.push(mouseY)
}

function keyPressed(){

	if(key == 'x'){
		//add to the x,y arrays with a keypress
		x.push(random(windowWidth))
		y.push(random(windowHeight))
	}

	if(key == 'c'){
		//delete every position in arrays with keypress
		x.splice(0, x.length)
		y.splice(0, y.length)
	}

}












