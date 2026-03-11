// keyboard.js

function addNumber(num) {
    const input = document.querySelector("#myCalculator #calcInput");
    if(input.value.length < 8) {
        input.value += num;
    }
}

function enterNumber() {
    const input = document.querySelector("#myCalculator #calcInput");
    if(input.value === "") {
        alert("Iltimos raqam kiriting!");
        return;
    }
    alert("Siz kiritdingiz: " + input.value);
    input.value = "";
}

function enterNumber() {

    const input = document.querySelector("#calcInput");
    const table = document.querySelector("#binaryTable tbody");

    if(input.value === ""){
        alert("Raqam kiriting");
        return;
    }

    const decimal = parseInt(input.value);

    if(decimal > 255){
        alert("8 bit faqat 0 - 255 gacha bo'ladi");
        return;
    }

    // 8 bitga o'tkazish
    const binary = decimal.toString(2).padStart(8,'0');

    // yangi qator yaratish
    const row = document.createElement("tr");

    const col1 = document.createElement("td");
    col1.textContent = decimal;

    const col2 = document.createElement("td");
    col2.textContent = binary;

    row.appendChild(col1);
    row.appendChild(col2);

    table.appendChild(row);

    input.value = "";
}



// 🔹 Real keyboard ishlashi
const input = document.querySelector("#calcInput");

document.addEventListener("keydown", function(event) {

    const key = event.key;

    // faqat raqamlar
    if(key >= "0" && key <= "9") {
        event.preventDefault();
        addNumber(key);
    }

    // backspace
    if(key === "Backspace") {
        event.preventDefault();
        deleteLast();
    }

    // enter
    if(key === "Enter") {
        event.preventDefault();
        enterNumber();
    }

});
// 🔹 Yangi funksiya: oxirgi belgi o'chirish
function deleteLast() {
    const input = document.querySelector("#myCalculator #calcInput");
    input.value = input.value.slice(0, -1);
}