const pages = document.querySelectorAll(".page");
const translateAmount = 100;
let translate = 0;

slide = (index) => {
    translate = -index * translateAmount;
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