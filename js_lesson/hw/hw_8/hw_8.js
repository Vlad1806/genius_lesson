const attributeName = "data-widget-name";
const element = document.querySelector(`[${attributeName}]`);
if (element) {
    const attribute = element.getAttribute(attributeName);
    console.log(attribute);
} else {
    console.log(`Element with attribute : ${attributeName} does not exist!`);
}

