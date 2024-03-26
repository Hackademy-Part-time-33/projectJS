



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



articoli ={
    "sezioni":[
        {"title": "Piante", "descrizione":"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",},
        {"title": "Fiori", "descrizione":"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"},
        {"title": "Funghi", "descrizione":"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"},
    ],
    "addSezione": function(inputTitle1, inputDescription1){
        this.sezioni.push({"title": inputTitle1, "descrizione": inputDescription1},);
        inputTitle.value = ""
        inputDescription.value = "";
    },
    "creaSezione": function(){
        sectionContainer.innerHTML = "";
        
        this.sezioni.forEach( sezione => {
            let creaSezione = document.createElement("section");
            creaSezione.innerHTML = `
            <h1>${sezione.title}</h1>
            <p>${sezione.descrizione}</p>`;

            sectionContainer.appendChild(creaSezione);
            creaSezione.classList.add("creaSezione");
        });

    }
}

articoli.creaSezione();

btnCreaSezione.addEventListener("click", () =>{
    articoli.addSezione(inputTitle.value, inputDescription.value);
    articoli.creaSezione();

})

// numeri incrementati
function createInterval(number, element, timing){
    let count = 0;
        let interval = setInterval(() => {
    
        if (count < number) {
            count++;
            element.innerHTML = count;
        } else if (count === number){
            element.innerHTML = `${count}+`;
        }
        else {
            clearInterval(interval);
        }
    }, timing);

}

let confirm = false;

let observer = new IntersectionObserver( (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && confirm === false){
            createInterval(1500, firstNumber, 20);
            createInterval(2000, SecondNumber, 10);
            createInterval(4000, thirdNumber, 5);
            confirm = true;
        }
    })
})

// sto dicendo che quando l'elemento firstNumber si vede sulla pagina di window durante lo scrolling, 
//il count parte da quel momento e non quando si ricarica la pagina in qualsiasi punto ci troviamo
observer.observe(firstNumber);