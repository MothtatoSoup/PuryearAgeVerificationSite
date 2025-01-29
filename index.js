"use strict";

const userAgeInput = document.getElementById("myInput");
const userSubmit = document.getElementById("myButton");
const userResult = document.getElementById("myResult");

let age;

userSubmit.onclick = function() {
    age = userAgeInput.value;
    age = Number(age);
    if (age > 200){
        document.getElementById("myResult").textContent = `Wow. You are the oldest person on earth. What wisdom do you hold?`;
    } else if (age >= 100){
        document.getElementById("myResult").textContent = `Wow you're old. Potentially the eldest person on earth`;
    } else if (age <= 99){
        document.getElementById("myResult").textContent = "How is life so far?";
    }  else if (age == 0){
        document.getElementById("myResult").textContent = `You're a baby. How are you using this?`;
    }  else if (age < 0){
        document.getElementById("myResult").textContent = `Erm you aren't even born yet`;
    }
}