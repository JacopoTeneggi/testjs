'use strict';

//QUESTO MODULO PERMETTE DI ACCEDERE AL FILESYSTEM DELLA MACCHINA
//E SCRIVERE / LEGGERE FILES
//NON VA INSTALLATO PERCHE' E' GIA' INCLUSO IN NODE.JS
const fs = require('fs'); 


//FUNZIONE CHE LEGGE IL FILE JSON E RITORNA L'OGGETTO JAVASCRIPT
const leggiPersonaggio = (path) => {
	return require(path);
}

//FUNZIONE CHE CREA L'OGGETTO JSON E LO TRASFORMA IN UNA STRINGA JSON
const creaPersonaggio = (nome, cognome, forza) => {
	if (typeof nome !== 'string' || typeof cognome !== 'string') return console.log('Nome e cognome devono essere stringhe');
	if (typeof forza !== 'number') return console.log('Forza deve essere un numero');
	const personaggio = {
		nome: nome,
		cognome: cognome,
		forza: forza
	}
	const personaggioJSON = JSON.stringify(personaggio);
	try {
		fs.writeFileSync('./personaggi/' + nome + '.json', personaggioJSON);
	} catch(ex) {
		return console.log(ex);
	}
	return 'OK';
}

console.log(creaPersonaggio('Jian','Zhou',9000));