//definisco le variabili
let userEta, userChilometri, prezzoDelBiglietto, prezzoFinale;

//definisco le costanti
const tariffaTicket = 0.21;


//chiedere al passegero il numero di chilometri
userChilometri = parseInt(prompt("Inserisci i chilometri del passeggero"));
console.log(userChilometri);


//chiedere al passegero l'età
userEta = parseInt(prompt("Inserisci l'età del passeggero"));
console.log(userEta);

//calcolare il prezzo del biglietto
prezzoDelBiglietto = userChilometri * tariffaTicket;
console.log(prezzoDelBiglietto);


if(userEta<18){// SE il passsegero è più piccolo di 18 anni ha uno sconto del 20%
    prezzoFinale = prezzoDelBiglietto - (prezzoDelBiglietto * 20 / 100 );
    console.log(prezzoFinale);
}else if(userEta>65){// ALTRIMENTI SE il passegero è più grande di 65 anni ha uno sconto del 40%
    prezzoFinale = prezzoDelBiglietto - (prezzoDelBiglietto * 40 / 100 );
    console.log(prezzoFinale);

}else{//ALTRIMENTI il passeggero ha un età compresa tra 18 e 65 anni
    prezzoFinale = prezzoDelBiglietto;
}
    
prezzoFinale = Math.round((prezzoFinale + Number.EPSILON) * 100) / 100;
console.log(prezzoFinale);



//OUTPUT
document.getElementById("ticket").innerHTML="Il Prezzo Del Biglietto è " + prezzoFinale + "€"