const pages = document.querySelectorAll(".page");
const translateAmount = 100;
let translate = 0;
const tabs = document.querySelectorAll(".tab");

slide = (index) => {
    translate = -index * translateAmount;
    pages.forEach(page => {
        page.style.transform = `translateX(${translate}vw)`;
    });
}

document.getElementById("nav-main").addEventListener("click", () => slide(0));
document.getElementById("nav-about").addEventListener("click", () => slide(1));
document.getElementById("nav-projects").addEventListener("click", () => slide(2));
document.getElementById("nav-associations").addEventListener("click", () => slide(3));
document.getElementById("nav-this").addEventListener("click", () => slide(4));

activateTab =(index) {
    tabs.forEach((tab, idx) => {
        if (idx === index) {
            tab.classList.add("active"); // Highlight the active tab
        } else {
            tab.classList.remove("active"); // Reset other tabs
        }
    });
}

// Add event listeners to each tab
tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        activateTab(index); // Update active tab on click
    });
});

// Initialize the first tab as active
activateTab(0);
