/*
Pari e Dispari:
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri.
Stabiliamo  se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

//Chiedere all'utente un input (numero)
let number;
do {
    number = parseInt(prompt("Insert a number from 1 to 5 : "));
    console.log(number);
} while (isNaN(number) || number <= 0 || number > 5);

//Chiedere all'utente se input pari o dispari 
let userNum;
do {
    userNum = (prompt('"even" or "odd" ?')).toLowerCase();
    console.log(userNum);
} while (userNum != "even" && userNum != "odd");

//Genero un numero random per il computer
let computerNum = rndmInteger(1, 5);
console.log(computerNum);

//Faccio la somma dei due numeri (utente e computer)
let sum = userNum + computerNum;
console.log(sum);

//Vedo se la somma è pari o dispari
let result = "";
if(isEven(sum)) {
    result = "even";
} else {
    result = "odd";
}

//Vedo se l'utente ha vinto
if(isWinner(userNum, result)) {
    console.log("You Won!")
}else {
    console.log("You Lost!")
}

//Funzione che genera un numero casuale tra 1 e 5 del computer
function rndmInteger(min, max) {
    return Math.random() * (5-1+1)+1;
}

//Funzione che stabilisce se un numero è pari o dispari
function isEven(num) {
    if(num % 2 == 0){
        return true;
    } else {
        return false;
    }
}

//Funzione per determinare se l'utente ha vinto o no
function isWinner(userNum,result) {
    if(userNum == result) {
        return true;
    } else {
        return false;
    }
}
