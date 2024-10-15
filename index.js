// Testing code w/ spaces for user input. Based on W3, it shouldn't impact anything
const userInput = prompt(`Please input your desired values and seperate them using commas`, `23, 44`)
const arrayString = userInput.split(`,`)

// Creating a for loop to turn the array values into numbers
const dataSet = [];
for (let i = 0; i < arrayString.length; i++) {dataSet.push(Number(arrayString[i]))};
// console.log(dataSet)

//  Function for number of data points
let getLength = 0
getLength = (arr) => {return arr.length}
// console.log(getLength(dataSet))

// Function for sum of all datapoints
let getSum = 0
getSum = (arr) =>
{let sumCalculation = 0;
for (let i = 0; i < arr.length; i++) {sumCalculation += arr[i];}
 return sumCalculation;}
// console.log(getSum(dataSet))


// Function for getMean
// mean is = sum/length
let getMean = 0
getMean = (sum) => {let mean = 0; mean = getSum(sum)/getLength(sum); return mean}
// console.log(getMean(dataSet))

// Function for minimum of dataSet
let getMin = 0
getMin = (arr) => {let min = arr[0]; for (let i = 0; i < arr.length; i++) { if (arr[i] < min ){min=arr[i];}}{return min}};
// console.log(getMin(dataSet))

// Create a Function for getMax
// create a loop to run through the entire array
// compare the current value to the max value
// when running throught the 0th index during initialization, there is nothing else to compare it to, so we know it is the max.
// loop through the array until a value larger than the current max appears
//set the larger value as the new max.
// return the value of the final max
let getMax = 0
getMax = (arr) => {let max = arr[0]; for (let i = 0; i < arr.length; i++) { if (max <  arr[i]){max = arr[i];}}{return max}};
// console.log(getMax(dataSet))

// Function for getRange
// range = max-min
let getRange = 0;
getRange = (arr) => {let range = 0; range = getMax(arr) - getMin(arr); return range};
// console.log(getRange(dataSet))

// Function for getEvens/getOdds
// create empty array, evenNumbers
// loop through dataSet to find evens/odds
// push them into an empty array
// output the array into the main global area so that function can access
// confirm code works

let getEvens = []
getEvens = (arr) => {let evens = []; for (let i = 0; i < arr.length; i++){if (arr[i] % 2 === 0){evens.push(arr[i])};} return evens};
// console.log(getEvens(dataSet))

let getOdds = []
getOdds = (arr) => {let odds = []; for (i = 0; i < arr.length; i++) {if (arr[i] % 2 !== 0) {odds.push(arr[i])};} return odds};
console.log(getOdds(dataSet))