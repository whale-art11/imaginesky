
let greeting = document.getElementById("greeting");

greeting.textContent = "this is new text";

let greenText = document.getElementsByClassName("greenText");

for (let i = 0; i < greenText.length; i++) {
    greenText[i].style.color = "green";
}

function turnRed() {
    let listItems = document.getElementsByTagName("li");

    for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.color = "red";
    }
}
