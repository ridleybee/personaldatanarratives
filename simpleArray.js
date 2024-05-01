
//array with square numbers
let squareNums = [25, 36, 49, 64, 81, 100]

//image variable
let furby

function preload(){

	furby = loadImage("furby.png")
}

function setup(){

createCanvas(windowWidth, windowHeight)
background(255)

//cycel through the squareNums array with a for loop
for(let i = 0; i < squareNums.length; i++){

	//every loop cycle, create a random x and y position
	let xPos = random(100, windowWidth-100 )
	let yPos = random(100, windowHeight -100)
	fill(255, 60, 100) 

	//every loop cycel, place a furby at the random x, y positon 
	//and also use current array postion value to scale image
	image(furby, xPos, yPos, squareNums[i], squareNums[i])

	//print the current array postition value next to furby image
	text(squareNums[i], xPos, yPos+5)
}

}
function draw(){

	
}

