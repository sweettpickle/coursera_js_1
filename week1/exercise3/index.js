/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
	let add_hours = Math.floor(interval / 60) ;
	let add_min = interval % 60;
	let rez_h = hours + add_hours;
	let	rez_m = minutes + add_min;

	if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59)
		return false;
	if (rez_m > 59)
	{
		rez_h++;
		rez_m -= 60;
	}
	if (rez_h > 23)
		rez_h -= 24;

	if (rez_h < 10)
		rez_h = '0' + rez_h;
	if (rez_m < 10)
		rez_m = '0' + rez_m;
	return (rez_h + ':' + rez_m);
};

// console.info(a(12, 30, 30));