//procedure style
// const sum = 20_000;
// const month = 12;
// const payment = 1000;
//
//
// const credit = (sum, date, payment) => {
//     return  sum + payment * date
// }

// console.log(credit(sum, month, payment));


//OOP

// const  credit = {
//     sum: 20_000,
//     month: 12,
//     payment: 1000,
//     result() {
//     return this.sum + this.payment * this.month;
//     }
// }
//
// console.log(credit.result())


class Bank {

    static type = "Privat";

    constructor(options) {
        this.sum = options.sum;
        this.month = options.month;
        this.payment = options.payment;
    }

    credit() {
        const credit = this.sum + this.payment * this.month;
        console.log(`${MonoBank.type} credit: ${credit}`)
        return credit;
    }
}

// const userBank = new Bank({
//     sum: 30000,
//     month: 5,
//     payment: 500
// });
//
// console.log(userBank.credit());
// console.log(Bank.type);


class MonoBank extends Bank {

    static type = "Mono"

    constructor(options) {
        super(options);
        this.card = options.card;
    }

    credit() {
        const credit = (this.sum + this.payment * this.month) + 50;
        console.log(`${MonoBank.type} credit: ${credit}`)
        return credit;
    }
}

const monoBank = new MonoBank(
    {
        sum: 30000,
        month: 5,
        payment: 500,
        card: true
    }
)
console.log(monoBank.card);
monoBank.credit()
console.log(MonoBank.type);


class User {

    firstName = "";
    lastName = "";
    age = "";
    city = "";

    constructor(props) {
        this.name = props.name;
    }

    set name(newName) {
        const nameRow = newName.split(" ")
        this.firstName = nameRow[0];
        this.lastName = nameRow[1];
    }

    get name() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const superUser = new User({name: "Super User"});
const guestUser = new User({name: "Guest User"});
const managerUser = new User({name: "Manager User"});

console.log(superUser);
console.log(guestUser);
console.log(managerUser);


const a = {
    x: 1,
    y: 2
}

const b = Object.create(a);

console.log(b.hasOwnProperty("y"));


// const manager = function (name, sales) {
//     this.name = name;
//     this.sales = sales;
//    
//     // this.sale = function (){
//     //     this.sales +=1;
//     // }
// }
// manager.prototype.sale = function (){
//     this.sales += 1;
// }
//
// const kostya = new manager("Kostya", 5);
// const andrew = new manager("Andrew", 15);
//
// console.log(kostya);
// console.log(kostya.sales);
// kostya.sale();
// console.log(kostya.sales);
//
// console.dir(manager)


class CoffeeMachine {

    _water = 0;
    #waterLimit = 500;
    
    constructor(power) {
        this.power = power;
    }

    get limit (){
        return this.#waterLimit;
    }
    set waterAmount(value) {
        if (value < 0) {
            value = 0;
        }
        this._water = value;
    }
}

let coffeeMachine1 = new CoffeeMachine(100);
console.log(coffeeMachine1);
coffeeMachine1.waterAmount = -20;
console.log(coffeeMachine1z);
