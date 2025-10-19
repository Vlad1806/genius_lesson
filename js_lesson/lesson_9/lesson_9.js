const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const btn5 = document.querySelector("#btn5")
const btn6 = document.querySelector("#btn6")


btn1.addEventListener("click", () => console.log("click"));
btn2.addEventListener("contextmenu", () => console.log("contextMenu"));
btn3.addEventListener("mouseover", () => console.log("mouseover"));
btn4.addEventListener("mouseout", () => console.log("mouseout"));
btn5.addEventListener("mousedown", () => console.log("mousedown"));
btn6.addEventListener("mousemove", () => console.log("mousemove"));


const btn7 = document.querySelector("#btn7")
const btn8 = document.querySelector("#btn8")
btn7.addEventListener("keyup", () => console.log("keyup"));
btn8.addEventListener("keydown", () => console.log("keydown"));


const addBtn = document.querySelector("#addBtn")
const removeBtn = document.querySelector("#removeBtn")
const clickMeBtn = document.querySelector("#clickMeBtn")

const handleClick = () => {
    console.log("Hello");
}

addBtn.addEventListener("click", () => {
    clickMeBtn.addEventListener("click", handleClick);
});
removeBtn.addEventListener("click", () => {
    clickMeBtn.removeEventListener("click", handleClick);
});

const infoClick = (event) => {
    console.log("Event", event.target);
};
const clickInfoBtn = document.querySelector("#clickInfoBtn")
clickInfoBtn.addEventListener("click", infoClick);


const form = document.querySelector(".form");
const loginInput = form.querySelector("input[type='text']");
const passwordInput = form.querySelector("input[type='password']");

const handleSubmit = (event) => {
    event.preventDefault();
    const login = loginInput.value;
    const password = passwordInput.value;
    console.log(`Login: ${login}, password: ${password}`);

    form.reset();
}
form.addEventListener("submit", handleSubmit);


const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const item = document.querySelector("#item");


// parent.addEventListener("click", () => console.log("Click parent"));
// child.addEventListener("click", () => console.log("Click child"));
// item.addEventListener("click", () => console.log("Click item"));


// const handleClickParent = event => console.log("Event: ", event.target);
//
// parent.addEventListener("click", handleClickParent);


const itemClick = (event) => {
    console.log("item stop");
    event.stopPropagation();
}

const childClick = (event) => {
    console.log("child stop");
    event.stopPropagation();
}

const parentClick = (event) => {
    console.log("parent stop");
    event.stopPropagation();
}

parent.addEventListener("click", parentClick);
child.addEventListener("click", childClick);
item.addEventListener("click", itemClick);


const nav = document.querySelector(".nav");
nav.addEventListener("click", handleClickList);

function handleClickList(event) {
    const checkClass = nav.querySelector("li.active");
    if (checkClass) {
        event.target.classList.remove("active")
    } else {
        event.target.classList.add("active");
    }
}


const ball = document.querySelector(".ball");
let isDragging = false;
let offsetX, offsetY;
ball.addEventListener("mousedown", (event) => {

    isDragging = true;

    offsetX = event.clientX - ball.getBoundingClientRect().left;
    offsetY = event.clientY - ball.getBoundingClientRect().top;

    ball.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (event) => {

    if (isDragging) {
        ball.style.left = `${event.clientX - offsetX}px`;
        ball.style.top = `${event.clientY - offsetY}px`;
    }
});

document.addEventListener("mouseup", () => {

    isDragging = false;
    ball.style.cursor = "pointer"
});