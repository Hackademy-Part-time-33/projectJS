


fetch('./plants.json')
  .then(response => response.json())
  .then(data => {
    // Elaborazione dei dati JSON
    let piante = data.piante;

    // Creazione degli elementi HTML e inserimento nel documento
    let container = document.querySelector('.container');

    piante.forEach(pianta => {
      let articolo = document.createElement('article');
      /*         let titolo = document.createElement('h2');
              let descrizione = document.createElement('p');
       */
      let descrizioneCorta = pianta.descrizione.substring(0,150);
      if (pianta.descrizione.length > 150){
        descrizioneCorta += "...";
      }
      articolo.innerHTML = `
      <div>
        <img src="${pianta.immagine}">
        <h2 class="mt-2">${pianta.pianta}</h2>
      </div>
        <div class ="mt-4">
        <p>${descrizioneCorta}</p>
        </div>`;

      container.appendChild(articolo);
      articolo.classList.add("creaSezione");

/*         titolo.textContent = pianta.pianta;
        descrizione.textContent = pianta.descrizione;
  
        articolo.appendChild(titolo);
        articolo.appendChild(descrizione);
        container.appendChild(articolo);

       console.log(data); */ 
    });

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















