"use strict";

let buttons = document.getElementsByClassName("button");

for(let i = 0; i <= buttons.length; i++){
    document.getElementsByClassName("button")[i].addEventListener("click", function(){
        document.getElementById("display").textContent = "test";
    });
}