let table;
let imgGoogle;
let imgError;
let googleWidth = 320
let googleHeight = 108.25
let tallPop = 400
let shortPopWidth 
let shortPopHeight

let searchData = []

let startBool = true
let searchedBool = false
//let popBoolBRC = true
//let popBoolCen = true
let popBool1 = true
let popBool2 = false
let popBool3 = false
let popBool4 = false
let popBool5 = false
let popBool6 = false
let popBool7 = false
let popBool8 = false
let popBool9 = false
let disableType = false
let miniGameBool = false

let stringIntro
let stringData
let stringSus
let stringTask


let objsearch
let objresult 
let objdate 
let objtime 
let objtitle 
let objcrime

let theTime
let theCrime

let currentCharacter = 0;
let pageMargin = 25;
let trigger 
let timer = 7

let buttonSubmit
let buttons 

let randoCrime = ['international espionage', 'drug trafficking', 'an illegal cult', 'computer hacking']

function preload() {
	//csv header seperated
	//headers: date, time, search, top result, source title, source type, personalized, declared ad, featured snippet
	table = loadTable('searchData.csv', 'csv', 'header');
}


function setup(){
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.position(0,0)
	canvas.style("z-index", "-1")
	background(240)

	buttonSubmit = createButton("SUBMIT")
	buttonSubmit.hide()

	imgGoogle = loadImage("finalFiles/googlelogo.png")
	imgError = loadImage("finalFiles/erroroccurred.png")

	//let ylnmnBlue = color(76, 96, 133)
	//let cornsilk = color(241, 236, 206)
	//let celestialBlue = color(57, 160, 237)

	let randoTime = ' ' + int(random(1,13)) + ':' + int(random(0,6)) + int(random(0,10)) + ' ' + random(['P','A']) + 'M'
	trigger = 0

	for (let i = 0; i < table.getRowCount(); i++){
	    date = String(table.getString(i, 'Date'));
	    time = String(table.getString(i, 'Time'));
	    search = String(table.getString(i, 'Search'));
	    result = String(table.getString(i, 'Top Result'));
	    title = String(table.getString(i, 'Source Title'));
	    type = String(table.getString(i, 'Source Type'));
	    crime = String(table.getString(i, 'Crime Type'));

	    searchData.push(new SearchData(date, time, search, result, title, type, crime));
  }


	stringIntro = `
Hello, Agent. This is Your Boss. You have agreed to assist The Agency and this is your first assignment.

As you have been briefed, your goal is to scan the SUSPECT's recent Google searches for suspicious activity. 

Please click SUBMIT to proceed.`

	stringData = `
Please choose a date to analyze a data set.

Information! The "crime" is related to ` + random(randoCrime) + 

`.`

	stringSus = `
On `+ this.date + `, the SUSPECT had one (1) search tagged suspicious: 

	` + this.search + `

Information! The "crime" occured at ` + randoTime + `. The search must be at the same time of the day as the crime to secure prosecution (AM or PM).

Press ENTER to search the query and further analyze the data.`

	stringTask = `
Agent, this data is encrypted. Complete the task to download and decipher the data.

Please click SUBMIT to proceed.`

	stringChoice = `
You were successful in downloading and deciphering the data.

The search occured at ` + this.time + `.

You may either send this data to the angency if you think it relates to our 
SUSPECT's "crime" or continue your search.

Press ENTER to send or BACKSPACE to check more data.

`

	stringNextData = `
Select a new data point to analyze.

Remember! The "crime" is related to ` + random(randoCrime) + `.`

	stringNextSus = `
On ` + this.date + `the SUSPECT had one (1) search tagged suspicious:
	` + this.search + `
Remember! The "crime" occured at ` + randoTime +`.

Type the query and press search to futher analyze the data.`

	stringSuccess = `
You did it! The SUSPECT, identified as:

Name: Ridley Baker
Age: 21
Sex: F
Occupation: Student
Criminal Record: None

has been locked away for `+ theCrime +`, which she did not commit based soley off of her Google searches. Spectacular work!

`

	stringFail = `
The Google Search you provided either did not happen before the crime or was unrelated to the crime.

The Agency is not happy.

You're fired.`

}



