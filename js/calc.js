"use strict";

let buttons = document.getElementsByClassName("button");
let add = document.getElementById("add");
let substract = document.getElementById("substract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let result = document.getElementById("result");
let display = document.getElementById("display");
let displayValue;
let operationValue;

for(let button of buttons){
    button.addEventListener("click", function(){
        display.textContent += button.value;
    }, false);
}

add.addEventListener("click", function(){
    displayValue = +display.textContent;
    display.textContent = null;
});

result.addEventListener("click", function(){
    display.textContent = ((displayValue * 10) + (display.textContent * 10)) / 10;
});