// How do we assign a value to a variable?
// You name the variable and = to value

//How do we change the value of a variable?
// You use the name of the variable and = to new value

//How do we assign an existing variable to a new variable?
// 
//Remind me, what are declare, assign, and define?
// declaring is creating a variable with var + a name
// assigning  and defining gives a variable value

//What is pseudocoding and why should you do it?
// pseudocoding is writing out in words about what you're wanting to code

//What percentage of time should be spent thinking about how you're going to solve
// a problem vs actually typing in code to solve it?
// 80-85% thinking the rest typing

//Create a variable called firstVariable.
//Assign it the value of the string "Hello World"
//Change the value of this variable to some number.
//Store the value of firstVariable in a new variable called secondVariable
//Change the value of secondVariable to any string.
//What is the value of firstVariable?

var firstVariable = "Hello World";
firstVariable = 7;
var secondVariable = firstVariable;
secondVariable = "Goodbye";
console.log(firstVariable);
//Value of firstVariable is 7

//Create a variable called yourName and set it equal to your name as a string. Then, write an expression 
//that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
var yourName = "Sarah Kim";
var greeting = ("Hello, my name is " + yourName);
console.log(greeting);

// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. 
//Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false);
console.log(e === 'Kevin');
console.log(a == b != c); 
console.log(a != a < d);
console.log(48 == '48');

// Declare a variable animal. Set it to be either "cow" or something else.
//Write code that will print out "mooooo" if the it is equal to cow.
//Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."

var animal = "cow";
	if (animal = "cow") {
	console.log('moooo');
}	else {
console.log('Hey, youre not a cow.');
}

//Make a variable that holds a person's age. Be semantic.
//Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the 
//age is younger than 16, a message should print "Sorry, you're too young."

var ageNumber = 20;
if (ageNumber >= 16) {
	console.log('Here are the keys!');
}
if (ageNumber < 16) {
	console.log('Sorry, youre too young.');
}
//Write a loop that will print out all the numbers from 0 to 10, inclusive.
for (i = 0; i <= 10; i++) {
	console.log(i);
}
//Write a loop that will print out all the numbers from 10 up to and including 400.

for (i = 10; i <= 400; i++) {
	console.log(i);
}
//Write a loop that will print out every third number starting with 11 and going no higher than 4000

for (i = 11; i < 4000; i++) {
	if (i % 3 === 0) {
	console.log(i);
	}
}
//Print out the numbers that are within the range of 1 - 100.
//Adjust your code to add a message next to even numbers only that says: "<-- is an even number".

for (i = 1; i <= 100; i++) {
	if (i % 2 === 0) {
		console.log(i + " <--is an even number");
	} else {
		console.log(i);
	}
}
//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
//Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.

for (i = 0; i <= 100; i++) {
	if (i % 5 === 0) {
		console.log("I found a " + i + ", High five!"); 	
	} 
	if (i % 3 === 0) {
		console.log("I found a " + i + ". Three is a crowd");
	}
	else {
		console.log(i);
	}
}

//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
//Check your work! Your bank_account should have $55 in it.


function bank_account(sumTotal) {
  let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
 }
  return sum;
}
console.log(bank_account(10));

//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
//Check your work! Your banck_account should have $10,100 in it.

function bank_account(sumTotal) {
  let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum += i * 2;
 }
  return sum;
}
console.log(bank_account(10));

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000. If a previous question 
//you've done has helpful bits of code in it that partially solves this problem, look back at them.

//already done this

//What are the things in an array called?
//things in an array are called values

//Do Arrays guarantee those things will be in order?
// no

//What real-life thing could you model with an array?
// a grocery list


//Create an array that contains three quotes and store it in a variable called quotes.
var quotes = ["Love conquors all", "Money is not the key to happiness", "Time heals all wounds"];

//Given the following array const randomThings = [1, 10, "Hello", true]
//How do you access the 1st element in the array?
randomThings[0];

//Change the value of "Hello" to "World".
randomThings[3] = "World";

//Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);

//Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
//What would you write to access the 3rd element of the array?
ourClass[2];

//Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat"

//Add a new element, "Cloud City" to the array.
ourClass.push("Cloud City");

//Given the following array: const myArray = [5, 10, 500, 20]
//Add the string "Egon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Egon, Tom");

//Remove the 5 from the beginning of the array.
myArray.shift("5");

//Add the string "Bob Marley" to the beginning of the array.
myArray.unshift("Bob Marley");

//Remove the string of your choice from the end of the array.
myArray.pop("Tom");

//Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?

myArray.reverse(); //it did not mutate the array because the values aren't different

//Write an if ... else statement that:
//console.log()s "little number" if the number is entered is less than 100
//console.log()s big number if the number is greater than or equal to 100.

let num = 11;
if (num < 100) {
	console.log("little number")
} else if (num >= 100) {
	console.log("big number")
}

//Write an if ... else if ... else statement: console.log() little number if the number entered is less than 5.
// If the number entered is more than 10, log big number. Otherwise, log "monkey". 

if (num < 5) {
	console.log("little number")
} else if (num > 10) {
	console.log("monkey")
}

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

//What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

//Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans")

//Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[5] = "stained knit hat";

//Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.

const thomsCloset1 = thomsCloset[0];
const thomsCloset2 = thomsCloset[1];
const thomsCloset3= thomsCloset[2];
 thomsCloset1[1];

//In the same way, access one item from Thom's pants array.
thomsCloset2[0];

//Access one item from Thom's accessories array.
thomsCloset3[2];

//Log a sentence about what Thom's wearing. 

