const pages = document.querySelectorAll(".page");
const translateAmount = 100;
let translate = 0;
const tabs = document.querySelectorAll(".tab");

slide = (index) => {
    translate = -index * translateAmount;
    pages.forEach(page => {
        page.style.transform = `translateX(${translate}vw)`;
    });
    activateTab(index);
    localStorage.setItem("currentPage", index);
}

document.getElementById("nav-main").addEventListener("click", () => slide(0));
document.getElementById("nav-about").addEventListener("click", () => slide(1));
document.getElementById("nav-projects").addEventListener("click", () => slide(2));
document.getElementById("nav-cont").addEventListener("click", () => slide(3));

activateTab = (index) => {
    tabs.forEach((tab, idx) => {
        if (idx === index) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });
}
tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        activateTab(index);
    });
});
activateTab(0);

const savedPage = localStorage.getItem("currentPage");
if (savedPage) {
    slide(parseInt(savedPage));
} else {
    slide(0);
}

document.querySelector(".submit").addEventListener("click", function (e) {
    e.preventDefault();

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#msg");
    const nameValid = /\s/.test(nameInput.value);
    const emailValid = emailInput.validity.valid;
    const messageValid = messageInput.value.trim().length > 0;

    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        alert("Please fill in all fields before submitting.");
    } else if (!nameValid) {
        alert("Your name must include at least a first and last name (e.g., John Doe).");
    } else if (!emailValid) {
        alert("Please enter a valid email address.");
    } else if (!messageValid) {
        alert("Your message cannot be empty.");
    } else {
        const button = e.target;
        button.textContent = "Sent ✅";
        button.classList.add("sent");
        button.disabled = true;
        setTimeout(() => {
            button.textContent = "Send Message";
            button.classList.remove("sent");
            button.disabled = false;
        }, 3000);
    }
});
