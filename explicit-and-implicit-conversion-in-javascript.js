/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
//Use Number() to convert the string age="25" into number to calculate the total age.
let totalAge =Number(age) + 5;
console.log("Total Age: " + totalAge);

let inputNumber = 3;
let inputString = "3";
//Assign the empty string to indicate falsy values.
let combinedString ="";
if(combinedString)
{
console.log("It has empty value");
}

//Below is the example of implicit type conversion.
combinedString= 3 + "3";
console.log("Before type conversion results " +combinedString);

//Below is the example of explicit type conversion.
let totalSum = inputNumber +Number(inputString);
console.log("After type conversion Results " +totalSum);
 
