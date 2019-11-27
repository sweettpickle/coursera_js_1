/**
 * @param {String} date
 * @returns {Object}
 */
// module.exports = function (date) {
//
// };

function Time(str)
{
	let params = str.split(" ");
	let param1 = params[0].split("-");
	let param2 = params[1].split(":");
	// console.log(param2);
	// let obj = {
	// 	getYear: function () {
	// 		return param1[0];
	// 	}
	// }
	let obj = {
		def: {
			year: param1[0],
			mounth: param1[1],
			day: param1[2],
			hour: param2[0],
			minutes: param2[1],
		},
		add: function () {
			console.log(str);
			return this;
		}
	};
	console.log(obj.def);
	return obj.def;
	// console.log(obj);
	// Object.defineProperty(obj, 'add', {
	// 	add: function () {
	// 		console.log("haha");
	// 	}
	// })
}

let time = new Time('2017-05-16 13:45');


time.add();