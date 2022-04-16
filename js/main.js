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
    const body = document.querySelector("body");

    burger.addEventListener("click", () => {
        nav.classList.add("show-nav");
        body.classList.add("active-dark");
    });
    closeBtn.addEventListener("click", () => {
        nav.classList.remove("show-nav");
        body.classList.remove("active-dark");
    });

    document.addEventListener("mouseup", (e) => {
        if(e.target !== closeBtn && e.target !== nav) {
            nav.classList.remove("show-nav");
            body.classList.remove("active-dark");
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