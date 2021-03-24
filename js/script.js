/**
 * Consegna
* 1. chiedi all’utente il cognome
* 2. inseriscilo in un array con altri cognomi: ‘bianchi’, ‘neri’, ‘rossi’, ‘verdi’, ‘gialli’
* 3. stampa la lista ordinata alfabeticamente
* 4. scrivi anche la posizione "umana", 1 oppure 2 oppure 3 oppure ecc... (non 0 oppure 1 oppure 2 oppure ecc.. tipici degli array), del nuovo utente inserito sopra all'interno dell'array, dopo * * l'ordinamento alfabetico
 */

// Creo l'array iniziale contenente i cognomi
var lastNameOriginalList = [
    'mattia',
    'duzioni',
    'rossi',
    'verdi',
    'capatonda',
    'ballerina',
    'potter',
    'weasley',
    'granger'
];

// dichiaro la variabile che conterrà il cognome inserito dall'utente, usando toLowerCase e trim per correggere eventuali upercase letters o spazi
var userLastName = prompt('Inserisci il tuo cognome').toLowerCase().trim();

// inserisco nell lista originale il cognome inserito dall'utente
lastNameOriginalList.push(userLastName);

// assegno alla variabile lastNameOrderedList il valore del sort in modo tale da non modificare sovrascrivendo la lista originale
var lastNameOrderedList = lastNameOriginalList.sort();

// stampo la lista ordinata
console.log(lastNameOrderedList);   

// stampo la posizione del cognome inserito dall'utente, aggiungendo 1 per renderlo in forma più 'umana'
console.log('Il cognome che hai inserito è il ' + (lastNameOrderedList.indexOf(userLastName) + 1) + '°' + ' elemento.' );
