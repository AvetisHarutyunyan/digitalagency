window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".header__section");
    navbar.classList.toggle("nav-change", scrollY > 80);

    const toUpBtn = document.querySelector("#toUpBtn");
    toUpBtn.classList.toggle("show-btn", scrollY > 450);
});