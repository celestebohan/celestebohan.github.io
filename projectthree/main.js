/* globals require */
console.log("Hello, Airtable");

// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyCBqWBdUmJ6ay4u" }).base(
  "appmHlC8JE2m5Hg42"
);

//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("paint").select({}).eachPage(gotPageOfPaint, gotAllPaint);

// an empty array to hold our book data
const paint = [];


// callback function that receives our data
function gotPageOfPaint(records, fetchNextPage) {
  console.log("gotPageOfPaint()");
  // add the records from this page to our books array
  paint.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllPaint(err) {
  console.log("gotAllPaint()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading paint");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogPaint();
  showPaint();
}

// just loop through the books and console.log them
function consoleLogPaint() {
  console.log("consoleLogPaint()");
  paint.forEach((paint) => {
    console.log("paint:", paint);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showPaint() {
  console.log("showPaints()");
  



  paint.forEach((paint) => {
    var paintContainer = document.createElement("div");
    paintContainer.classList.add("paint-container");
    paintContainer.style.backgroundColor = paint.fields.hex;
    document.querySelector(".container").append(paintContainer);

var paintName = document.createElement("h2");
paintName.classList.add("paint-name");
paintName.innerText = paint.fields.paint;
paintContainer.append(paintName);

var paintImage = document.createElement("img");
paintImage.classList.add("paint-image");
paintImage.src = paint.fields.image[0].url;
paintContainer.append(paintImage);


//add event listener for when user clicks on paint color the image will show
paintContainer.addEventListener("click", function(event) {
      paintImage.classList.toggle("active");
      
    });

});
}




