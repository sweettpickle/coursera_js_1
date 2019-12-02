/**
 * @param {String} date
 * @returns {Object}
 */
// module.exports = function (date) {
// 	let data = new Date(date);
//
// 	Object.defineProperties(data, {
// 		'add': {
// 			value: function (num, param) {
// 				if (param === 'years')
// 					data.setFullYear(data.getFullYear() + num);
// 				if (param === 'months')
// 					data.setMonth(data.getMonth() + num);
// 				if (param === 'days')
// 					data.setDate(data.getDate() + num);
// 				if (param === 'hours')
// 					data.setHours(data.getHours() + num);
// 				if (param === 'minutes')
// 					data.setMinutes(data.getMinutes() + num);
// 				return data;
// 			}
// 		},
// 		'subtract': {
// 			value: function (num, param) {
// 				if (param === 'years')
// 					data.setFullYear(data.getFullYear() - num);
// 				if (param === 'months')
// 					data.setMonth(data.getMonth() - num);
// 				if (param === 'days')
// 					data.setDate(data.getDate() - num);
// 				if (param === 'hours')
// 					data.setHours(data.getHours() - num);
// 				if (param === 'minutes')
// 					data.setMinutes(data.getMinutes() - num);
// 				return data;
// 			}
// 		},
// 		'value': {
// 			value: data.toLocaleDateString("ru").split(".").reverse().join("-") +
// 					" " + data.toTimeString().split(" ")[0].slice(0,5)
// 		}
// 	});
// 	return data;
// };

function Time(str)
{
	let data = new Date(str);
	// console.log(data.value);
	// let params = str.split(" ");
	// let param1 = params[0].split("-");
	// let param2 = params[1].split(":");
	//
	// let obj = {
	// 	years: Number(param1[0]),
	// 	mounths: Number(param1[1]),
	// 	days: Number(param1[2]),
	// 	hours: Number(param2[0]),
	// 	minutes: Number(param2[1]),
	// };

	Object.defineProperties(data, {
		'add': {
			value: function (num, param) {
				if (param === 'years')
					data.setFullYear(data.getFullYear() + num);
				if (param === 'months')
					data.setMonth(data.getMonth() + num);
				if (param === 'days')
					data.setDate(data.getDate() + num);
				if (param === 'hours')
					data.setHours(data.getHours() + num);
				if (param === 'minutes')
					data.setMinutes(data.getMinutes() + num);
				console.log(data);
				return data;
				// return data.toLocaleDateString("ru").split(".").reverse().join("-") +
				// 	" " + data.toTimeString().split(" ")[0].slice(0,5);
				// return data.getFullYear() + "-" + data.getMonth() + "-" + data.getDate() +
				// 	" " + data.getHours() + ":" + data.getMinutes();
			}
		},
		'subtract': {
			value: function (num, param) {
				if (param === 'years')
					data.setFullYear(data.getFullYear() - num);
				if (param === 'months')
					data.setMonth(data.getMonth() - num);
				if (param === 'days')
					data.setDate(data.getDate() - num);
				if (param === 'hours')
					data.setHours(data.getHours() - num);
				if (param === 'minutes')
					data.setMinutes(data.getMinutes() - num);
				console.log(data);
				return data;
			}
		},
		'valueOf': {
			value: function () {
				return data.toLocaleDateString("ru").split(".").reverse().join("-") +
				" " + data.toTimeString().split(" ")[0].slice(0, 5)
			}
		}
	});
	return data;
}

let time = Time('2017-05-16 13:45');

console.log(time.add(24, 'hours').subtract(1, 'months').add(3, 'days').add(15, 'minutes'));
console.log(time.valueOf());