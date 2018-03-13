"use strict";

let buttons = document.getElementsByClassName("button");
let add = document.getElementById("add");
let substract = document.getElementById("substract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let result = document.getElementById("result");
let display = document.getElementById("display");
let displayValue;
let flag;

for(let button of buttons){
    button.addEventListener("click", function(){
        display.textContent += button.value;
    }, false);
}

add.addEventListener("click", function(){
    operation();
    flag = "add";
});

substract.addEventListener("click", function(){
    operation();
    flag = "substract";
});

multiply.addEventListener("click", function(){
    operation();
    flag = "multiply";
});

divide.addEventListener("click", function(){
    operation();
    flag = "divide";
});

result.addEventListener("click", function(){
    switch(flag){
        case "add": 
            display.textContent = ((displayValue * 10) + (display.textContent * 10)) / 10;
            break;
        case "substract": 
            display.textContent = ((displayValue * 10) - (display.textContent * 10)) / 10;
            break;
        case "multiply": 
            display.textContent = ((displayValue * 10) * (display.textContent * 10)) / 100;
            break;
        case "divide": 
            display.textContent = ((displayValue * 10) / (display.textContent * 10));
            break;
    }
});

function operation(){
    displayValue = +display.textContent;
    display.textContent = null;
}