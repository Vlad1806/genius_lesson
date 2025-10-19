function printNumbers(from, to) {

    let current = from;

    function printNext() {
        console.log(current);
        if (current < to) {
            current++;
            setTimeout(() => printNext(), 1000);
        }
    }

    setTimeout(printNext, 1000);
}

function printNumbers2(from, to) {
    let current = from;
    let intervalId = setInterval(() => {
        console.log(current);
        if (current === to) {
            clearInterval(intervalId);
        }
        current++;
    }, 1000);
}

// printNumbers(1, 10);
// printNumbers2(1, 10);


// function delay(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms);
//         return ms;
//     });
// }
//
// delay(3000)
//     .then((result) => {
//         alert('виконалось через 3 секунди');
//         console.log(result);
//         return new Promise(resolve => {
//             setTimeout(resolve, result);
//             return result;
//         });
//     })
//     .then((result) => setTimeout(() => console.log("Happy"), result))
//     .finally(() => console.log("Finally"))
// ;


console.log("request date ...");

// setTimeout(() => {
//     console.log("Preparing data");
//
//     const backEndData = {
//         server: "aws",
//         port: 2000,
//         status: "working"
//     }
//
//
//     setTimeout(() => {
//         backEndData.modified = true;
//         console.log("Data received", backEndData);
//     }, 2000)
// }, 2000);

// const promiseFunc = function (resolved, reject) {
//
//     setTimeout(() => {
//         console.log("Preparing data");
//         const backEndData = {
//             server: "aws",
//             port: 2000,
//             status: "working"
//         };
//         resolved(backEndData);
//     }, 2000);
// };
//
// const p = new Promise(promiseFunc);
// let gg = {};
//
// p.then((data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             // console.log("Data received", data);
//             reject(data);
//         }, 2000)
//         console.log("Promise resoled");
//     })
// })
//     .then(clientData => {
//         gg = clientData;
//         console.log("Data received", clientData);
//         return clientData;
//     }).then(data => {
//     console.log("Modified", data);
// })
//     .catch(err => console.error("Error ", err))
//     .finally(() => "Finally");
//
// setTimeout(() => console.log("GG", gg), 10000);


const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
};

// sleep(2000).then(() => console.log("after 2 sec"));
// sleep(3000).then(() => console.log("after 3 sec"));


Promise.all([sleep(2000), sleep(10000)])
    .then(() => {
        console.log("all promises")
    });

Promise.race([sleep(2000), sleep(10000)])
    .then(()=> {
        console.log("Race promises")
    });