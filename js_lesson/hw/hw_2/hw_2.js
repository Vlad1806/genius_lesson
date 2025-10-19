const prompt1 = prompt("Task 1 - Enter digits: ");
let task1 = Number(prompt1) > 0;
console.log(`Task 1 - result: ${task1}`);

const prompt2 = prompt("Task 2 - Enter text: ");
let task2 = prompt2 === 'test';
console.log(`Task 2 - result: ${task2}`);

const prompt3 = prompt("Task 3 - Enter digits: ");
const value3 = Number(prompt3);
let task3 = value3 > 10 ? value3 - 5 : value3 + 5;
console.log(`Task 3 - result: ${task3}`);

getMonthNameValue();
threeDigits();

function getMonthNameValue() {
    const prompt4 = prompt("Task 4 - Enter month number: ");
    const value4 = Number(prompt4);
    if (value4 < 1 || value4 > 12) {
        alert("Invalid month value");
        getMonthNameValue();
    } else {
        const date = new Date();
        date.setMonth(value4 - 1);
        console.log(`Task 4 - result: ${date.toLocaleString('en-US', {month: "long"})}`);
    }
}

function threeDigits() {
    const prompt5 = prompt("Task 5 - Enter 3 digits value '(f.e.: 123)': ");
    const value5 = Number(prompt5);
    if (Number.isNaN(value5) || value5 < 100 || value5 > 999) {
        alert("Invalid value");
        threeDigits();
    } else {
        let result = 0;
        for (let i = 0; i < prompt5.length; i++) {
            result += Number(prompt5[i]);
        }
        console.log(`Task 5 - result: ${result}`);
    }
}