function draw() {

	if (startBool==true){
		startBrowser()
	}

	if (searchedBool==true){
		searchScreen()
	}

}



function startBrowser() {


	stroke(230)
	strokeWeight(2)
	fill(255)
	image(imgGoogle, windowWidth/2-150, windowHeight/3-100, googleWidth, googleHeight)
	rect(windowWidth/2-250, windowHeight/2-100, googleWidth+200, windowHeight/22,20)
	ellipse(windowWidth-40, 50, 50,50)

	//bottom right corner popup
	//if (popBoolBRC==true){



		//introduction pop up
		if (popBool1==true){

		noStroke()
		//bright blue border
		fill(57, 160, 237)
		rect(windowWidth-430,windowHeight-430,tallPop+10 ,tallPop+10)
		fill(76, 96, 133)
		//navy box and border
		rect(windowWidth-425,windowHeight-425,tallPop,tallPop)
		rect(windowWidth-430,windowHeight-75, tallPop+10, 55)
		fill(57, 160, 237)
		//bright blue box
		rect(windowWidth-425,windowHeight-75, tallPop, 50)

		

		let currentString = stringIntro.substring(0, currentCharacter)
		push()
			fill(241, 236, 206)
			noStroke()
			textSize(20)
			textAlign(LEFT, TOP)
			text(currentString, windowWidth-420, windowHeight-425, tallPop - 5, tallPop - pageMargin)
		pop()

		//fill(76, 96, 133)
		fill(241, 236, 206)
		noStroke()
		textSize(15)
		textAlign(CENTER)
		text(`INCOMING MESSAGE
FROM: Your Boss`, windowWidth-225, windowHeight-55)

		currentCharacter += random(0, 0.5)

		if(currentString == `
Hello, Agent. This is Your Boss. You have agreed to assist The Agency and this is your first assignment.

As you have been briefed, your goal is to scan the SUSPECT's recent Google searches for suspicious activity. 

Please click SUBMIT to proceed.`)
		{
			buttonSubmit.show()
			buttonSubmit.position(windowWidth-250, windowHeight-100)

			buttonSubmit.mousePressed(() => {
				popBool1 = false
				popBool2 = true
				popBool3 = true
				currentCharacter = 0
				buttonSubmit.hide()
			
		})
		}


		
	}

	//}


	//center pop up

	//if(popBoolCen==true){

		//date selection pop up

		if (popBool2==true){

			background(240)
			stroke(230)
			strokeWeight(2)
			fill(255)
			image(imgGoogle, windowWidth/2-150, windowHeight/3-100, googleWidth, googleHeight)
			rect(windowWidth/2-250, windowHeight/2-100, googleWidth+200, windowHeight/22,20)
			ellipse(windowWidth-40, 50, 50,50)

			noStroke()
			fill(57, 160, 237)
			//bright blue border
			rect(windowWidth/2-400,windowHeight/2-200, windowWidth/2 ,windowHeight/2)
			fill(76, 96, 133)
			//navy box and border
			rect(windowWidth/2-410,windowHeight/2-210, windowWidth/2-10 ,windowHeight/2-10)
			rect(windowWidth/2-400,windowHeight/2-200, windowWidth/2 ,windowHeight/15-10)
			fill(57, 160, 237)
			//bright blue box
			rect(windowWidth/2-410,windowHeight/2-210, windowWidth/2-10 ,windowHeight/15)

			textSize(30)
			fill(241, 236, 206)
			textAlign(LEFT)
			text('Collected Data:', windowWidth/2-400,windowHeight/2-175)

			if(frameCount % 60 == 0 && timer > 0){
				timer--
			}

			if(timer==0){

			for (let i = 0; i < searchData.length; i++){
				searchData[i].show()
			}
			}
		}
	//}

	//date and crime pop up - #2 brc

	if (popBool3 ==true){

		noStroke()
		//bright blue border
		fill(57, 160, 237)
		rect(windowWidth-430,windowHeight-430,tallPop+10 ,tallPop+10)
		fill(76, 96, 133)
		//navy box and border
		rect(windowWidth-425,windowHeight-425,tallPop,tallPop)
		rect(windowWidth-430,windowHeight-75, tallPop+10, 55)
		fill(57, 160, 237)
		//bright blue box
		rect(windowWidth-425,windowHeight-75, tallPop, 50)

		if (theCrime == null){
		theCrime = random(randoCrime)
}

			stringData = `
Please choose a date to analyze a data set.

Information! The "crime" is related to ` + theCrime + 

`.`




		let currentString = stringData.substring(0, currentCharacter)
		push()
			fill(241, 236, 206)
			noStroke()
			textSize(20)
			textAlign(LEFT, TOP)
			text(currentString, windowWidth-420, windowHeight-425, tallPop - 5, tallPop - pageMargin)
		pop()

		//fill(76, 96, 133)
		fill(241, 236, 206)
		noStroke()
		textSize(15)
		textAlign(CENTER)
		text(`INCOMING MESSAGE
FROM: Your Boss`, windowWidth-225, windowHeight-55)

		currentCharacter += random(0, 0.5)

	}

// the sus search + TYPE THE QUERY COME BACK TO THIS
	if (popBool4==true){

		noStroke()
		//bright blue border
		fill(57, 160, 237)
		rect(windowWidth-430,windowHeight-430,tallPop+10 ,tallPop+10)
		fill(76, 96, 133)
		//navy box and border
		rect(windowWidth-425,windowHeight-425,tallPop,tallPop)
		rect(windowWidth-430,windowHeight-75, tallPop+10, 55)
		fill(57, 160, 237)
		//bright blue box
		rect(windowWidth-425,windowHeight-75, tallPop, 50)

		if (disableType==false){
		let currentString = stringSus.substring(0, currentCharacter)
		push()
			fill(241, 236, 206)
			noStroke()
			textSize(20)
			textAlign(LEFT, TOP)
			text(currentString, windowWidth-420, windowHeight-425, tallPop - 5, tallPop - pageMargin)
		pop()

		//fill(76, 96, 133)
		fill(241, 236, 206)
		noStroke()
		textSize(15)
		textAlign(CENTER)
		text(`INCOMING MESSAGE
FROM: Your Boss`, windowWidth-225, windowHeight-55)

		currentCharacter += random(0, 0.5)
		}


	if(frameCount % 60 == 0 && timer > 0){
		timer--
	}

	if (timer==1){
		currentCharacter = 0
	}

	if(timer < 1){
		disableType = true

		fill(241, 236, 206)
		noStroke()
		textSize(20)
		textAlign(LEFT, TOP)
		text(stringSus, windowWidth-420, windowHeight-425, tallPop - 5, tallPop - pageMargin)
		}


	}

	if(popBool7 == true){
		noStroke()
		//bright blue border
		fill(57, 160, 237)
		rect(windowWidth-430,windowHeight-430,tallPop+10 ,tallPop+10)
		fill(76, 96, 133)
		//navy box and border
		rect(windowWidth-425,windowHeight-425,tallPop,tallPop)
		rect(windowWidth-430,windowHeight-75, tallPop+10, 55)
		fill(57, 160, 237)
		//bright blue box
		rect(windowWidth-425,windowHeight-75, tallPop, 50)

		if (theCrime == null){
		theCrime = random(randoCrime)
}

			stringNextData = `
Select a new data point to analyze.

Remember! The "crime" is related to ` + theCrime + `.`




		let currentString = stringData.substring(0, currentCharacter)
		push()
			fill(241, 236, 206)
			noStroke()
			textSize(20)
			textAlign(LEFT, TOP)
			text(currentString, windowWidth-420, windowHeight-425, tallPop - 5, tallPop - pageMargin)
		pop()

		//fill(76, 96, 133)
		fill(241, 236, 206)
		noStroke()
		textSize(15)
		textAlign(CENTER)
		text(`INCOMING MESSAGE
FROM: Your Boss`, windowWidth-225, windowHeight-55)

		currentCharacter += random(0, 0.5)

		}

		if(popBool8 == true){


		noStroke()
		//bright blue border
		fill(57, 160, 237)
		rect(windowWidth-430,windowHeight-430,tallPop+10 ,tallPop+10)
		fill(76, 96, 133)
		//navy box and border
		rect(windowWidth-425,windowHeight-425,tallPop,tallPop)
		rect(windowWidth-430,windowHeight-75, tallPop+10, 55)
		fill(57, 160, 237)
		//bright blue box
		rect(windowWidth-425,windowHeight-75, tallPop, 50)

		let currentString = stringNextSus.substring(0, currentCharacter)
		push()
			fill(241, 236, 206)
			noStroke()
			textSize(20)
			textAlign(LEFT, TOP)
			text(currentString, windowWidth-420, windowHeight-425, tallPop - 5, tallPop - pageMargin)
		pop()

		//fill(76, 96, 133)
		fill(241, 236, 206)
		noStroke()
		textSize(15)
		textAlign(CENTER)
		text(`INCOMING MESSAGE
FROM: Your Boss`, windowWidth-225, windowHeight-55)

		currentCharacter += random(0, 0.5)

		}

			if (popBool9==true){

			background(240)
			stroke(230)
			strokeWeight(2)
			fill(255)
			image(imgGoogle, windowWidth/2-150, windowHeight/3-100, googleWidth, googleHeight)
			rect(windowWidth/2-250, windowHeight/2-100, googleWidth+200, windowHeight/22,20)
			ellipse(windowWidth-40, 50, 50,50)

			noStroke()
			fill(57, 160, 237)
			//bright blue border
			rect(windowWidth/2-400,windowHeight/2-200, windowWidth/2 ,windowHeight/2)
			fill(76, 96, 133)
			//navy box and border
			rect(windowWidth/2-410,windowHeight/2-210, windowWidth/2-10 ,windowHeight/2-10)
			rect(windowWidth/2-400,windowHeight/2-200, windowWidth/2 ,windowHeight/15-10)
			fill(57, 160, 237)
			//bright blue box
			rect(windowWidth/2-410,windowHeight/2-210, windowWidth/2-10 ,windowHeight/15)

			textSize(30)
			fill(241, 236, 206)
			textAlign(LEFT)
			text('Collected Data:', windowWidth/2-400,windowHeight/2-175)

			if(frameCount % 60 == 0 && timer > 0){
				timer--
			}

			if(timer==0){

			for (let i = 0; i < searchData.length; i++){
				searchData[i].show()
			}
			}
		}

	}




