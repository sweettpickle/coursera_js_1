// Телефонная книга
// let phoneBook = {};
let phoneBook = new Map();

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
	let params = command.split(' ');
	let com, name, telephons;

	com = params[0];
	if (com === 'SHOW')
	{
		let newBook = [];
		for (let key of phoneBook.keys())
		{
			let contact = "";
			contact += key + ": " + phoneBook.get(key).join(', ');
			newBook.push(contact);
		}
		return newBook;
	}

	name = params[1];
	if (params[2].indexOf(',') !==-1)
		telephons = params[2].split(',');
	else
		telephons = params[2];

	if (com === "ADD")
	{
		if (phoneBook.has(name))
		{
			let newTelephons = phoneBook.get(name);
			for (let n = 0; n < telephons.length; n++)
				newTelephons.push(telephons[n]);
			phoneBook.set(name, newTelephons);
			return (name + ": " + newTelephons);
		}
		else
			phoneBook.set(name, telephons);
		return (name + ": " + telephons);
	}

	if (com === 'REMOVE_PHONE')
	{
		if (phoneBook.has(name))
		{
			phoneBook.delete(name);
			return true;
		}
		else
			return false;
	}
};
