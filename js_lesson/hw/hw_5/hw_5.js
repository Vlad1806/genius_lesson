

const george = {
    name: "George",
    speciality: "Software engineer",
    avgMark: 7.4,
    missingLesson: 3
};

const sasha = {
    name: "Sasha",
    speciality: "Html developer",
    avgMark: 6.1,
    missingLesson: 5
}

const slava = {
    name: "Slave",
    speciality: "Css developer",
    avgMark: 5.1,
    missingLesson: 8
}

const printStudentInfo = function () {
    
    console.group("Student info:");
    console.log(`Name: ${this.name}`);
    console.log(`Speciality: ${this.speciality}`);
    console.log(`AvgMark: ${this.avgMark}`);
    console.log(`MissingLesson: ${this.missingLesson}`);
    console.groupEnd();
}

//Task 1
printStudentInfo.bind(sasha)();

printStudentInfo.call(sasha);

printStudentInfo.apply(george);



//Task 2
document.getElementById("html").addEventListener("click", 
        () => alert("HTML (HyperText Markup Language) - это язык разметки, " +
            "используемый для создания и структурирования веб-страниц."));

document.getElementById("css").addEventListener("click", 
        () => alert("CSS (Cascading Style Sheets) - это язык таблиц стилей," +
            " используемый для оформления и стилизации веб-страниц."));


//Task 3
const store = function (productName, cost, quantity){
    return `Название товара: ${productName}, стоимость: ${cost * quantity}`;
}

console.log(store("banana", 30, 4.5));
console.log(store("cherry", 58, 1.3));
console.log(store("orange", 89, 3.4));