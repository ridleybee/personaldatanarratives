//simulator
let startBool = true
let colorSelectorBool = false
let quad1Bool = false
let quad2Bool = false
let quad3Bool = false
let quad4Bool = false
let endBool = false

let canvasSize = 1000

let string = `
hello! welcome to the simulation.
       are you a robot?`;
let currentCharacter = 0;
let pageMargin = 50;

function setup() {
	createCanvas(canvasSize,canvasSize)

}

function draw() {

	if (startBool==true){
		startGame()
	}

	if (endBool==false){
		endGame()
	}

}


function startGame() {

	background(122, 92, 87)

	let currentString = string.substring(0, currentCharacter)
	push()
	fill(255)
	textSize(30)
	textAlign(LEFT, TOP)
	text(currentString, pageMargin, pageMargin, width - pageMargin*2, height - pageMargin)
	pop()

	currentCharacter += random(0, 0.5)

	let buttonYes = createButton('yes')
	let buttonNo = createButton('no')

	print(currentString)

	if (currentString == `
hello! welcome to the simulation.
       are you a robot?`)
	{
		buttonYes.position(pageMargin, 175)
		buttonNo.position(pageMargin*2, 175)
	}



}

function colorSelector(){

}

function quad1(){

}

function quad2(){

}

function quad3(){

}

function quad4(){

}
function endGame() {

}