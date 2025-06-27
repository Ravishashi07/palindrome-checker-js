const txtInput = document.querySelector(".inputs input");
const checkBtn = document.querySelector(".inputs button");
const infoTxt = document.querySelector(".info-txt");
let filterInput = "";

window.addEventListener("load", () => txtInput.focus());

window.addEventListener('keydown', () => {
    txtInput.focus();
});

txtInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        checkBtn.click();
    }
});

function checkPalindrome() {
    const rawInput = txtInput.value;
    const autoClean = document.getElementById("autoClean");

    const cleanedInput = autoClean.checked
        ? rawInput.toLowerCase().replace(/[^a-z0-9]/g, '')
        : rawInput.toLowerCase();

    const reversedInput = cleanedInput.split("").reverse().join("");
    infoTxt.style.display = 'block';

    if (!cleanedInput) {
        infoTxt.innerHTML = `Please enter a valid string!`;
        return;
    }

    infoTxt.innerHTML = cleanedInput === reversedInput
        ? `Yes, <span>'${rawInput}'</span> is a palindrome!`
        : `No, <span>'${rawInput}'</span> isn't a palindrome!`;

    const infoTxtSpan = document.querySelector(".info-txt span");
    if (infoTxtSpan) {
        infoTxtSpan.style.color = nightMode ? "#fbbf24" : "#AA57CC";
    }
}

txtInput.addEventListener("input", checkPalindrome);
checkBtn.addEventListener("click", checkPalindrome);

autoClean.addEventListener("change", () => {
    if (txtInput.value.trim() !== "") {
        checkPalindrome();
    }
});

const elementsToAnimate = [
    document.body,
    document.querySelector(".container"),
    document.querySelector(".info p"),
    document.querySelector(".inputs input"),
    document.querySelector(".inputs button"),
    document.querySelector(".info-txt"),
    document.querySelector("#themeToggle")
];

elementsToAnimate.forEach(el => {
    if (el) {
        el.style.transition = "all 1.5s ease";
    }
});

const themeToggle = document.getElementById("themeToggle");
let nightMode = false;

themeToggle.addEventListener("click", () => {
    nightMode = !nightMode;
    const toggleBtn = document.getElementById("themeToggle");

    toggleBtn.style.backgroundColor = nightMode ? "#333" : "#fff";
    toggleBtn.style.color = nightMode ? "#f4f4f5" : "#000";
    toggleBtn.style.border = nightMode ? "0.5px solid #555" : "1px solid #ccc";

    const checkbox = document.getElementById("autoClean");
    const checkboxLabel = checkbox.closest("label");

    // Checkbox tweaks
    checkbox.style.accentColor = nightMode ? "#fbbf24" : "#AA57CC";

    // Label color
    if (checkboxLabel) {
        checkboxLabel.style.color = nightMode ? "#d4d4d8" : "#333";
    }

    document.body.style.backgroundColor = nightMode ? "#0f0f0f" : "#AA57CC";

    const container = document.querySelector(".container");
    container.style.backgroundColor = nightMode ? "#1a1a1a" : "#fff";
    container.style.color = nightMode ? "#e4e4e7" : "#000";

    const infoPara = document.querySelector(".info p");
    infoPara.style.color = nightMode ? "#a1a1aa" : "#474747";

    const input = document.querySelector(".inputs input");
    input.style.backgroundColor = nightMode ? "#262626" : "#fff";
    input.style.color = nightMode ? "#f4f4f5" : "#000";
    input.style.borderColor = nightMode ? "#404040" : "#999";

    const button = document.querySelector(".inputs button");
    button.style.backgroundColor = nightMode ? "#fbbf24" : "#AA57CC";
    button.style.color = "#fff";

    const infoTxtSpan = document.querySelector(".info-txt span");
    if (infoTxtSpan) {
        infoTxtSpan.style.color = nightMode ? "#fbbf24" : "#AA57CC";
    }

    themeToggle.textContent = nightMode ? "☀️" : "🌙";
});
