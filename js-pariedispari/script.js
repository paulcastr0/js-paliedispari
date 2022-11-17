/*
Palindroma:
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma e poi usare quella funzione appena dichiarata.
*/


// Prende input da utente
const string = prompt('Enter a word: ');

// Chiamare la Funzione
const value = checkPalindrome(string);

console.log(value);



function checkPalindrome(word) {

    // Trovare la lunghezza della parola
    const len = word.length;

    // Funzione for loop fino a metà della parola 
    for (let i = 0; i < len / 2; i++) {

        // Funzione If che controlla se la prima e ultima parola sono uguali
        if (word[i] !== word[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
