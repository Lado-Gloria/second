let a ="beautiful";
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);
console.log(a[8]);

const food ="i was feeling hungry today";
let chick = 5;
let output = food.slice(0,chick) +" " +"eat";
console.log(output)

const story= "The quick brown fox jumps over the lazy dog";
story.split(" ").forEach((word) => {
  const numberOfOccurrences = story.match(new RegExp(word, "g")).length
  console.log(`${word} - ${numberOfOccurrences}`)
});
const string1 = "We are now going to school";
console.log(string1.search("now"));
const string2 = "The child was sitting on the table before it fell"
console.log(string2.search("sitting"));

const word= "wonderful";
console.log(word.toUpperCase());