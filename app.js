var bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

// // 1.
// var sumGross = 0;
// for (var i = 0; i < bondFilms.length; i++) {
//   var currency = bondFilms[i].gross;
//   var number = Number(currency.replace(/[^0-9\.]+/g,""));
//   sumGross = sumGross + number
// }
//
// console.log(sumGross.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
//
// // 2.
// var bondTitles = [];
// for (var i = 0; i < bondFilms.length; i++) {
//   bondTitles.push(bondFilms[i].title);
// }
// console.log(bondTitles);
//
// // 3.
// var oddBonds = [];
// for (var i = 0; i < bondFilms.length; i++) {
//   if (bondFilms[i].year % 2 === 1) {
//     oddBonds.push(bondFilms[i].title);
//   }
// }
// console.log(oddBonds);




// Humdinger

// Iterate over films, and put all actor names into a new array,
// including doubles
var bondActors = [];
for (var i = 0; i < bondFilms.length; i++) {
  bondActors.push(bondFilms[i].actor);
}

// Create a new object with actor names as *unique* keys
// and increase value, whenever actor names appears multiple times
var uniqueActors = {};

for (var i = 0; i < bondActors.length; i++) {
  if (uniqueActors[bondActors[i]] === undefined) { // if the key does not exist yet
    uniqueActors[bondActors[i]] = 1; // create new key and set value to 1
  } else {
    uniqueActors[bondActors[i]] += 1; // if key already exists, increase value by 1
  }
}
console.log(uniqueActors);

// Find the minimum key value of the uniqueActors object
var minActor = 0;
var minMovies = 1000;
for (var key in uniqueActors) { // iterate over keys in an object
  if (uniqueActors[key] < minMovies) { // Is the key value lower than the stored movies variable?
    minMovies = uniqueActors[key]; // update number of movies
    minActor = key; // update according actor name
  }
}
// console.log(minActor);
// console.log(minMovies);

// Iterate over original bondFilms and find the minActor name > print movie object
for (var i = 0; i < bondFilms.length; i++) {
  if (bondFilms[i].actor == minActor) {
    console.log(bondFilms[i]);
  }
}
