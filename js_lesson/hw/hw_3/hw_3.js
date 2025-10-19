const fruits = [
    {id: 0, name: "Apple"},
    {id: 1, name: "Tomat"},
    {id: 2, name: "Cherry"},
    {id: 3, name: "Orange"}
];


const map = fruits.map(fruit => fruit.name);
console.log("Task 1: ", map);

const arr = [];
for (const qq of fruits) {
    arr.push(gg(qq));
}
function gg(obj){
    return obj.name;
}
console.log(arr);

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Task 2: " + digits.filter(item => item % 2 === 0));

//Task 3
let i = 0;
while (i < 5) {
    console.log(`цыфза ${i}`);
    i++;
}

//Task 4

let prompt1 = 1;
while (prompt1 < 100) {

    const value = prompt("Enter number > 100");
    if (value.length === 0) {
        break;
    }
    prompt1 = Number(value);
}

//Task 5
const girl = [
    {age: 23, name: "Оля"},
    {age: 29, name: "Аня"},
    {age: 10, name: "Юдя"},
    {age: 20, name: "Катя"},
]

console.log("Task 5: " + girl.map(m=> m.age).reduce((sum,item) => sum + item) / girl.length);