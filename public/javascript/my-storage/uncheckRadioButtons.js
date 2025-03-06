const radioButtons = document.querySelectorAll("input[type='radio']");

let lastCheckedButton = null;

function toggleRadioButton(button) {
    if (button === lastCheckedButton) {
        button.checked = false;
        lastCheckedButton = null;
    } else {
        lastCheckedButton = button;
    }
}

radioButtons.forEach((button) => {
    button.addEventListener("click", () => {
        toggleRadioButton(button);
    });
});
