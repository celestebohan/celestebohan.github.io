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
  paint.forEach((hex) => {
    console.log("paint:", paint);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showPaint() {
  console.log("showBooks()");
  paint.forEach((paint) => {
    const h2 = document.createElement("h2");
    h2.innerText = paint.fields.title;
    document.body.appendChild(h2);
  });
}


function draw(){
  fill(255,255,255);
ellipse(mouseX, mouseY, 100,100,)



}
