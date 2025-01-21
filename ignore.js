/* Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra. */


const kilometri = document.getElementById('kilometri')
const eta = document.getElementById('eta')
const btn = document.getElementById('btn')
const nomeCognome = document.getElementById('nomeCognome')

//dove vado stampare il value

const nomeCognomeInseriti = document.getElementById('nome-cognome-inseriti')
let kilometriInseriti = document.getElementById('kilometri-inseriti')
let etaInserita = document.getElementById('eta-inserita')
const numeroCarrozza = document.getElementById('numero-carrozza')
const codiceBiglietto = document.getElementById('codice-biglietto')
const prezzoBiglietto = document.getElementById('prezzo-biglietto')
let display = document.getElementById('display')

//stampo i value

btn.addEventListener('click', function(){
    display.style.display = 'block'
    nomeCognomeInseriti.innerHTML = nomeCognome.value
    kilometriInseriti = kilometri.value
    etaInserita= eta.value
    numeroCarrozza.innerHTML = Math.floor((Math.random() * 10) + 1);
    codiceBiglietto.innerHTML = Math.floor((Math.random() * 999999) + 111111);

    //calcolo del prezzo
    let prezzo = kilometri.value * 0.21
        let discount = 0;

    // pongo le condizioni per lo sconto del prezzo del biglietto

    if (eta.value < 18){
        discount = prezzo * 0.20   
    }
    else if (eta.value > 65){
        discount = prezzo * 0.40
    }

    prezzo = prezzo - discount
    console.log(`il prezzo è di ${prezzo}$`);
    prezzoBiglietto.innerHTML = `${prezzo.toFixed(2)}$`
})
