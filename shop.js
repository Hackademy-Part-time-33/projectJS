


fetch('./plants.json')
    .then(response => response.json())
    .then(data => {
        let shop = data.shop;
        let categoryWrapper = document.querySelector("#categoryWrapper");
        let cardWrapper = document.querySelector("#cardWrapper");

        function setCategory() {
            let totalCategory = shop.map((singoloArticolo) => singoloArticolo.category);
            let uniqueCategory = [];

            totalCategory.forEach(category => {
                if (!uniqueCategory.includes(category)) {
                    uniqueCategory.push(category);
                }
            });
            console.log(uniqueCategory);


            uniqueCategory.forEach((category) => {
                let div = document.createElement("div");
                div.classList.add("form-check");
                div.innerHTML = `
                <input class="form-check-input" type="radio" name="category" id="${category}">
            <label class="form-check-label" for="${category}">
            ${category}
            </label>
                `

                categoryWrapper.appendChild(div);
            });
        }

        setCategory();




        // in base alla scelta dell'utente si seleziona un array in base alla categoria scelta (funione collegata al setCategory ed all'array data) 
        function showCards(array) {
            array.sort((a, b) => b.prezzo - a.prezzo);

            cardWrapper.innerHTML = ``;

            array.forEach(annuncio => {
                let div = document.createElement("div");
                div.classList.add("shopArticolo");
                div.innerHTML = `
                <i class="fa-solid fa-star fa-2x starAbsolute"></i>
                <img src="${annuncio.immagine}">
                <h2>${annuncio.name}</h2>
                <p>${annuncio.prezzo}€</p>
                <button class="w-100 btnAddToCart">Aggiungi al carrello <i class="fa-solid fa-cart-shopping"></i></button>`;

                cardWrapper.appendChild(div)
            });
        }
        showCards(shop);

        // viene inserito in questo punto perche' gli altri input radio vengono creati attraverso la setCategory. Se fosse stato messo in cima, avrebbe preso solo quello in HTML
        let radios = document.querySelectorAll(".form-check-input");

        function filterByCategory() {
            let checked = Array.from(radios).find((button) => button.checked);
            let categoria = checked.id;
            if (categoria != "all") {
                let filtered = shop.filter((annuncio) => annuncio.category == categoria);
                showCards(filtered);
            } else {
                showCards(shop);
            }
            // console.log(filtered);
        }
        filterByCategory();

        radios.forEach((button) => {
            button.addEventListener("click", () => {
                filterByCategory();
            });
        });

        let inputPrice = document.querySelector("#inputPrice");
        let priceNumbers = document.querySelector("#priceNumbers");

        function setPriceInput() {
            let maxPrice = shop[0].prezzo;
            inputPrice.max = maxPrice;
            inputPrice.value = maxPrice;
            priceNumbers.innerHTML = maxPrice;
        }
        setPriceInput();

        inputPrice.addEventListener("input", () => {
            priceNumbers.innerHTML = inputPrice.value;

            filterByPrice();
        });

        function filterByPrice() {
            let filetered = shop.filter((annuncio) => +annuncio.prezzo <= +inputPrice.value); //inseriamo il + per poter convertire da stringa a numero i prezzi
            showCards(filetered);
        }

        let inputWord = document.querySelector("#inputWord");

        inputWord.addEventListener("input", () => {
            filterByWord();
        });

        function filterByWord() {
            let filtered = shop.filter((annuncio) => annuncio.name.toLowerCase().includes(inputWord.value.toLowerCase()));
            showCards(filtered);
        }
        filterByWord();

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

    })
    .catch(error => {
        console.error('Si è verificato un errore durante il caricamento del file JSON:', error);
    });




