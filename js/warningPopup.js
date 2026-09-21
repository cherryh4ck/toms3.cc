const popup2 = document.getElementById("warning-popup");

function openWarningPopup() {
    popup2.style.display = "flex";
}

function closeWarningPopup() {
    popup2.style.display = "none";
}

function openDiscord() {
    window.open("https://discord.gg/sACFWrPDkF");
    closeWarningPopup();
}