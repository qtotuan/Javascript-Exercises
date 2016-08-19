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


/* 3rd set of homework */

// Palindrome
function reverseString (str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

function palindrome (str) {
  if (reverseString(str) == str) {
    return true;
  } else {
    return false;
  }
}

var str = "borscht";

if (palindrome(str) === true) {
  console.log('The word "' + str + '" is a palindrome.');
} else {
  console.log('The word "' + str + '" is not a palindrome.')  ;
}


//Max of Three
function maxOfThree (a, b, c) {
  if (a >= b) {
    var max = a;
  } else {
    var max= b;
  }

  if (max >= c) {
    return max
  } else {
    return c
  }
}

console.log("Your max of three is " + maxOfThree(100,7,3));

// Max of three = ADVANCED :)
var myArray = [];
function findMax (arr) {
  if (myArray.length < 1) {
    return "Your array is empty.";
  }
  var higherNumber = myArray[0];
  for (var i = 0; i < arr.length-1; i++) {
    if (arr[i] > higherNumber) {
      higherNumber = arr[i];
    }
  }
 return "Your max of this array is: " + higherNumber;
}
console.log(findMax(myArray));


//Pythagoras
function pythagoras (sideA, sideB) {
  return Math.pow((Math.pow(sideA, 2) + Math.pow(sideB, 2)), 1/2);
}
console.log(pythagoras(8,6));


/* 4th set of homework */

// Calc
function calc (num1, num2, operation) {

switch (operation) {
  case "add":
    return num1 + num2;
    break;
  case "sub":
    return num1 - num2;
    break;
  case "mult":
    return num1 * num2;
    break;
  case "div":
    return num1 / num2;
    break;
  case "exp":
    return Math.pow(num1, num2);
    break;
  default:
   return "Please enter an operation";
  }
}

console.log(calc(2,3, "exp"));


// isAVowel
function isAVowel(char) {
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    console.log(char + " is a vowel" + " - true")
  } else {
    console.log(char + " is not a vowel" + " - false")
  }
}

isAVowel("b");
isAVowel("a");


//Number of arguments
function args () {
  console.log("The number of arguments is: " + arguments.length);
}
args([], {}, true);


/* 5th set of homework */

//Scope
var hexColor = '#0000FF';

var showColor = function() {
	console.log(hexColor);
};

showColor();
/* The function does not require an argument because hexColor is a global variable which has been defined outside the function. It is available everywehere.*/

var hexColor = '#C61531';

var showColor = function(hexColor) {
	console.log(hexColor);
};

showColor('#0000FF');
/* Javascript reads code in a linear way, so the variable/argument that has been defined last, wins.*/

var scopeExample = function() {
	var num = 5;
	console.log(num);
}

var theOther = function() {
	console.log(num);
}

theOther();
/* Thefucntion theOther cannot access the variable num because num is a local variable. */

var num = 8;

var scopeExample = function() {
	num = 5;
	console.log(num);
}

scopeExample();
/* scopeExample logs 5 because the global variable is overridden by the more immediate local variable. THe code i being read in a linear way and the last variable wins.*/
