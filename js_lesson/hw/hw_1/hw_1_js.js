let name = "Ivan";
let city = name;

console.log("1: " + city);

console.log("3:");
let olgaName = "olga";
console.log(`hello ${1}`);
console.log(`hello ${"name"}`);
console.log(`hello ${olgaName}`);

let a = "5";
let a1 = Number.parseInt(a);
let b = "13cvb";
let b1 = Number.parseInt(b);
let c = "12.9sxdcfgv";
let c1 = Number.parseFloat(c);


console.log("3:");
console.log(a1 + " " + typeof a1);
console.log(b1 + " " + typeof b1);
console.log(c1 + " " + typeof c1);

console.log("4:" + " " + (0.1 + 0.2).toFixed(1))

let values = [20, 10, 50, 40];
console.log("5: " + Math.max(values));

console.log("6: " + Math.random() * (4 - 2) + 2);

const message = "Welcome to Bahamas!"
console.log("7: " + message.length);

console.log("8: " + message.toUpperCase());


const obj = {
    name: "Karl",
    age: 30,
    city: "Kiev"
};
console.log("9:")

console.log(obj);
delete obj.city
console.log(obj);

obj["like flowers"] = true;
console.log(obj);

console.log("10:")
for (const objKey in obj) {
    console.log(`${objKey} : ${obj[objKey]}`)
}

switch (5) {
    case 5: {
        console.log("hello");
        break;
    }
    case 4:
        console.log("hell");
    case 6: {
        console.log("4");
        break;
    }
}

