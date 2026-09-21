const words = [
    "CSE STUDENT",
    "WEB DEVELOPER",
    "JAVA LEARNER",
    "PROBLEM SOLVER",
    "FUTURE ENGINEER"
];

let wordIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeEffect() {

    if (charIndex < words[wordIndex].length) {

        typing.textContent +=
            words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 80);

    } else {

        setTimeout(deleteEffect, 1500);

    }

}

function deleteEffect() {

    if (charIndex > 0) {

        typing.textContent =
            words[wordIndex].substring(
                0,
                charIndex - 1
            );

        charIndex--;

        setTimeout(deleteEffect, 40);

    } else {

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        setTimeout(typeEffect, 300);

    }

}

typeEffect();


// MOUSE GLOW

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});
