/*eslint-env browser*/

//STEP 1
var number;

number = parseFloat(prompt("Please enter a number to be halved:"));
halfNumber(number);

function halfNumber(number) {
    
    document.write("Half of " + number + " is " + number / 2 + ".");
}


//STEP 2
var number;

number = parseFloat(prompt("Please enter a number whose square you want:"));
squareNumber(number);

function squareNumber(number) {
    
    document.write("<br>"+"The result of squaring the number " + number + " is " + number * number + ".");
}



//STEP 3
var numberOne, numberTwo;

numberOne = parseFloat(prompt("Please enter the first number to check how much % the first number is of the second number:"));
numberTwo = parseFloat(prompt("Enter a second number:"));
percentOf(numberOne, numberTwo);

function percentOf(numberOne, numberTwo) {
    
    document.write("<br>"+numberOne + " is " + numberOne / numberTwo * 100 + "% of " + numberTwo + ".");
}



//STEP 4
var numberOneMod, numberTwoMod;

numberOneMod = parseFloat(prompt("To find the modulus of the two numbers. \nEnter a first number:"));
numberTwoMod = parseFloat(prompt("Enter a second number:"));
findModulus(numberOneMod, numberTwoMod);

function findModulus(numberOneMod, numberTwoMod) {
    
    var mod = numberOneMod % numberTwoMod;
    document.write("<br>"+mod + " is the modulus of " + numberOneMod + " and " + numberTwoMod + ".");
}

