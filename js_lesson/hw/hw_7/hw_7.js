
function Calculator(){

    this.read = function read() {
        this.firstValue = getDigits("Enter first value: ");
        this.secondValue = getDigits("Enter second value: ");
    }

    this.sum = function sum() {
        return this.firstValue + this.secondValue;
    }

    this.mul = function mul() {
        return this.firstValue * this.secondValue;
    }
    function getDigits(message) {

        let first = null;
        while (Number.isNaN(first) || first === null) {
            first = Number(prompt(message));
        }
        return first;
    }
}

const calculator = new Calculator();
calculator.read();
console.log(calculator);

console.log(calculator.sum())
console.log(calculator.mul())