// Телефонная книга
let phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
	let params = command.split(' ');
	let com, name;
	let telephons = [];

	com = params[0];
	if (params[1])
		name = params[1];
	if (params[2])
	{
		if (params[2].indexOf(',') !== -1)
			telephons = params[2].split(',');
		else
			telephons.push(params[2]);
	}

	if (com === 'SHOW')
		return show();
	else if (com === "ADD")
		return add();
	else if (com === "REMOVE_PHONE")
		return remove();

	function show() {
		let newBook = [];
		let keys = Object.keys(phoneBook).sort();

		for (let i = 0; i < keys.length; i++)
		{
			newBook[i] = keys[i] + ": " + phoneBook[keys[i]].join(", ");
		}
		return newBook;
	}

	function add() {
		if (phoneBook.hasOwnProperty(name))
			phoneBook[name] = phoneBook[name].concat(telephons);
		else
			phoneBook[name] = telephons;
		return (name + ": " + telephons.join(", "));
	}

	function remove() {
		let keys = Object.keys(phoneBook);
		for (let i = 0; i < keys.length; i++)
		{
			if (phoneBook[keys[i]].includes(name))
			{
				if (phoneBook[keys[i]].length > 1)
					phoneBook[keys[i]] = phoneBook[keys[i]].filter(newTele);
				else
					delete phoneBook[keys[i]];
				return true;
			}
		}
		function newTele(item, i) {
			return item !== name;
		}
		return false;
	}
};
