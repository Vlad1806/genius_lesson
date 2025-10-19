let a = 10;
console.log(a);
a = 20;
console.log(a);


const b = 15;
console.log(b);


let k;
console.log(k);

let k2 = null;
console.log(k2);


console.log(2 + "22");
console.log("" / 3);

let user = {
    name: "Vlad",
    age: 20,
    isAdmin: true
}

for (let hh in user) {

    let userValue = user[hh];
    console.log(hh + " " + userValue + " " + typeof userValue)
    console.log(userValue)
}
