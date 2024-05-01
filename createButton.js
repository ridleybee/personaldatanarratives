let colorChangeButton
let playButton
let penButton
let erasorButton
let canvas
let drawBool = false
let modem
let lineCol
let randCol

function preload(){
	modem = loadSound('ModemSound (2).mp3')
}

function setup()
{
	canvas = createCanvas(windowWidth,windowHeight)
	canvas.position(0,0)
	canvas.style('z-index', '-1')

	background(140)

	colorChangeButton = createButton('Change Background Color')
	colorChangeButton.position(200, 200)
	colorChangeButton.mousePressed(backgroundColorChange)

	playButton = createButton('Play Modem')
	playButton.position(200, 300)
	playButton.mousePressed(playModem)

	}

function playModem(){
	if(!modem.isPlaying()){
		modem.play()
		playButton.html('Pause Modem')
	}else{
		modem.pause()
		playButton.html('Play Modem')
	}

}

function erasorLine(){
	strokeWeight(20)
	lineCol = randCol

}

function backgroundColorChange(){
	drawBool = true
	randCol = color(random(255), random(255), random(255))
	lineCol = 0
	strokeWeight(2)
	background(randCol)

	erasorButton = createButton('Erasor')
	erasorButton.position(400, 200)
	erasorButton.mousePressed(erasorLine)
}

function draw(){

	if (drawBool == true){
		stroke(lineCol)
		line(mouseX,mouseY, pmouseX,pmouseY)
	}

}