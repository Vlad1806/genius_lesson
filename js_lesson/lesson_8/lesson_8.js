


// for (let i = 0; i<document.body.childNodes.length; i++){
//    
//     console.log(document.body.childNodes[i]);
// }

//
// let elem = document.getElementById("element");
//
// elem.style.background = "green"
// console.log(elem);


// let elements = document.querySelectorAll("ul>li:last-child");
//
// for (element of elements){
//     console.log(element);
// }


// let elements = document.querySelector("li");
// console.log(elements);

// let element = document.getElementsByTagName("div");
// console.log(element);

//
// let testHidden = document.getElementById("textHidden");
//
// testHidden.hidden = false;
//
//
// let message = document.getElementById("message");
// console.log(message.value);


// let text = document.querySelector(".text-message");
// console.log(text.textContent)

//
// let text = document.querySelector(".text-message");
//
// text.textContent = "Bye World!!!";
// console.log(text.textContent)



// let btn = document.querySelector(".button");

// btn.style.backgroundColor = "aqua";



// let pById = document.getElementById("p_text");
// console.log(pById.classList);
// console.log(pById.classList.contains("red"));
// pById.classList.remove("red");
// console.log(pById.classList);
// console.log(pById.classList.contains("red"));
// // let p = document.querySelector()
//
// pById.classList.add("newClass");
// console.log(pById.classList);


// let image = document.querySelector(".image");
// console.log(image.hasAttribute("src"));
// console.log(image.getAttribute("src"));
//
// image.removeAttribute("width");
// image.removeAttribute("height");


//
// const item = document.createElement("a")
// item.href = "#";
// item.classList.add("btn");
// item.textContent = "3";
//
// const nav = document.querySelector(".menu");
// nav.appendChild(item);
//
// const heading = document.createElement("h1");
// heading.textContent = "Hello World";
//
// const container = document.querySelector(".container");
// container.insertBefore(heading, nav);


// nav.removeChild(item);//old method for all brausers

// item.remove();



//
// const text = document.querySelector(".text");
// const parent = document.querySelector(".parent");
//
// const clone = text.cloneNode(true);
//
// parent.appendChild(clone);


// const container = document.querySelector(".container");
//
// const text = `<p>Sorry</p>`;
//
// container.innerHTML += text;


// let list = document.querySelector("#list");
// list.insertAdjacentHTML("beforebegin", "<p>beforebegin</p>");
// list.insertAdjacentHTML("afterBegin", "<li>afterBegin</li>");
// list.insertAdjacentHTML("beforeend", "<li>beforeend</li>");
// list.insertAdjacentHTML("afterend", "<p>afterend</p>");