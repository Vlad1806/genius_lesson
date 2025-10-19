// class CircleBox {
//    
//     constructor(selector) {
//         this.$el = document.querySelector(selector);
//     }
//    
//     show(){
//         this.$el.style.display = "block" ;
//     }
//    
//     hide(){
//         this.$el.style.display = "none" ;
//     }
// }
//
// class CircleItem extends CircleBox{
//    
//     constructor(options) {
//         super(options.selector);
//        
//         this.$el.style.width = options.size + "px";
//         this.$el.style.height = options.size + "px";
//         this.$el.style.borderRadius = "50%";
//         this.$el.style.backgroundColor = options.color;
//     }
// }
//
// const CircleRed = new CircleItem({
//     selector: "#circleRed",
//     color: "red",
//     size: 50,
// });
// const CircleYellow = new CircleItem({
//     selector: "#circleYellow",
//     color: "yellow",
//     size: 80,
// });
// const CircleGreen = new CircleItem({
//     selector: "#circleGreen",
//     color: "green",
//     size: 30,
// });


// function Car(name, color) {
//     this.name = name;
//     this.color = color;
// }
//
// Car.prototype.message = function (){
//     console.log(`${this.name} is ${this.color} color`);
// };
// Car.prototype.start = function (){
//     console.log(`${this.name} is start`);
// };
//
// const BMW = new Car("BMW", "black");
// const audi = new Car("Audi", "grey");


let message = {
    messageHello(){
        console.log(`Hello, ${this.name}`)
    },
    messageBye(){
        console.log(`Bye, ${this.name}`)
    }
}

class User{
    constructor(name) {
        this.name = name;
    }
}

Object.assign(User.prototype, message);


const userIven = new User("Ivan");
userIven.messageHello();
userIven.messageBye();

let height = 33;
console.log(height ?? 100);