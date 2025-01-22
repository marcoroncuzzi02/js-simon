// Descrizione:**
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// **NOTA**: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
// **BONUS:**
// - Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
// - Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
// Consigli del giorno:
// >
// > - Pensate prima in italiano.
// > - Dividete in piccoli problemi la consegna.
// > - Individuate gli elementi di cui avete bisogno per realizzare il programma.
// > - Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"

// devo avere in html 5 span con numeri

//seleziono gli elementi dell'html con getelementbyclass e creo un array
let randomNumbers = document.getElementsByClassName('random-number')
let randomInputs = document.getElementsByClassName('random-input')
let displayFirst = document.getElementById ('display-first')
let displaySecond = document.getElementById ('display-second')
let instruction = document.getElementById ('instruction')
let btn = document.getElementById('btn')
let stamp = document.getElementById('stamp')

function random(min,max) {
    return Math.floor((Math.random() * max) + min);
}
//con un ciclo for genero 5 numeri casuali
for (let i=0; i<randomNumbers.length; i++) {
    randomNumbers[i].innerHTML= random(1,99)
}
//imposto un setTimeOUt di 30 secondi dopo il quale scompaiono i numeri

setTimeout(hidden, 3000)

function hidden(){    
    displayFirst.style.display = 'none'  
    displaySecond.style.display = 'flex'
    instruction.innerHTML ='INSERISCI I NUMERI CHE TI RICORDI'  
    btn.style.display = 'block'
}
//aggiungo un eventlistener dove faccio la comparazione dei 2 array