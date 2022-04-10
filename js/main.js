"use strict";

function activeLinks() {
    const lists = document.querySelector(".nav-lists");
    const links = document.querySelectorAll(".nav_link");

    links.forEach((item) => {
        item.addEventListener("click", () => {
            lists.querySelector(".active-link").classList.remove("active-link");

            item.classList.add("active-link");
        });
    });
}
activeLinks();

function navside() {
    const burger = document.querySelector("#burger");
    const nav = document.querySelector("#navside");
    const closeBtn = document.querySelector("#closeBtn");

    burger.addEventListener("click", () => {
        nav.classList.add("show-nav");
    });
    closeBtn.addEventListener("click", () => {
        nav.classList.remove("show-nav");
    });

    document.addEventListener("mouseup", (e) => {
        if(e.target !== closeBtn && e.target !== nav) {
            nav.classList.remove("show-nav");
        }
    });
}
navside();

function choose() {
    const selectItem = document.querySelectorAll(".select__item");

    selectItem.forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("show-text");
        });
    });
}
choose();