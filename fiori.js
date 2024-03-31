
    
    
    fetch('./plants.json')
    .then(response => response.json())
    .then(data => {
      // Elaborazione dei dati JSON
      const piante = data.fiori;
  
      // Creazione degli elementi HTML e inserimento nel documento
      let container = document.querySelector('.container');
  
      piante.forEach(fiore => {
        let articolo = document.createElement('article');
/*         let titolo = document.createElement('h2');
        let descrizione = document.createElement('p');
 */
        articolo.innerHTML = `
        <img src="${fiore.immagine}">
        <h2>${fiore.nome}</h2>
        <p>${fiore.descrizione}</p>`;

        container.appendChild(articolo);
        articolo.classList.add("creaSezione");
        
/*         titolo.textContent = pianta.pianta;
        descrizione.textContent = pianta.descrizione;
  
        articolo.appendChild(titolo);
        articolo.appendChild(descrizione);
        container.appendChild(articolo);

 */        console.log(data);
      });
    })
    .catch(error => {
      console.error('Si è verificato un errore durante il caricamento del file JSON:', error);
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
