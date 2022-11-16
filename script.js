/* Consegna:
Data una lista della spesa già compilata nel vostro codice, stampare in console gli elementi della lista individualmente, prima con un ciclo for, poi con un ciclo while.
Quando le stampe in console sono corrette, stampare gli elementi in un elenco puntato in HTML, utilizzando uno dei due cicli scritti al punto precedente.
*/


//Dichiarazione lista della spesa
let arrayList= ["pane","latte","cereali","insalata","mela","kiwi"];

/*
//Inizializzazione funzione for per stampare individualmente gli elementi della lista
for( let i = 0 ; i <arrayList.length ; i ++){
    console.log(i + ". " + arrayList[i]);

}
*/

//Inizializzazione funzione while per stampare singoli elementi della lista 
let i = 0;
while(i < arrayList.length) {
    console.log(i + ". " + arrayList[i]);
    document.getElementById("Grocery-Items").innerHTML += "<li>" + arrayList[i] + "</li>";
    i++;
}
























/*
// Il software chiede all'utente di inserire 10 volte un numero. 
// Il programma stampa la somma di tutti i numeri inseriti.


let userNumber;
// Creo Array per contenere tutti i numeri dell'utente
//[2,4,1,5,7,3,10,9,2,1]
let arrayNumbers = [];

for (let i = 0; i < 10; i++) {
    // Chiedo 10 numeri all'utente => ripeto per 10 volte un prompt
    userNumber = parseInt(prompt('Insert a number:'));
    // Inserisco il numero digitato dall'utente nell'array
    arrayNumbers.push(userNumber);
}
//Stampo tutti i numeri inseriti nell'array
console.log(arrayNumbers);


//Creo Variabile per somma

//TRASFORMA IL CICLO FOR IN UN CICLO WHILE
let sum = 0;
/*
for (let i = 0; i < arrayNumbers.length; i++) {
    // Stampo ogni elemento dell'array
    userNumber = arrayNumbers[i];
    console.log(i + ". " + userNumber);
    // Somma elementi
    sum += userNumber;
}
*/


/*
let i = 0;
//CONDIZIONE : Non voglio piu sommare nulla se la somma supera 100!
while(i <arrayNumbers.length){
    i++;
        // Stampo ogni elemento dell'array
        userNumber = arrayNumbers[i];
        console.log(i + ". " + userNumber);
        // Somma elementi
        sum += userNumber;
}

console.log('Total sum is: ' + sum);


//Chiedo all'utente di inserire fintanto che las somma non supera 100
while(somma <= 100){
    let numeroInserito= prompt("Inserisci un numero: ");
    let numeroIntero= parseInt(numeroInserito);

    somma += numeroIntero;
    console.log("Numero inserito: " + numeroIntero);
    console.log("la somma attuale fa: " somma);
}
*/