function keyPressed(){
	if (popBool4==true && timer == 0){
		currentCharacter += random(0, 0.5)
		print(currentCharacter)
	}

	/*let currentString = this.search.substring(0, currentCharacter)
		push()
			fill(241, 236, 206)
			noStroke()
			textSize(20)
			textAlign(LEFT, TOP)
			text(currentString, windowWidth-420, windowHeight-425, tallPop - 5, tallPop - pageMargin)
		pop()

		//fill(76, 96, 133)
		fill(241, 236, 206)
		noStroke()
		textSize(15)
		textAlign(CENTER)
		text(`INCOMING MESSAGE
FROM: Your Boss`, windowWidth-225, windowHeight-55)
*/

	if (keyCode===ENTER && popBool4 == true){
		popBool4= false
		popBool1 = false
		popBool2 = false
		popBool3= false
		startBool = false
		searchedBool = true
		popBool5 = true
		currentCharacter=0
		searchScreen()
	}


	if(miniGameBool == true && keyCode===DOWN_ARROW){
		popBool6 = true
		miniGameBool = false
		searchedBool = true
		currentCharacter= 0
	}

	if(keyCode===ENTER && popBool6==true){
		searchedBool = false
		popBool6 = false
		currentCharacter = 0
		endBrowser()
		

	}

	if(keyCode===BACKSPACE && popBool6==true){
		searchedBool = false
		startBool = true
		popBool7 = true
		popBool9 = true
		timer= 7
		currentCharacter = 0

	}

}

