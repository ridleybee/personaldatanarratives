//simulator
let startBool = true
let colorSelectorBool = false
let roboBool = false
let quad1Bool = false
let quad2Bool = false
let quad3Bool = false
let quad4Bool = false
let endBool = false
let tryAgainBool = false
let death = false
let deathVar 

//let canvasSize = 1000
let timer = 3
let anyChoice = 0

// 0 -20
let noun = ['Jeff', 'idea', 'Jane', 'ex-girlfriend', 'freak', 'Chicago', 'car', 'brain', 'man', 'outdoors', 'store', 'poem', 'shot', 'Germany','university', 'reception', 'night', 'tennis', 'tea', 'lie', 'teeth']
//0-18
let adjective = ['green', 'blue', 'yellow', 'red', 'dead', 'old', 'exciting', 'cut', 'emotional', 'icky', 'tricky', 'chilly', 'pathetic', 'silent', 'disgusted', 'gay', 'low', 'sweet', 'pointless']
//0-22
let verb = ['touch', 'dig', 'suffer', 'break', 'trip', 'fall', 'curl up', 'long', 'ask', 'hate', 'love', 'boil', 'want', 'get', 'torture', 'make', 'know', 'come out', 'sleep', 'sell', 'suck', 'bleed', 'lie']
 

let string
let stringAgain 
let stringIntro 
let stringSetting 
let stringAction 
let stringInteraction
let stringChar
let stringDeath 
let stringEnd

let currentCharacter = 0;
let pageMargin = 50;

let buttonYes
let buttonNo

let robotBox
let score = 0

let boxX
let boxY
let xSpeed = 3
let ySpeed = 4

function preload(){
	robotBox = loadImage('notarobot.jpg')
}

function setup() {

	createCanvas(windowWidth,windowHeight)
	buttonYes = createButton('yes')
	buttonNo = createButton('no')
	buttonYes.hide()
	buttonNo.hide()

	boxX = 120
	boxY = 232

	string = `
hello! welcome to the simulator.
       are you a robot?`; 

	stringAgain = `
try again...
are you a robot?`;

	stringIntro = `
you have entered the simulation.
your fate is undecided.
your future fast approaching.

BACKSPACE to discover more information.
if you die, you will be stuck.
pressing E will end your journey.`; 

	stringSetting = `
you are transported to a new place.
the sky is ` + random(adjective) + `.
the vegetation is ` + random(adjective) + `.
there are ` + random(noun) + `s everywhere.
you feel `+ random(adjective) + `.`;

	stringAction = `
you `+ random(verb) + `.`;

	stringInteraction = `
you `+ random(verb) + ` with ` + random(noun) +`.`;

	stringChar = `
a new identity has been ordered for you. remember it well.
your new name is ` + random(noun) + ` and you are from a place called ` + random(noun) + `. 
you are ` + int(random(0, 120)) + ` years old.`;

	stringDeath = `
you die. ` + random(noun) + ` found you and ` + random(verb) +`s 
you with ` + random(noun) + `. 
your simulation is over.
press E to end.`;

	stringEnd = `
thank you for playing the simulator.`
	
}

