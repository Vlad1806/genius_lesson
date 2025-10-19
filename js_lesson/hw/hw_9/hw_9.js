const text = document.getElementById("text");
const firstButton = document.getElementById("task1Btn");
firstButton.addEventListener("click", () => text.hidden = true);


const secondBtn = document.getElementById("task2Btn");
secondBtn.addEventListener("click", () => secondBtn.hidden = true);


const parent = document.querySelector(".task3parent");
const children = parent.children;

parent.addEventListener("click", () => {
    for (child of children) {
        let classList = child.classList;
       classList.toggle("hidden");
    }
});


const caretsElements = document.getElementsByClassName("caret");

for (let i = 0; i < caretsElements.length; i++) {
    

    caretsElements[i].addEventListener("click", function () {
       this.parentElement.querySelector(".nested").classList.toggle("active");
       this.classList.toggle("caret-down");
    });
}
