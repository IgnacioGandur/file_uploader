const toggleMobileNavbarButton = document.querySelector(
    ".toggle-mobile-navbar",
);
const mobileNavbar = document.querySelector(".mobile-vertical-navbar");
const hideMobileNavbarButton = document.querySelector(".hide-mobile-navbar");

function toggleNavbar() {
    mobileNavbar.classList.toggle("show");
}

toggleMobileNavbarButton.addEventListener("click", toggleNavbar);
hideMobileNavbarButton.addEventListener("click", toggleNavbar);
