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

// stampo la lista non ordinata e senza il cognome inserito dall'utente
// Creazione del ciclo for per inserire i cognomi nella lista in HTML

// assegnazione variabile unItems
var unItems = '';
for (var i = 0; i < lastNameOriginalList.length; i++) {
    // creazione di items (elemento che andrà inserito in HTML)
    unItems += '<li>' + lastNameOriginalList[i] + '</li>';
}

// stampo la lista originale
document.getElementById('last-name-un-list').innerHTML = unItems;

function myFunction() {
    
    // dichiaro la variabile che conterrà il cognome inserito dall'utente, usando toLowerCase e trim per correggere eventuali upercase letters o spazi
    var userLastName = prompt('Inserisci il tuo cognome').toLowerCase().trim();
    
    // inserisco nell lista originale il cognome inserito dall'utente
    lastNameOriginalList.push(userLastName);
    
    // assegno alla variabile lastNameOrderedList il valore del sort in modo tale da non modificare sovrascrivendo la lista originale
    var lastNameOrderedList = lastNameOriginalList.sort();
    
    // Creazione del ciclo for per inserire i cognomi nella lista in HTML
    
    // assegnazione variabile items
    var items = '';
    for (var i = 0; i < lastNameOrderedList.length; i++) {
        // creazione di items (elemento che andrà inserito in HTML)
        items += '<li>' + lastNameOrderedList[i] + '</li>';
    }
    
    // stampo la lista ordinata
    document.getElementById('last-name-od-list').innerHTML = items;
    
    // stampo la posizione del cognome inserito dall'utente, aggiungendo 1 per renderlo in forma più 'umana'
    document.getElementById('position').innerHTML = 'Il cognome che hai inserito è il ' + (lastNameOrderedList.indexOf(userLastName) + 1) + '°' + ' elemento.';
}
