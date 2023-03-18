"use strict";
// same as previous versions, but I've used closure and "event.client" to get the position of my click and use it ad initial position for the divs
const screen = document.querySelector("body").getBoundingClientRect();
const container = document.getElementById("stars");

function clicked(event) {
  const x = event.clientX;
  const y = event.clientY;

  container.innerHTML = "";
  for (let i = 0; i < 200; i++) {
    const star = document.createElement("div");
    star.className = "star";
    container.appendChild(star);
    animateStar(star, x, y);
  }

  function animateStar(star, x, y) {
    // **** Set random animation properties ****
    const endX = (Math.random() - 0.5) * screen.width * 2;
    const endY = (Math.random() - 0.5) * screen.height * 2;
    const animatioDuration = Math.random() * 5000;
    const animationOpacity = Math.random() * 1;
    const animationScale = Math.floor(Math.random() * 3);

    // Generate a random color code and set the background-color property of the div to the random color
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    star.style.backgroundColor = "#" + randomColor;

    // **** define keyframes with random values ****
    const keyframes = [
      {
        transform: `translate(${x}px, ${y}px) scale(${animationScale})`,
        opacity: animationOpacity,
      },
      {
        transform: `translate(${endX}px, ${endY}px) scale(${animationScale})`,
        opacity: animationOpacity,
      },
    ];

    // **** define properties with some random values ****
    const properties = {
      duration: animatioDuration,
      easing: "ease-in-out",
      iterations: 1,
      direction: "alternate",
    };

    const animation = star.animate(keyframes, properties);

    animation.addEventListener("finish", () => {
      animateStar(star, x, y);
    });
  }
}

document.querySelector("body").removeEventListener("click", clicked);
document.querySelector("body").addEventListener("click", clicked);
