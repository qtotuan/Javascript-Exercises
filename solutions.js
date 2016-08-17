var nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

nums.sort();
var halfArray = Math.floor(nums.length/2);
//console.log(nums.length); => seems like there are 25 array items
//console.log(half); => checking if Math.floor is giving me higher or lower number
console.log(nums[halfArray+1]);


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
