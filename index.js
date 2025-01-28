"use strict";

document.getElementById("myButton").addEventListener("click", function (age) {
    let age = document.getElementById("userAge").value;
    age = Number(age);
    if (age > 200){
        document.getElementById("userResult").textContent = `Wow. You are the oldest person on earth. What wisdom do you hold?`;
    } else if (age >= 100){
        document.getElementById("userResult").textContent = `wowie you're olddd. Potetially the eldest person on earth`;
    } else if (age <= 99){
        document.getElementById("userResult").textContent = `How is life so far?`
    }  else if (age == 0){
        document.getElementById("userResult").textContent = `You're a baby. How are you using this?`;
    }  else if (age < 0){
        document.getElementById("userResult").textContent = `Erm you aren't even born yet`;
    }
});