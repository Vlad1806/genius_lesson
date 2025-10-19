//
// let promise = fetch(
//     "https://api.monobank.ua/bank/currency"
// );


// async function a(){
//     return true;
// }
// a().then((data) => console.log(data));


// async function a(){
//     let prom = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Hello"), 3000);
//     });
//    
//     let result = await prom;
//     console.log(result);
// }
// a();

//error in not asyn funct

// const monoCurrency = async () => {
// 
//     let response = await fetch("https://api.monobanok.ua/bank/currency");
//     if (response.ok){
//         console.log("OK");
//         console.log("Response", response.json());
//     } else {
//         console.log("error: ", response.status);
//     }
//     return response.json();
// };
// monoCurrency().then(monoData => console.log(monoData));

const headers = new Headers({
    "Content-type": "application/json",
    "X-Custom-Header": "custom value"
});
console.log(headers.has("Content-type"));


// const postTest = async () => {
//     let ussr = {
//         name: "Ivan",
//         city: "Kiev"
//     };
//
//     let response = await fetch("url", {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json",
//         },
//         body: ussr,
//     });
// }
//
// postTest().catch(error => {
//     console.log(error);
// });


// try {
//     console.log("Start");
//     a;
//     console.log("Finish");
// } catch (err) {
//     console.log("Error", err);
// }


// try {
//    setTimeout(function (){
//        da;
//        console.log("d");
//    }, 1000);
// } catch (err) {
//     console.log("Error", err);
// }


// setTimeout(function (){
//     try {
//         console.log("OK");
//         da;
//     } catch (err) {
//         console.log("Error", err);
//     }
// }, 1000);

// let json = `{"name": "ann"}`;
//
// try {
//     let user = JSON.parse(json);
//     console.log("User: ", user);
//     if (!user.city) {
//         throw new SyntaxError("Does not contain city");
//     }
// } catch (err) {
//     console.log("Error parse json", err.message);
// } finally {
//     console.log("Finally");
// }


let socket = new WebSocket(
    'wss://javascript.info/article/websocket/demo/hello'
);

socket.onopen = function (event) {
    console.log("Connection is set");
    console.log(event);
    socket.send("Helllllo");
    socket.send("Helllllo2");
};
socket.onmessage = function (event) {
    console.log("Get message", event.data);
};
socket.onclose = function (event) {

    if (event.wasClean) {
        console.log("Connection is closed", event.code);
    } else {
        console.log("Interrupted")
    }
};

socket.onerror = function (err) {
        console.log(err);
};