console.log("Thom is wearing a " + thomsCloset1[1] + " over " + thomsCloset2[0] + " with " + thomsCloset3[[2]);

//Get more specific about what kind of PJs Thom's wearing this winter. 
//Modify the name of his PJ pants to Footie Pajamas.
thomsCloset2[2] = "Footie Pajamas";

//Do you think you could write a function called printGreeting with a parameter name
// that returns a greeting with the argument interpolated into the greeting?

function printGreeting(name) {
  return "Hello there, " + name +"!";
}

console.log(printGreeting("Slimer"));

//Write a function printCool that accepts one parameter, name as an argument. 
//The function should print the name and a message saying that that person is cool.

function printCool(name) {
  return name + " is cool";
}
  console.log(printCool("Captain Reynolds"));

// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

function calculateCube(volume) {
  return volume * volume * volume
}
console.log(calculateCube(5));

//Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. 
//The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, 
//take a minute to test them with different values to make sure they behave the way you want.
function isVowel(letter) {
  const vowels = ["a", "e", "i", "o","u"];
for (i = 0; i <= vowels.length; i++) {
if (letter === vowels[i]) {
  return true; 
} 
else {
  return false;}
}
}
console.log(isVowel("b"));

//Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers 
//where each number is the length of the corresponding string.
function getTwoLength(string1, string2) {
  function checkLength(word) {
let wordSplit = word.split("");
for (i = 0; i <= wordSplit.length; i++) {
  return wordSplit.length 
}
};
  return [checkLength(string1), checkLength(string2)];
}
console.log(getTwoLength("Hank", "Hippopopalous"));


//Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function 
//should return an array of numbers where each number is the length of the corresponding string.

function getMultipleLengths() {
   const array = [""];
    for (let i = 0; i < array.length; i++) {
      array 
    }
}

//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same,
// one of them should be returned. Be sure to test it with larger values in each of the three locations.


function maxOfThree() {
  let max = 0;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
}
} return max;
}

console.log(maxOfThree(6, 9, 1));


//Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

//console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
//=> "Peanutbutter"

function printLongestWord(str) {
  let length = 0;
  let longestWord = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i].length >length){
    length = str[i].length;
    longestWord = str[i];

     }
  }
  return longestWord;
}


//Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.
//The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
//For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
function transmogrify(x, y, z) {
  return Math.pow((x * y), z);
}

console.log(transmogrify(5, 3, 2));
//console.log(transmogrify(5, 3, 2));
//=> 225

//Without using .split(), .reverse(), or .join(), write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.
//See if you can do it without googling.
//Remember: You can index directly into a string:
//"hello world"[7] => "o"

//That and basic loops and variables and arrays are all you need to solve this without the Array methods.

//console.log(reverseWordOrder("Ishmael me Call"));
//=> "Call me Ishmael"
function reverseWordOrder(word) {
  let reverseWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
}


//Write a function that will return a random integer between 1 and 10. Test it.

function random(i) {
  for (let i = 0; i <= 10; i++) {
    return Math.floor(Math.random() * 10) + 1;  
  }
} 
console.log(random());
//Write a function that will return a random integer between 10 and 100. Test it.

function random(i) {
  for (let i = 10; i <= 100; i++) {
    return Math.floor(Math.random() * 100) + 10;  
  }
} 
console.log(random());
//Write a function that will return a random number between 532 and 13267. Test it.
function getRandom() {
  return Math.floor(Math.random() * (13267 - 523 + 1) ) + 523;
}

console.log(getRandom(532, 13267));
//Write a function that will return a random number between 1 and 10. Test it.

function getRandom() {
  return Math.floor(Math.random() * (10 - 1 + 1) ) + 1;
}

console.log(getRandom(1, 10));
//Add a few more quotes to the quotes array from question III-B-1 above. Write a function that will take an array as a parameter, and return a random element from that array. Call your function a few times, passing in the quotes array. Give it a nice semantic name like getRandomElement.

//Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.

//A. Make a user object
//Create an object called user.
//Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.


user ={
  name: Sarah,
  email: sarah@gmail.com,
  age: 31,
  purchased: []
}


//B. Update the user
//Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
user.email = "sarah123@gmail.com";

//Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
user.age++

//C. Adding keys and values
//You have decided to add your user's location to the data that you want to collect.
//Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
user.location = "Denver"

//D. Shopaholic!
//Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
user.purchased.push("carbohydrates");
//Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
user.purchased.push("peace of mind");
//Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
user.purchased.push("merino jodhpurs");

//Console.log just the "Merino jodhpurs" from the purchased array.
console.log(user.purchased[2]);

//E. Object-within-object
//Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
//If we want to give our user a friend with a name and age, we could write:
user.friend = {
    name: "Grace Hopper",
    age: 85
}
//When we console.log user, we would see the friend object added to our user object.

//Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
//Console.log just the friend's name
user.friend = {
    name: "Julie",
    age: 32,
    location: "San Francisco",
    purchased: []
}

console.log(user.friend.name)
//Console.log just the friend's location

console.log(user.friend.location)

//CHANGE the friend's age to 55

user.friend.age = 55

//The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
user.friend.purchased.push("the one ring")
//The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.

user.friend.purchased.push("a latte")

//Console.log just "A latte" from the friend's purchased array.
console.log(user.friend.purchsed[1])

//Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
for(let i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i])
}
//Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
for(let i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i])
}


//Write a single function updateUser that takes no parameters. When the function is run, it should:
//it should increment the user's age by 1
//make the user's name uppercase

function updateUser() {
  user.name.toUpperCase();
  user.age++
}

//The function does not need a return statement, it will merely modify the user object.

//Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.
function oldAndLoud(person) {
  person.name.toUpperCase();
  person.age++
}

  oldAndLoud(user);