// setTimeout(() => console.log("2"), 1);
// console.log("3");
// console.log("4");
//
//
// const hello = () =>{
//     console.log("hello");
// }
//
// const timeout = setTimeout(hello, 1000);
// clearTimeout(timeout);


// const hello = () =>{
//     console.log("hello");
// }
//
// const setInt = setInterval(hello, 1000);


const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");


let time = null;

startBtn.addEventListener("click", () => {
    time = setInterval(() => {
        console.log("123");
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(time);
    console.log("stop");
});


// const  a = {
//     classic(){
//         setTimeout(function () {
//             console.log(`${this}, classic in obj`);
//         });
//     },
//    
//     arr(){
//         setTimeout(() =>{
//             console.log(`${this}, arr in obj`);
//         });
//     }
// }
//
// a.classic();
// a.arr();

// const data = new Date(2024, 4, 10, 10, 0, 0, 0);
// console.log(data);

// const unixDate = new Date(1000);
// console.log(unixDate);
//
//
// const newUnixDate = Date.now();
// console.log(newUnixDate);


// const date = new Date(2024, 5, 24, );
//
// console.log("Day: " + date.getDate());
// console.log("Month: " + (date.getMonth() + 1));
// console.log("Full year: " + date.getFullYear());
//
//
// const ukraine = date.toLocaleString("Uk-uk");
// console.log(ukraine);


// let promise = new Promise(function (resolve, reject){
//         setTimeout( () => resolve("resolve"), 1000);
//         setTimeout( () => reject("reject"), 1000);
// })
//     .then(resolve => console.log(resolve))
//     .finally(() => console.log("finally"));

// promise.then(
//     (resolve) => console.log(resolve),
//     (reject) => console.log(reject),
// );
//
// promise.catch(alert);

// function load (src) {
//     return new Promise(function (resolve, reject){
//        
//             let script = document.createElement("script");
//             script.scr = src;
//            
//             script.onload = () => resolve(script);
//             script.onerror = () => reject(new Error(`Error: ${script}`));
//            
//             document.head.append(script);
//         }
//     );
// }
//
// let prom = load(
//     "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
// );
//
// prom.then(
//     (script) => console.log(`Download ${script}`),
//     (error) => console.log(`Error ${error.message}`)
// ).finally(
//     () => console.log("Finally")
// );

new Promise(function (resolve, reject) {
    setTimeout(() => resolve(2), 1000);
})
    .then(function (result) {
        console.log(result);
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result + 5), 1000);
        });
    })
    .then(function (result) {
        console.log(result);
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result + 5), 1000);
        });
    })
    .then(function (result) {
        console.log(result);
    });


function test() {

    let k = 5;
    if (k > 3) {
        let k = 6;
        console.log(k);
    }
    console.log(k);
}

test();