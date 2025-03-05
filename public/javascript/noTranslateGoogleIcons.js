function noTranslateGoogleIcons() {
    const googleIcons = document.querySelectorAll(".material-symbols-rounded");
    googleIcons.forEach((icon) => {
        icon.classList.add("notranslate");
    });
}

noTranslateGoogleIcons();
