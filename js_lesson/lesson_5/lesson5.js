
function test (n) {
    return function () {
        console.log(10 * n);
    }
}

const calc = test(50);
calc();


function hello(){
    console.log(this);
}

// hello();


const user = {
    name: "Ivan",
    city: "Odessa",
    sayHello: hello
};


user.sayHello();


document.querySelectorAll('p').forEach(k => k.onclick = hello);