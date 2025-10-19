
//Task 1
function  checkAge(age) {
    return Number(age) > 18 ? true : confirm('Do you have parents permission?');
}

console.log("Task 1 - 17: ", checkAge(17));
console.log("Task 1 - 19: ", checkAge(19));


//Task2
const minValue = (a, b) => Math.min(a, b);


console.log("Task 2 - 12, 13 min: ", minValue(12, 13));
console.log("Task 2 - 10, 9 min: ", minValue(9, 10));


//Task3

const ask = (question, yes, no) => confirm(question) ? yes() : no();

const yes = () =>  alert("Ви погодились.");
const no = () =>  alert("Ви скасували виконання.");

ask("Ви згодні?", yes, no);