"use strict";

const screen = document.querySelector("body").getBoundingClientRect();
const container = document.getElementById("stars");

// create (at least) 200 stars as div.star and append each one to the #stars.
for (let i = 0; i < 200; i++) {
  const star = document.createElement("div");
  star.className = "star";
  container.appendChild(star);
}

function animateStar(star){
    // **** Set random animation properties **** 
    const startX = screen.width / 2;
    const startY = screen.height / 2;
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
    transform: `translate(${startX}px, ${startY}px), scale(${animationScale}`,
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
    }
    
    const animation = star.animate(keyframes,properties);
    
    animation.addEventListener("finish", () => {
    animateStar(star);
  });
}

// when the clicked function is called, it starts animating all of the existing stars on the page from their current positions with their existing animations. This causes the stars to continue their current animation trajectory from their current position, rather than starting a new animation from the center of the screen.
// function clicked(){
//     console.log("clicked");
//     document.querySelectorAll(".star").forEach((star) => {
//     // Start the initial animation
//     animateStar(star);});
// }

// we can modify the clicked function to remove all existing stars from the page and re-create them with new animations starting from the center of the screen. Here's the modified clicked function. This is different than wath peter asked, we are not supposed to recreate the divs. But it's funnier!
function clicked() {
    console.log("clicked");
    // Remove all existing stars from the container
    container.innerHTML = "";
    // Recreate 200 new stars and animate them from the center of the screen
    for (let i = 0; i < 200; i++) {
      const star = document.createElement("div");
      star.className = "star";
      container.appendChild(star);
      // Start the initial animation from the center of the screen
      animateStar(star);
    }
  }

document.querySelector("body").removeEventListener("click", clicked);
document.querySelector("body").addEventListener("click", clicked);


