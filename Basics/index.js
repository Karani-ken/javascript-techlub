const component = document.getElementById('app');
component.innerHTML = `<h1> This is js project</h1>`
//js cheatsheet
/**
 * variable and datatypes
 * operators
 * Methods and built-in functions
 * control flow
 *          - conditional statements
 *              -if
 *              - if else
 *              -switch case
 *           -loops
 *                -for
 *                - while
 *                - do while
 *                 -for each, for in
 * arrays
 * functions 
 * OOP
 * DOM (Document Object Model) manipulation
 * 
 * asynchronous js 
 *                  
 */

//variables and constants in javascript
//const
//let 
//var

// keyword variableName;
let firstName;
var lastName;
const pi = 3.12;
let a = 4;
console.log(a);
a = "my name"
console.log(a)

//data in js
/**
 * number
 * string
 * char
 * booloens
 * undefined
 * null
 * objects
 * arrays
 */
let b = 123
let c = "something"
let d = 'G'
let isLate = true;

//operators
/**
 * assignment operator =
 * arithmetic operators *,+,-,/, %,
 * equality operators <,>,==,<=,>=,!=, ===, !==
 */
a = 10;
b = 3;
console.log(a % b);
a = 10;
b = "10";
console.log(a !== b);

// i++ i=i+1

let weather = "sunny";

if (weather.toLocaleLowerCase() === "cold") {
    //component.innerHTML= `<h1> wear a jacket</h1>`
} else if (weather.toLowerCase() === "sunny") {
    component.innerHTML = `<h1> wear something light</h1>`
} else {
    component.innerHTML = `<h1> wear a whateve you want</h1>`
}

switch (weather) {
    case "cold":
        component.innerHTML = `<h1> wear a jacket</h1>`;
        break;
    case "sunny":
        component.innerHTML = `<h1> don't wear a jacket</h1>`;
        break;

}