function searchScreen() {

	background(240)
	stroke(230)
	strokeWeight(2)
	fill(255)
	image(imgGoogle, googleWidth-225, googleHeight-75, googleWidth/3, googleHeight/3)
	rect(googleWidth-100, googleHeight-75, googleWidth*2, windowHeight/22,20)
	ellipse(windowWidth-40, 50, 50,50)

	fill(40)
	textSize(18)

	text(objsearch, googleWidth+50, googleHeight-50)

	textSize(25)
	fill(0, 0, 128)
	text(objresult, googleWidth+300, googleHeight+100)

	textSize(15)
	fill(100)
	text(objtitle, googleWidth-70, googleHeight+70)

	if (popBool5==true){

		noStroke()
		//bright blue border
		fill(57, 160, 237)
		rect(windowWidth-430,windowHeight-430,tallPop+10 ,tallPop+10)
		fill(76, 96, 133)
		//navy box and border
		rect(windowWidth-425,windowHeight-425,tallPop,tallPop)
		rect(windowWidth-430,windowHeight-75, tallPop+10, 55)
		fill(57, 160, 237)
		//bright blue box
		rect(windowWidth-425,windowHeight-75, tallPop, 50)

		let currentString = stringTask.substring(0, currentCharacter)
		push()
			fill(241, 236, 206)
			noStroke()
			textSize(20)
			textAlign(LEFT, TOP)
			text(currentString, windowWidth-420, windowHeight-425, tallPop - 5, tallPop - pageMargin)
		pop()

		currentCharacter += random(0, 0.5)

		fill(241, 236, 206)
		noStroke()
		textSize(15)
		textAlign(CENTER)
		text(`INCOMING MESSAGE
FROM: Your Boss`, windowWidth-225, windowHeight-55)

	//image(imgError, mouseX, mouseY, 50, 50)

		if(currentString == `
Agent, this data is encrypted. Complete the task to download and decipher the data.

Please click SUBMIT to proceed.`)
		{
			buttonSubmit.show()
			buttonSubmit.position(windowWidth-250, windowHeight-100)

			buttonSubmit.mousePressed(() => {
				popBool5 = false
				currentCharacter = 0
				buttonSubmit.hide()
				searchedBool = false
				miniGameTask()

			
		})
		}


	}

	if(popBool6 == true){
		background(240)
			stroke(230)
			strokeWeight(2)
			fill(255)
			image(imgGoogle, windowWidth/2-150, windowHeight/3-100, googleWidth, googleHeight)
			rect(windowWidth/2-250, windowHeight/2-100, googleWidth+200, windowHeight/22,20)
			ellipse(windowWidth-40, 50, 50,50)

			noStroke()
			fill(57, 160, 237)
			//bright blue border
			rect(windowWidth/2-400,windowHeight/2-200, windowWidth/2 ,windowHeight/2)
			fill(76, 96, 133)
			//navy box and border
			rect(windowWidth/2-410,windowHeight/2-210, windowWidth/2-10 ,windowHeight/2-10)
			rect(windowWidth/2-400,windowHeight/2-200, windowWidth/2 ,windowHeight/15-10)
			fill(57, 160, 237)
			//bright blue box
			rect(windowWidth/2-410,windowHeight/2-210, windowWidth/2-10 ,windowHeight/15)

			textSize(30)
			fill(241, 236, 206)
			textAlign(LEFT)
			text('Task Complete', windowWidth/2-400,windowHeight/2-175)

			let currentString = stringChoice.substring(0, currentCharacter)
		push()
			fill(241, 236, 206)
			noStroke()
			textSize(20)
			textAlign(LEFT, TOP)
			text(currentString, windowWidth/2-400,(windowHeight/2-180), tallPop*2 - 5, tallPop*2 - pageMargin)
		pop()

		currentCharacter += random(0, 0.5)


	}

}

