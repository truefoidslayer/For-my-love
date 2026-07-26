let noClickCount = 0;
const messages = [
    "Wait... are you sure? 🥺",
    "nah that's not right...",
    "try again 😭",
    "be serious...",
    "okay now you're just playing...",
    "okay last chance..."
];

function shrinkNoBtn() {
    const noBtn = document.getElementById("no-btn");
    const yesBtn = document.getElementById("yes-btn");
    const questionText = document.getElementById("question-text");

    if (noClickCount < messages.length) {
        questionText.innerText = messages[noClickCount];
    }

    // Shrink NO button
    let currentNoSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    if (currentNoSize > 6) {
        noBtn.style.fontSize = (currentNoSize - 2) + "px";
        noBtn.style.padding = "4px 8px";
    }

    // Grow YES button
    let currentYesSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentYesSize + 6) + "px";

    noClickCount++;
}

function goToGifts() {
    document.getElementById("question-card").classList.add("hidden");
    document.getElementById("gift-card").classList.remove("hidden");
}

function showModal(id) {
    document.getElementById(id).classList.remove("hidden");
}

function closeModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(m => m.classList.add('hidden'));
}
