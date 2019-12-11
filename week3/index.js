/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
	let data = new Date(date);
	methods = ["years", "months", "days", "hours", "minutes"];

	Object.defineProperties(data, {
		'add': {
			value: function (num, param) {
				if (num > 0 && (methods.includes(param))) {
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
					return this;
				}
				else
					throw new TypeError("Передано неверное значение");
			}
		},
		'subtract': {
			value: function (num, param) {
				if (num > 0 && (methods.includes(param))){
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
					return this;
				}
				else
					throw new TypeError("Передано неверное значение");
			}
		}
	});

	Object.defineProperty(data, "value", {
		get: function () {
			function check(str){
				if (str < 10)
					return '0' + str;
				else
					return str;
			}
			let result = data.getFullYear() + '-' + check(data.getMonth() + 1) + '-' + check(data.getDate()) +
				' ' + check(data.getHours()) + ':' + check(data.getMinutes());
			return result;
		}
	});

	return data;
};
