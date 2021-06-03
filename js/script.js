
//3. stampa la lista ordinata alfabeticamente
//4. scrivi anche la posizione “umana” (partendo da 1) 
//della lista in cui il nuovo utente si trovaS

//1. chiedi all’utente il cognome


//2. inseriscilo in un array dove sono presenti già altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var listSurname = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

listSurname.push(prompt("inserisci il tuo cognome! "));

// serve per ordinare i cognomi in oridine alfabetico!
listSurname.sort();


var output = document.getElementById('listaNomi');
var listHtml = '';

for (var i = 0; i < listSurname.length; i++){
    listHtml += '<li>' + listSurname[i] + '</li>';
    listSurname.indexOf("Aguilera");
}

output.innerHTML = listHtml + '</br>';
