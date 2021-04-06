// let poemFragments = {
//   'adjective': ["a mountain","Leaf","a grandma","a field","a cup","a horse","an ocean","a walnut","a desert","a cat","a branch","a diaper","socks","a cupcake","a pillow","a coffee","cat","girl","a cherry"],
//   'adjective': ["Tiring","rotund","hideous","breakable","sparkly","smooth","fluffy","fragile","delicious","lovely","hot","strange","smooth","ample","warm","colossal","rough","tiny","dark"],
//   'verb': ["Overthinking","thinking of","bouncing on","sculpting","waiting for","wanting","napping","thinking","hoping for","wanting","dancing","sleeping","frustra","brightening","skipping","looking for","swimming","thinking of","making"],
//   'emotion': ["sorrowful","Anxious","confused","yearning","angry","frustrated","melancholy","overwhelm","anxious","excited ","sleepy","triggered","excited","tired","joyful","disturbed","happy","delighted","upset"]
// };

let poemFragments = {
  noun: [],
  verb: [],
  adjective: [],
  emotion: [],
};

let Airtable = require('airtable');
console.log(Airtable);
var base = new Airtable({apiKey: 'keyzwwUOzmCKuXxbq'}).base('appIQorANZvYFOqnN');

base('Poem fragments').select({}).eachPage(gotPageOfFragments, gotAllFragments);

function gotPageOfFragments(records, fetchNextPage) {
 console.log(records);
 records.forEach(function (record) {
poemFragments.noun.push(record.fields.noun);
poemFragments.verb.push(record.fields.verb);
poemFragments.adjective.push(record.fields.adjective);
poemFragments.emotion.push(record.fields.emotion);

});

  // fetch any more pages if they exist
  fetchNextPage();
}

function gotAllFragments(err) {
  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading fragments");
    console.error(err);
    return;
  }

  console.log(poemFragments);
}

function swapText(event){
  let itemClass = event.target.className;
  let fragmentTypes = ['noun', 'verb', 'adjective', 'emotion'];


if (fragmentTypes.includes(itemClass)){
  event.target.innerText = poemFragments[itemClass][Math.floor(Math.random() * poemFragments[itemClass].length)];
  document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 50%, 70%)`;
}

}
  let poem = document.querySelector('#poem');
  poem.addEventListener('mouseover', swapText);
