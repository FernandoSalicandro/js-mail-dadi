// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email.
// NON USARE INCLUDES!


/////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

/////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////



// MAIL

// Dati : 
// email dell'utente
// lista utenti che possono accedere

//Ragionamento:
//Definisco un'array degli utenti che possono accedere;
//Raccolgo l'input mail dell'utente tramite prompt;
//creo una condizione che controlli se la mail raccolta si trova nell'array relativo;
// se la condizione è vera stampo il messaggio benvenuto nella tua email
  //altrimenti stampo il messaggio non esiste un account con questa email;



  const userMail = [];

  let userEmailInput = prompt(`Inserisci la tua email`);

  if (userMail.indexOf(userEmailInput) !== -1) {

    alert(`Benvenuto nella tua email`);

    
  } else {
        alert(`Non esiste un account con questa email`);
    }


    //GIOCO DEI DADI - Metodo 1 

    // Creo gli array di appoggio per i player
    // Creo un generatore random che genera 2 volte un numero tra 1 e 6 e lo inserisco nel ciclo;
    //pusho i numeri negli array di ciascun player
    // creo la condizione che controlli chi vince
    //stampo chi vince, perde, pareggia

  
   
// Creo gli array di appoggio per i player
const player1 = [];
const player2 = [];
// inserisco il generatore in un ciclo che lo esegue per 2 volte
for (let i=0; i <= 1; i++) {
      let playersRandom = Math.floor(Math.random() * 6) + 1;
    console.log(playersRandom); //stampo i numeri in console


    // definisco dove pushare i singoli numeri
    if (i === 0) {
        player1.push(playersRandom);

    } else {
        player2.push(playersRandom);
    }
}

// confronto i numeri e definisco chi vince , perde o pareggia
if(player1 > player2) {
    console.log(`Player 1 ha vinto`);
} else if (player2 > player1) {
    console.log(`Player 2 ha vinto`);


} else {
    console.log(`Avete pareggiato`);
}

console.log(`++++++++ fine metodo 1 +++++++`);






// GIOCO DEI DADI - Metodo 2 


// Creo un ciclo in cui definisco il numero di round , e ad ogni round ciascun giocatore genererà un numero per player


for (let i=0 ; i <= 10; i++) {
const player1 = Math.floor(Math.random() * 6) + 1 ;
const player2 = Math.floor(Math.random() * 6) + 1 ;

if (player1 > player2) {
    console.log(`Il round ${i} è stato vinto da Player 1 perchè ${player1} batte ${player2}`);
} else if (player2 > player1) {
    console.log(`Il round ${i} è stato vinto da Player 2 perchè ${player2} batte ${player1}`);
} else {
    console.log(`Il round ${i} è stato pareggiato perchè ${player1} e ${player2} sono uguali`);
}

}














