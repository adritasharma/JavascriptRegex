// 1. Check if a string contains substring

let test1String = 'Hello Rorld';
const test1Regex = /world/;

let result1Match = test1Regex.test(test1String);

console.log(result1Match)


// 2. Check if a string contains substring - IGNORE CASE

let test1String = 'Hello World';
const test1Regex = /world/i;

let result1Match = test1Regex.test(test1String);

console.log(result1Match)