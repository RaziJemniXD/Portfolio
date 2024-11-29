const pagesContainer = document.querySelector(".pages"); // Target the .pages container
const translateAmount = 100; // Percentage for sliding
let translate = 0;

slide = (index) => {
    // Calculate the new translate value for the .pages container
    translate = -index * translateAmount;
    pagesContainer.style.transform = `translateX(${translate}%)`;
};

document.getElementById("nav-main").addEventListener("click", () => slide(0));
document.getElementById("nav-about").addEventListener("click", () => slide(1));
document.getElementById("nav-projects").addEventListener("click", () => slide(2));
document.getElementById("nav-associations").addEventListener("click", () => slide(3));
document.getElementById("nav-this").addEventListener("click", () => slide(4));