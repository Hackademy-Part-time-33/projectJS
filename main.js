



let btnToggleMenu = document.querySelector(".btnToggleMenu");

let nav = document.querySelector("nav");

let nava = document.querySelectorAll("nav li a");
let iconArrow = document.querySelector(".btnToggleMenu i");

let btnCreaSezione = document.querySelector("#btnCreaSezione");
let inputTitle = document.querySelector("#inputTitle");
let inputDescription = document.querySelector("#inputDescription");
let sectionContainer = document.querySelector("#section-container");

let firstNumber = document.querySelector("#firstNumber");
let SecondNumber = document.querySelector("#SecondNumber");
let thirdNumber = document.querySelector("#thirdNumber");

let hiddenMenu = () => {
    nav.classList.toggle("hiddenMenu");
    iconArrow.classList.toggle("rotate-custom");
}

btnToggleMenu.addEventListener("click", () => hiddenMenu());


nava.forEach(link => {
    link.classList.add("effectLink");
});



articoli = {
    "sezioni": [
        { "title": "Piante", "descrizione": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum", },
        { "title": "Fiori", "descrizione": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum" },
        { "title": "Funghi", "descrizione": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum" },
    ],
    "addSezione": function (inputTitle1, inputDescription1) {
        if (inputTitle.value !== "" && inputDescription.value !== "") {
            this.sezioni.push({ "title": inputTitle1, "descrizione": inputDescription1 },);
            inputTitle.value = ""
            inputDescription.value = "";
        } else { alert("Devi compilare tutti i campi"); }
    },
    "creaSezione": function () {
        sectionContainer.innerHTML = "";

        this.sezioni.forEach((sezione, index) => {
            let creaSezione = document.createElement("section");
            creaSezione.innerHTML = `
                    <a class ="rimuoviSezione" data-index="${index}">X</a>
                    <h1>${sezione.title}</h1>
                    <p>${sezione.descrizione}</p>`;

            sectionContainer.appendChild(creaSezione);
            creaSezione.classList.add("creaSezione0", "position-relative");
        });

        let removeButtons = document.querySelectorAll('.rimuoviSezione');
        removeButtons.forEach(button => {
            button.addEventListener('click', function () {
                let index = parseInt(this.dataset.index); // Ottieni l'indice della sezione da rimuovere (tramite dataset, posso accedere al valore dell'attributo data-index. Si utilizza anche parseInt per convertire in numero il valore di index, se no non viene letto dal metodo dell'array)
                articoli.rimuoviSezione(index); // Chiama il metodo rimuoviSezione passando l'indice
            });
        });
    },
    // Creare un bottone per ogni sezione creata per poterlo cancellare eventualmente******
    "rimuoviSezione": function (index) {
        this.sezioni.splice(index, 1);
        this.creaSezione();

    },

}

articoli.creaSezione();

btnCreaSezione.addEventListener("click", () => {
    articoli.addSezione(inputTitle.value, inputDescription.value);
    articoli.creaSezione();

})

// numeri incrementati
function createInterval(number, element, timing) {
    let count = 0;
    let interval = setInterval(() => {

        if (count < number) {
            count++;
            element.innerHTML = count;
        } else if (count === number) {
            element.innerHTML = `${count}+`;
        }
        else {
            clearInterval(interval);
        }
    }, timing);

}

let confirm = false;

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && confirm === false) {
            createInterval(1500, firstNumber, 8);
            createInterval(1800, SecondNumber, 4);
            createInterval(2000, thirdNumber, 2);
            confirm = true;
        }
    })
})

// sto dicendo che quando l'elemento firstNumber si vede sulla pagina di window durante lo scrolling, 
//il count parte da quel momento e non quando si ricarica la pagina in qualsiasi punto ci troviamo
observer.observe(firstNumber);




const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // parallax
    parallax: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});



//   ------------------------------------------


// DARK MODE

let btnDarkMode = document.querySelector("#btnDarkMode");

let mode = localStorage.getItem("mode");

let isClicked = false;

if (mode === "dark") {
    document.body.classList.add("dark-mode");
    isClicked = true;
} else {
    document.body.classList.remove("dark-mode");
}
btnDarkMode.addEventListener("click", () => {
    if (isClicked) {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
        btnDarkMode.innerHTML = `
        <i class="fa-solid fa-sun"></i>
        `
        isClicked = false;
        localStorage.setItem("mode", "dark");
    } else {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        btnDarkMode.innerHTML = `
        <i class="fa-solid fa-moon"></i>
        `
        isClicked = true;
        localStorage.setItem("mode", "light");

    }

});
