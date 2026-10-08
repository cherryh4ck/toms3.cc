const popup = document.getElementById("popup");
const popup_title = document.getElementById("popup-title");
const popup_body_content = document.getElementById("popup-body-content");
const popup_body_button = document.getElementById("popup-button");

function openPopup() {
    popup.style.display = "flex";
}

function closePopup() {
    popup.style.display = "none";
    popup_body_content.replaceChildren();
}

function openDonatePopup() {
    popup_title.textContent = "Donations";
    const body_text = document.createElement("p");
    body_text.innerHTML = 'Donation links:<br><a href="https://steamcommunity.com/tradeoffer/new/?partner=1781797079&token=1fTVqckz" target="_blank">Steam Trade</a><br><a href="https://paypal.me/tomatito32k" target="_blank">PayPal</a>';
    popup_body_content.appendChild(body_text);
    openPopup();
}

function openDiscordPopup() {
    popup_title.textContent = "Warning!";
    const body_text = document.createElement("p");
    body_text.innerHTML = 'Please note that the server may <b>not</b> be suitable for all users.<br><br>By clicking <b>OK</b>, you agree to proceed.';
    popup_body_content.appendChild(body_text);
    popup_body_button.addEventListener("click", () => {
        window.open("https://discord.gg/sACFWrPDkF");
    }, {once: true});
    openPopup();
}