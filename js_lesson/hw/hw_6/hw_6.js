class Abonent{

    constructor(name, phoneNumber) {
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
    
    set setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    
    get getAbonentInfo() {
        return `Abonent: ${this.name}, with phoneNumber: ${this.phoneNumber}`;
    }
}


const abonent1 = new Abonent("abonent1");
abonent1.setPhoneNumber = "4567788";
const abonent2 = new Abonent("abonent2");
abonent2.setPhoneNumber = "1234567";
const abonent3 = new Abonent("abonent3");
abonent3.setPhoneNumber = "7654890";

console.log(abonent1.getAbonentInfo);
console.log(abonent2.getAbonentInfo);
console.log(abonent3.getAbonentInfo);