function draw() {

	if (startBool==true){
		startGame()
	}

	if (endBool==true){
		endGame()
	}

	if (colorSelectorBool==true){
		colorSelector()
	}

	if (roboBool==true){
		robotTest()
	}

	if (tryAgainBool==true){
		tryAgain()
	}

	if (quad1Bool==true){
		quad1()
	}

	if (quad2Bool==true){
		quad2()
	}

	if (quad3Bool==true){
		quad3()
	}

	if (quad4Bool==true){
		quad4()
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

	

	//print(currentString)

	if (currentString == `
hello! welcome to the simulator.
       are you a robot?`)
	{	
		buttonYes.show()
		buttonNo.show()
		buttonYes.position(pageMargin, 175)
		buttonNo.position(pageMargin*2, 175)

		buttonNo.mousePressed(() => {
			colorSelectorBool = true
			startBool = false
			
		})

		buttonYes.mousePressed(() => {
			// bool for robot tester page = true
			roboBool = true
			startBool = false
			
		})
	}


}

function robotTest() {


	buttonNo.hide()
	buttonYes.hide()

	background(100)

	image(robotBox, 100, 200, 400,100)
	strokeWeight(2)

	stroke(250)
	fill(250)
	rect(120,232,35,35)
	stroke(150)
	fill(240)
	rect(boxX,boxY,35,35)

	mouseDist = dist(boxX, boxY, mouseX, mouseY)
	if (mouseDist < 18){
		score++
		boxX = random(18, windowWidth - 18)
		boxY = random(18, windowHeight- 18)
		xSpeed = xSpeed * 1.1
		ySpeed = ySpeed * 1.1

	}

	boxX += xSpeed
	boxY += ySpeed


	if (boxX >= windowWidth - 18 || boxX <= 18){
		xSpeed = xSpeed * -1
	}

	if (boxY > windowHeight - 18 || boxY <= 18){
		ySpeed = ySpeed * -1
	}

	if (score>5){
		tryAgainBool = true
		roboBool = false
		startBool = false
	}


}

function tryAgain(){
	buttonNo.show()
	buttonYes.show()

	background(122, 92, 87)
	noStroke()

	let currentString = stringAgain.substring(0, currentCharacter)
	push()
	fill(255)
	textSize(30)
	textAlign(LEFT, TOP)
	text(currentString, pageMargin, pageMargin, width - pageMargin*2, height - pageMargin)
	pop()

	currentCharacter += random(0, 0.5)

	

	//print(currentString)

	if (currentString == `
try again...
are you a robot?`)
	{
		buttonYes.position(pageMargin, 175)
		buttonNo.position(pageMargin*2, 175)

		buttonNo.mousePressed(() => {
			colorSelectorBool = true
			tryAgainBool = false
		
		})

		buttonYes.mousePressed(() => {
			// bool for robot tester page = true
			score = 0
			roboBool = true
			tryAgainBool = false
			
		})
	}

}

function colorSelector(){
	buttonNo.hide()
	buttonYes.hide()

	background(0)
	let green = color(69, 158, 21)
	let blue = color(26, 61, 173)
	let yellow = color(201, 201, 32)
	let red = color(199, 54, 44)

	stroke(0)
	strokeWeight(5)
	
	if(frameCount % 60 == 0 && timer > 0){
		timer--
	}

	if (mouseX < windowWidth/3 && mouseY < windowHeight/3 ){
		green = color(96, 222, 29)
	}

	if (mouseX < windowWidth/3 && mouseY > windowHeight/3){
		blue = color(36, 88, 255)		
	}

	if (mouseX > windowWidth/3 && mouseY < windowHeight/3){
		yellow = color(252, 252, 58)
	}

	if (mouseX > windowWidth/3 && mouseY > windowHeight/3){
		red = color(245, 57, 44)
		
	}

	fill(green)
	rect(5,5,windowWidth/3,windowHeight/3)
	fill(blue)
	rect(5,windowHeight/3,windowWidth/3,windowHeight/3)
	fill(yellow)
	rect(windowWidth/3,5,windowWidth/3,windowHeight/3)
	fill(red)
	rect(windowWidth/3,windowHeight/3,windowWidth/3,windowHeight/3) 

	stringSetting = `
you are transported to a new place.
the sky is ` + random(adjective) + `.
the vegetation is ` + random(adjective) + `.
there are ` + random(noun) + `s everywhere.
you feel `+ random(adjective) + `.`;
	stringAction = `
you `+ random(verb) + `.`;
	stringInteraction = `
you `+ random(verb) + ` with ` + random(noun) +`.`;
	stringChar = `
a new identity has been ordered for you. remember it well.
your new name is ` + random(noun) + ` and you are from a place called ` + random(noun) + `. 
you are ` + int(random(0, 120)) + ` years old.`;


}

function quad1(){


	background(69, 158, 21)
	noStroke()
	//setting
	if (anyChoice==1){
		let currentString = stringIntro.substring(0, currentCharacter)
		push()
		fill(255)
		textSize(30)
		textAlign(LEFT, TOP)
		text(currentString, pageMargin, pageMargin, width - pageMargin*2, height - pageMargin)
		pop()
	
	}else if (deathVar == 4){
		let currentString = stringDeath.substring(0, currentCharacter)
		push()
		fill(255)
		textSize(30)
		textAlign(LEFT, TOP)
		text(currentString, pageMargin, pageMargin, width - pageMargin*2, height - pageMargin)
		pop()
		death = true
	}else {
		let currentString = stringSetting.substring(0, currentCharacter)
		push()
		fill(255)
		textSize(30)
		textAlign(LEFT, TOP)
		text(currentString, pageMargin, pageMargin, width - pageMargin*2, height - pageMargin)
		pop()
	}
	

	currentCharacter += random(0, 0.5)

}

function quad2(){

	background(26, 61, 173)
	noStroke()
	//action
		if (anyChoice==1){
		let currentString = stringIntro.substring(0, currentCharacter)
		push()
		fill(255)
		textSize(30)
		textAlign(LEFT, TOP)
		text(currentString, pageMargin, pageMargin, width - pageMargin*2, height - pageMargin)
		pop()
	}else {
		let currentString = stringAction.substring(0, currentCharacter)
		push()
		fill(255)
		textSize(30)
		textAlign(LEFT, TOP)
		text(currentString, pageMargin, pageMargin, width - pageMargin*2, height - pageMargin)
		pop()

	}


	currentCharacter += random(0, 0.5)



}

function quad3(){

	background(201, 201, 32)
	noStroke()
	//interaction
	if (anyChoice==1){
		let currentString = stringIntro.substring(0, currentCharacter)
		push()
		fill(255)
		textSize(30)
		textAlign(LEFT, TOP)
		text(currentString, pageMargin, pageMargin, width - pageMargin*2, height - pageMargin)
		pop()		
	}else {
		let currentString = stringInteraction.substring(0, currentCharacter)
		push()
		fill(255)
		textSize(30)
		textAlign(LEFT, TOP)
		text(currentString, pageMargin, pageMargin, width - pageMargin*2, height - pageMargin)
		pop()
	}

	currentCharacter += random(0, 0.5)

	
}

function quad4(){


	background(199, 54, 44)
	noStroke()
	//character
	if (anyChoice==1){
		let currentString = stringIntro.substring(0, currentCharacter)
		push()
		fill(255)
		textSize(30)
		textAlign(LEFT, TOP)
		text(currentString, pageMargin, pageMargin, width - pageMargin*2, height - pageMargin)
		pop()	
	}else if (deathVar == 4){
		let currentString = stringDeath.substring(0, currentCharacter)
		push()
		fill(255)
		textSize(30)
		textAlign(LEFT, TOP)
		text(currentString, pageMargin, pageMargin, width - pageMargin*2, height - pageMargin)
		pop()
		death = true
	}else {
		let currentString = stringChar.substring(0, currentCharacter)
		push()
		fill(255)
		textSize(30)
		textAlign(LEFT, TOP)
		text(currentString, pageMargin, pageMargin, width - pageMargin*2, height - pageMargin)
		pop()
	}

	

	currentCharacter += random(0, 0.5)

}
function endGame() {

	background(122, 92, 87)
	noStroke()

	let currentString = stringEnd.substring(0, currentCharacter)
	push()
	fill(255)
	textSize(30)
	textAlign(LEFT, TOP)
	text(currentString, pageMargin, pageMargin, width - pageMargin*2, height - pageMargin)
	pop()

	currentCharacter += random(0, 0.5)


}

function keyPressed() {
	if(keyCode === BACKSPACE && startBool == false && death == false && endBool == false){
		colorSelectorBool=true
		quad1Bool=false
		quad2Bool=false
		quad3Bool=false
		quad4Bool=false
	}

	if(key == 'e'){
		endBool = true
		quad1Bool=false
		quad2Bool=false
		quad3Bool=false
		quad4Bool=false
		colorSelectorBool=false
		startBool=false
		roboBool=false
	}
}

function mouseClicked() {


	if (colorSelectorBool == true && timer == 0) {
		if (mouseX < windowWidth/3 && mouseY < windowHeight/3 ){
			quad1Bool = true
			colorSelectorBool = false
			anyChoice++
			deathVar = int(random(5))
			
		}

		if (mouseX < windowWidth/3 && mouseY > windowHeight/3){
			quad2Bool = true
			colorSelectorBool = false
			anyChoice++
			
		}

		if (mouseX > windowWidth/3 && mouseY < windowHeight/3){
			quad3Bool = true
			colorSelectorBool = false
			anyChoice++
			
		}

		if (mouseX > windowWidth/3 && mouseY > windowHeight/3){
			quad4Bool = true
			colorSelectorBool = false
			anyChoice++	
			deathVar = int(random(5))			
	}

}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}
}