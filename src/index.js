import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

// const newNumber = numbers.map(num => {
//   return num * num;
// });

// console.log(newNumber)

////Map -Create a new array by doing something with each item in an array.

// const newNumbers = numbers.map(x => {
//   return x * 2
// })
// console.log(newNumbers);

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });
// const newNumbers = numbers.filter(num => {
//   return num < 10
// })

// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })
// var newNumber = numbers.reduce((accumulator, num) => {
//   return accumulator + num
// })

// console.log(newNumber);

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })
// const newNumber = numbers.find(num => {
//   return num > 10
// })

// console.log(newNumber);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
const newNumber = numbers.findIndex((num) => {
  return num === 56;
});

console.log(newNumber);
