'use strict';

const fs = require('fs');

const writeStudent = (student, callback) => {
	if (!student.name || !student.surname) return callback('You must specify name AND surname');
	let id = student.name + student.surname;
	let path = './' + id + '.json';
	let body = JSON.stringify(student);
	fs.writeFile(path, body, (err) => {
		if (err) return callback(err);
		callback(null, { path: path, message: 'Writing Completed' });
	})
};

const example = {
	name: 'Pinco',
	surname: 'Pallino',
	age: 18
};
const bad = {
	nam: 'fool',
	surnme: 'bar'
}

writeStudent(bad, (err, data) => {
	if (err) return console.log(err);
	console.log(data.message);
});
console.log('Writing student');