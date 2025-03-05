const togglePasswordVisibilityButtons = document.querySelectorAll(
    ".toggle-password-visibility",
);

togglePasswordVisibilityButtons.forEach((button) => {
    let showPass = false;
    button.addEventListener("click", () => {
        // Get input field.
        const input =
            button.parentElement.parentElement.querySelector(".input");
        showPass = !showPass;
        input.setAttribute("type", showPass ? "text" : "password");
        const visibilityIcon = button.querySelector("span");
        visibilityIcon.textContent = showPass ? "visibility" : "visibility_off";
    });
});