//not working
function mousePressed(){

}


function miniGameTask() {

	miniGameBool = true

	background(0,0,50)

	textSize(50)
	fill(255)
	text("Travel Down to Download and Decipher", windowWidth/2,windowHeight/2)

}

function endBrowser() {

	background(0)

	print(theTime)
	let lasttwo = theTime.slice(-2)
	print(lasttwo)
	let lasttwo2 = this.time.slice(-2)
	print(lasttwo2)
	print(this.time)

	if(theCrime == this.crime && lasttwo == lasttwo2){

		let currentString = stringSuccess.substring(0, currentCharacter)
		push()
			fill(241, 236, 206)
			noStroke()
			textSize(20)
			textAlign(LEFT, TOP)
			text(currentString, windowWidth/2-400,(windowHeight/2-180))
		pop()

		currentCharacter += random(0, 0.5)

	}else{
		let currentString = stringFail.substring(0, currentCharacter)
		push()
			fill(241, 236, 206)
			noStroke()
			textSize(20)
			textAlign(LEFT, TOP)
			text(currentString, windowWidth/2-400,(windowHeight/2-180))
		pop()

		currentCharacter += random(0, 0.5)}

}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}


class SearchData{
	constructor(date,time,search,result,title,type, crime){
		this.date = date 
		this.time = time;
		this.search = search 
		this.result = result
		this.title = title 
		this.type = type 
		this.crime = crime

		this.button = createButton(this.date)
		this.button.style('font-size', '20px')
		this.button.style('corner-radius', '4px')
		let ylnmnBlue = color(76, 96, 133)
		this.button.style('background-color', ylnmnBlue)
		let cornsilk = color(241, 236, 206)
		this.button.style('color', cornsilk)
		let celestialBlue = color(57, 160, 237)
		this.button.style('border-color', celestialBlue)
		//this.button.style('hover_color', celestialBlue)
		//this.button.style('display', 'block')

		buttons = document.getElementsByTagName("button")

		for(let i  = -1; i < searchData.length; i++){
			if(i<8){
				this.button.position(windowWidth/2-400,(windowHeight/2-120)+i*34)
			}else if(i<17){
				this.button.position(windowWidth/2-200,(windowHeight/2-427)+i*34)
			}else if (i<26){
				this.button.position(windowWidth/2,(windowHeight/2-734)+i*34)
			}else if (i<34){
				this.button.position(windowWidth/2+200,(windowHeight/2-1040)+i*34)
			}
			//this.button.position(windowWidth/2, i*25+50)
		}


		this.button.hide()

		this.button.style('z-index', '1')
	}


