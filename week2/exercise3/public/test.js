let phoneBook = new Map();

// phoneBook.set("Ivan", ["1234", "4321"]);
// phoneBook.set("Katya", ["4321"]);

function abc(command) {
	let params = command.split(' ');
	let com, name, telephons;

	com = params[0];
	if (com === 'SHOW')
	{
		let newBook = [];
		// // let newBook = Object.fromEntries(phoneBook.entries());
		for (let key of phoneBook.keys())
		{
			let contact = "";
			contact += key + ": " + phoneBook.get(key).join(', ');
			newBook.push(contact);
		}
		return newBook;
	}

	name = params[1];
	if (params[2].indexOf(','))
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
	return phoneBook;
}
// console.log(abc(str));
console.log(abc('ADD Ivan 555-10-01,555-10-03'));
console.log(abc('ADD Ivan 555-10-02'));
// console.log(abc('ADD Alex 555-20-01'));
console.log(abc('SHOW'));
console.log(abc('ADD Ivan 555-10-02'));
console.log(abc('SHOW'));

// console.log(abc('REMOVE_PHONE Ivan'));
