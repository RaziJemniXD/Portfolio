const pages = document.querySelectorAll(".page");

const translateAmount = 100; // Percentage for each slide
let translate = 0;

// Slide function for navigation
slide = (index) => {
    // Calculate the new translate value based on the page index
    translate = -index * translateAmount;

    // Apply the transform to each page
    pages.forEach(page => {
        page.style.transform = `translateX(${translate}%)`;
    });
}

// Event listeners for each navbar link
document.getElementById("nav-main").addEventListener("click", () => slide(0));
document.getElementById("nav-about").addEventListener("click", () => slide(1));
document.getElementById("nav-projects").addEventListener("click", () => slide(2));
document.getElementById("nav-associations").addEventListener("click", () => slide(3));
document.getElementById("nav-this").addEventListener("click", () => slide(4));