	show(){

		if (popBool2 == true){
			this.button.show()
		}

		this.button.mousePressed(() => this.update())
	}

	update(){

		//this is where you go to the search
		background(240)

		let randoTime = ' ' + int(random(1,13)) + ':' + int(random(0,6)) + int(random(0,10)) + ' ' + random(['P','A']) + 'M'
		
		if(theTime == null){
			theTime = randoTime
		} 


			stringSus = `
On `+ this.date + `, the SUSPECT had one (1) search tagged suspicious: 

	` + this.search + `

Information! The "crime" occured at ` + theTime + `. The search must be at the same time of the day as the crime to secure prosecution (AM or PM).

Press ENTER to search the query and further analyze the data..`

		objsearch = this.search
		objresult = this.result
		objdate = this.date
		objtime = this.time
		objtitle = this.title
		objcrime = this.crime


		//text('search: ' + this.search, windowWidth/2-250, windowHeight/2-100)
		popBool2 = false
		popBool3 = false 
		popBool4 = true
		timer = 20
		currentCharacter = 0

		for (var i = 0; i < buttons.length; i++) {
          buttons[i].style.display = "none"
  	  }


  	  //bring the buttons back
  	  /*for (var i = 0; i < buttons.length; i++) {
          buttons[i].style.display = "inline-block"
  	  }*/


	}

}