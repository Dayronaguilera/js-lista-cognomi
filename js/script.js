
//3. stampa la lista ordinata alfabeticamente
//4. scrivi anche la posizione “umana” (partendo da 1) 
//della lista in cui il nuovo utente si trova

// inseriscilo in un array dove sono presenti già altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var listSurname = ["Bianchi ", "Neri ", "Rossi ", "Verdi ", "Gialli "];
var surname = prompt("inserisci il tuo cognome! ");

// chiedi all’utente il cognome e va pushato dentro l'array!
listSurname.push(surname);

// serve per ordinare i cognomi in ordine alfabetico!
listSurname.sort();
var output = document.getElementById('listaNomi');
var i = 0;
var listHtml = '';

while ( i < listSurname.length) {
    listHtml += '<li>' + listSurname[i] + '</li>';
    i++ ;
}

output.innerHTML = listHtml  + "Ti trovi nella posizione N: " + parseInt(listSurname.indexOf(surname) + 1) ;
