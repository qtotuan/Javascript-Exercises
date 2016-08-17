/* 1st set of homework */

// ARRAYS
var nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort();
var halfArray = Math.floor(nums.length/2);
//console.log(nums.length); => seems like there are 25 array items
//console.log(half); => checking if Math.floor is giving me higher or lower number
console.log(nums[halfArray+1]);


// OBJECTS
var obj = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}

console.log(obj.name);
obj.type = "creature";
console.log(obj.type);
obj.age = 6;
console.log(obj.age);



/* 2nd set of homework */

// LOOP 1
var eulerArray = [];
for (i = 0; i < 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    eulerArray.push(i);
  }
}
//console.log(eulerArray);
var total = 0;
for (var i = 0; i < eulerArray.length; i++) {
  total = total + eulerArray[i];
}
console.log(total);


// LOOP 2
var Wilkersons = ["Lois", "Dewie", "Francis", "Malcolm", "Reese", "Hal"];
var halfArray = Math.floor(Wilkersons.length/2);
console.log("There are " + Wilkersons.length + " Wilkersons.")
console.log(halfArray);
for (var i = halfArray; i < Wilkersons.length; i++) {
  console.log(Wilkersons[i]);
}


// LOOP 3
var plusJamie = ["Lois", "Dewie", "Francis", "Malcolm", "Reese", "Hal", "Jamie"];
var halfArray = Math.floor(plusJamie.length/2);
console.log("There are " + plusJamie.length + " Wilkersons plus Jamie.")
console.log(halfArray);
for (var i = halfArray; i < plusJamie.length; i++) {
  console.log(plusJamie[i]);
}
