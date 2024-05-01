
let furby

let furbyX
let furbyY

let xSpeed = 3
let ySpeed = 4

let score = 0

let mouseDist 

let startBool = true
let winBool = false

function preload() {
	furby = loadImage('furby.png')
}

function setup() {
	createCanvas(windowWidth,windowHeight)
	imageMode(CENTER)

	furbyX = windowWidth/2
	furbyY = windowHeight/2

}


function draw() {
	if (startBool == true){
		startGame()
	}

	if (winBool == true){
		winGame()
	}

}


function startGame() {
	background(0)
	fill(255)
	textSize(30)
	text('tag the furby! your score is ' + score + ' points :)', 100, 100)
	
	image(furby, furbyX, furbyY, 50,50)

	mouseDist = dist(furbyX, furbyY, mouseX, mouseY)
	if (mouseDist < 25){
		score ++
		furbyX = random(26, windowWidth - 26)
		furbyY = random(26, windowHeight-26)
		xSpeed = xSpeed * 1.1
		ySpeed = ySpeed * 1.1
	}

	furbyX += xSpeed
	furbyY += ySpeed


// change direction of furby along border
	if (furbyX >= windowWidth - 25 || furbyX <= 25){
		xSpeed = xSpeed * -1
	}

	if (furbyY > windowHeight - 25 || furbyY <= 25){
		ySpeed = ySpeed * -1
	}

	if (score == 5){
		winBool = true
		startBool = false
	}

}

function winGame() {
	background(0)
	fill(255)
	textSize(30)
	text('you win!!!', 100, 100)

	image(furby, windowWidth/2, windowHeight/2, 500,500)
	

}