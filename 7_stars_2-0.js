"use strict";

const screen = document.querySelector("body").getBoundingClientRect();
const container = document.getElementById("stars");

// create (at least) 200 stars as div.star and append each one to the #stars.
for (let i = 0; i < 200; i++) {
  const star = document.createElement("div");
  star.className = "star";
  container.appendChild(star);
}

function animateStar(star) {
    // **** Set random animation properties **** 
    const endX = (Math.random() - 0.5) * screen.width * 2;
    const endY = (Math.random() - 0.5) * screen.height * 2;
    const animatioDuration = Math.random() * 5000;
    const animationOpacity = Math.random() * 1;
    const animationScale = Math.floor(Math.random() * 5);

    // Generate a random color code
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // Set the background-color property of the div to the random color
    star.style.backgroundColor = "#" + randomColor;

    // **** define keyframes with random values **** 
    const keyframes = [
        {
            transform: `translate(${star.offsetLeft}px, ${star.offsetTop}px), scale(1)`,
            opacity: animationOpacity,
        },
        {
          transform: `translate(${endX}px, ${endY}px) scale(${animationScale})`,
          opacity: animationOpacity,
        },
      ];

// Define properties with some random values
const properties = {
    duration: animatioDuration,
    easing: "ease-in-out",
    iterations: 1,
    direction: "alternate",
  };
const animation = star.animate(keyframes, properties);

// When the animation finishes, create a new one with random properties
animation.addEventListener("finish", () => {
animateStar(star);
  });
}

document.querySelectorAll(".star").forEach((star) => {
  // Start the initial animation
  animateStar(star);
});



