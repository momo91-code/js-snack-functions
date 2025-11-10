/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterByLetter(array, letter){
    return array.filter(function(name) {
        return name[0] === letter;
    });
}

// Invoca la funzione qui e stampa il risultato in console

const filteredNames = filterByLetter(names, "A");
console.log(filteredNames);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]