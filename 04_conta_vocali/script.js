/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contaVocali(str) {
    let conta = 0;
    const vocali = 'aeiou';


// Invoca la funzione qui e stampa il risultato in console

    for (let i = 0; i < str.length; i ++){
        let lettera = str[i].toLowerCase();
        if (vocali.includes(lettera)) {
            conta++;
        }
    }
    return conta;
}
console.log(contaVocali(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)