/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const number1 = 2;
const number2 = 10;
if (number1 > number2) {
  console.log("show this message");
} else {
  console.log("show another message");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const thisNumber = 11;

if (thisNumber !== 5) {
  console.log("is not equal than 5!");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
const primoNumber = 25;
if (primoNumber % 5 === 0) {
  console.log(primoNumber + "questo numero è divisibile per 5!");
}

const secondoNumber = 34;

if (secondoNumber % 5 === 0) {
  console.log(" questo numero è divisibile per 5!");
} else {
  console.log(secondoNumber + "questo numero non è divisibile per 5!");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const justNumber = 8;
const justNumber2 = 0;

if (justNumber === 8) {
  console.log("the number is 8!");
}

if (justNumber - justNumber2 === 8) {
  console.log("thi number is also 8!");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 30;
const ship = 10;
if (totalShoppingCart >= 50) {
  console.log("your ship is free!");
} else {
  console.log("adds 20euros for the promotion!");
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

totalShoppingCart = 30 * 0.8;
if (totalShoppingCart >= 50) {
  console.log("your ship is free!");
} else {
  console.log("adds 26 euros for the promotion!");
}
/* SCRIVI QUI LA TUA RISP{OSTA */

/* ESERCIZIO 7

  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
const firstNumber = 10;
const secondNumber = 25;
const thirdNumber = 8;
const numbers = [10, 25, 8];

numbers.sort((a, b) => a - b);
console.log(numbers);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
const topNumber = 37;

if (topNumber === 37) {
  console.log(typeof 37);
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const jsNumber = 12;
if (jsNumber % 2 === 0) {
  console.log(jsNumber + "è un numero pari");
}

const hjNumber = 15;
if (hjNumber % 2 === 0) {
  console.log(hjNumber + "non è un numero pari!"); // risposta ignorata dal browser
} else {
  console.log(hjNumber + "non è un numero pari!");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 7;

if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a  10 o maggiore");
}

//ESERCIZIO 11
// Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log(me);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
delete me.skills[2];

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const allOfNumber = [];
allOfNumber.unshift(1);
allOfNumber.splice(8, 0, 2, 3, 4, 5, 6, 7, 8, 9);
allOfNumber.push(10);
console.log(allOfNumber);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

allOfNumber[9] = 100;
console.log(allOfNumber);
