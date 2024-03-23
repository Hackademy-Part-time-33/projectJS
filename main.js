



let btnToggleMenu = document.querySelector(".btnToggleMenu");

let nav = document.querySelector("nav");

let nava = document.querySelectorAll("nav li a");
let iconArrow = document.querySelector(".btnToggleMenu i");


let hiddenMenu = () => {
    nav.classList.toggle("hiddenMenu");
    iconArrow.classList.toggle("rotate-custom");
}

btnToggleMenu.addEventListener("click", () => hiddenMenu());


nava.forEach(link => {
        link.classList.add("effectLink");
    });
