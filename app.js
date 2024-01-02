//1
let positiveIntiger = prompt(`Put a positive integer.`);
document.write(`number: ${positiveIntiger}<br>`);
document.write(`round off value: ${Math.round(positiveIntiger)}<br>`);
document.write(`floor value: ${Math.floor(positiveIntiger)}<br>`);
document.write(`ceil value: ${Math.ceil(positiveIntiger)}<br><br>`);

//2
let negetiveIntiger = prompt(`Put a negetive integer.`);
document.write(`number: ${negetiveIntiger}<br>`);
document.write(`round off value: ${Math.round(negetiveIntiger)}<br>`);
document.write(`floor value: ${Math.floor(negetiveIntiger)}<br>`);
document.write(`ceil value: ${Math.ceil(negetiveIntiger)}<br><br>`);

//3
let number = prompt(`put a number.`);
if (number.slice(0, 1) == '-') {
    let newNum = number.slice(1);
    document.write(`The absolute value of ${number} is ${newNum}<br><br>`);
} else {
    document.write(`The absolute value of ${number} is ${number}<br><br>`);
}

//5

let randNum = Math.random();
let randNumRounded = Math.round(randNum);
// console.log(randNum);
if (randNumRounded === 1) {
    document.write(`random coin value: Heads<br><br>`);
} else {
    document.write(`random coin value: Tales<br><br>`);
}

let randNum2 = Math.random();
let randNum2Rounded = Math.round(randNum2);
// console.log(randNum);
if (randNum2Rounded === 1) {
    document.write(`random coin value: Heads<br><br>`);
} else {
    document.write(`random coin value: Tales<br><br>`);
}

//7
var weight = prompt(`Enter your weight in kilograms`, `50kgs`);
var weightNum;
for (var i = 0; i < weight.length; i++) {
    if (weight.slice(i, i + 3) === 'kgs' || weight.slice(i, i + 3) === 'kil') {
        weightNum = weight.slice(0, i);
        document.write('The weight of user is ' + weightNum + ' ' + 'kilograms<br>');
        break;
    }
}
if (weight > 0 && weight < 1000) {
    document.write('The weight of user is ' + weight + ' ' + 'kilograms<br>');
}

//8
let secretNum = 4;
let userNum = parseInt(prompt(`Enter a number between 1 and 10`));
if (userNum === secretNum) {
    alert(`Congratulations!`);
} else {
    alert(`Try again!`);
}