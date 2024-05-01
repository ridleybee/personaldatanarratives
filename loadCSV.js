let table;
let dateMenu;
let canvas
//let imageArray = [];
let submitButton;
let imagePers
let imageAd
let imageFeat


function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('searchData.csv', 'csv', 'header');

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0)
  canvas.style("z-index", "-1")
  background(0);
  fill(255)


  dateMenu = createSelect();
  dateMenu.option('Select Date')

  submitButton = createButton('Submit');

  //cycle through the table rows
  for (let i = 0; i < table.getRowCount(); i++){
    //imageArray[i] = loadImage("images/" + table.getString(i, 'image'));
    //grab each of the dates
    let date = table.getString(i, 'Date');

    let timeSearch = table.getString(i, 'Time');

    imagePers = loadImage("images/itsyouman.jpg")
    imageAd = loadImage("images/thisisanad.jpg")
    imageFeat = loadImage("images/featuredsnippet.png")


    dateMenu.option(date)
   
  }



//print(imageArray)
  //trigger the changeData function when
  //menu is changed
  //companyMenu.changed(changeData);
  
  //trigger the changeData function when button is pressed
  submitButton.mousePressed(changeData);
}

function changeData(){

  background(0);
  textSize(30)
  textAlign(CENTER)
  imageMode(CENTER);
  for (let i = 0; i < table.getRowCount(); i++){
    if(dateMenu.value() == table.getString(i, 'Date')){
      text(table.getString(i, 'Date'), windowWidth/2, 50);
      text(table.getString(i, 'Time'), windowWidth/2, 90);
      text(table.getString(i, 'Search'), windowWidth/2, 130);
      text(table.getString(i, 'Top Result'), windowWidth/2, 170);
      text(table.getString(i, 'Source Title'), windowWidth/2, 220);
      text(table.getString(i, 'Source Type'), windowWidth/2, 270);

      if(table.getString(i,"Personalized") == "TRUE"){
        image(imagePers,windowWidth/2, windowHeight/2)
      }

      if(table.getString(i, "Declared Ad") == "TRUE"){
        image(imageAd, windowWidth/3, windowHeight/2)
      }

      if(table.getString(i, "Featured Snippet") == "TRUE"){
        image(imageFeat, windowWidth-windowWidth/3, windowHeight/2)
      }

      //for (let j = 0; j < table.getString(i, 'frequency'); j++){
      //  image(imageArray[i], random(windowWidth), random(windowWidth), 30, 30)
      //}
    }
  }

}

function draw(){


}
