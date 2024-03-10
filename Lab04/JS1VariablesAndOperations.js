/*
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  Variables and Operations Lab
  FE JS1 Lab
*/

/** Key Terms:
 *  JavaScript
 *  GUI (Graphic User Interface)
 *  CLI (Command Line Interface)
 *  Variable
 *  Data Types:
 *   - String
 *   - Number
 *   - Boolean
 *   - Array
 *   - Undefined
 *   - Object
 *   - BigInt
 *   - Null
 *   - Symbol
 *  Method
 *  Git
 *  Source Control
 *  Operators
 *  console.log()
 * 
*/

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 1. Creating & 'console.log()'ing variables \n`);

/**
 * Instruction: Create a variable for each step, then print that variable 
 *              to the console in the correct section.
 *
 * Step 1: Create a variable to hold the quantity of available seats left on a flight.
 * Step 2: Create a variable to hold the cost of groceries at checkout
 * Step 3: Create a variable to hold a person's middle initial
 * Step 4: Is it Hot Outside?
 *         Create a variable to hold a boolean, true if it's hot outside, false if it's not hot outside.
 * Step 5: Create a variable to hold a customer's first name.
 * Step 6: Create a variable to hold a street address.
 * ↓ YOUR CODE HERE ↓ */

console.log("Step 1:  Number of Seats on a Plane");
var availablePlaneSeats = 32;
console.log("The number of seats available on the flight is " + availablePlaneSeats);

console.log("Step 2:  Cost of Groceries");
var Grocery$ = 5.99;
console.log("The total cost of your groceries is " + Grocery$);

console.log("Step 3:  Middle Initial");
var middleInit = "D";
console.log("My middle initial is " + middleInit);

console.log("Step 4:  Is it Hot Outside?");
var hotOutside = "true";
console.log("True or False: Is it hot outside? " + hotOutside);

console.log("Step 5:  First Name");
var firstName = "London";
console.log("My first name is " + firstName);

console.log("Step 6:  Street Address");
var streetAddress = "555 Fake Street";
console.log("The street address for this location is " + streetAddress);


/*-------------------------------------------------------*/

console.log(`--------------------------
Question 2. Creating & 'console.log()'ing variables \n`);
 

/** 
 * Instruction: Use the variables we just created to solve the problems below.
 *              Print your answers to the console.
 * 
 *
 * */

    console.log('Remove Plane Seats:');
//	A customer booked 2 plane seats. Remove 2 seats from the available seats variable
//  ↓ YOUR CODE HERE ↓
console.log("After booking 2 seats, there are " + (availablePlaneSeats - 2) + " seats remaining.");


    console.log('Buy a Candy Bar:');
//	Impulse candy bar purchase! Add 2.15 to the grocery total
//  ↓ YOUR CODE HERE ↓
console.log("With the addition of the candy bar purchase, your total comes to $" + (Grocery$+2.15));

    console.log('Fix a Birth Certificate:');
//	A birth certificate was printed incorrectly, change the middle initial to something else
//  ↓ YOUR CODE HERE ↓
var middleInit = "F";
console.log("The middle initial on the birth certificate has been corrected to " + middleInit + ".");

    console.log('Changing Seasons:');
//	The season has changed, update the hot outside variable	to be opposite of what it was
//  ↓ YOUR CODE HERE ↓
console.log("The season has changed to Winter. Is it hot outside? " + !hotOutside);
    

    console.log('Full Name:');
//	Create a new variable called full name using the customer's
//  first name, the middle initial, and a last name of your choice
//  ↓ YOUR CODE HERE ↓
var fullName = firstName + " " + middleInit + ". Smith";
console.log("The customer's full name is " + fullName);


    console.log('Introduce a Customer:');
//	Print a line to the console that introduces the customer 
//	including the name, and saying that they live at the address variable
//  ↓ YOUR CODE HERE ↓
console.log("Good afternoon! This is our newest customer " + fullName + " who lives at " + streetAddress + ".");


    console.log('-----------Finished------------');

    