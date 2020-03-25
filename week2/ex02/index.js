/**['web', 'coursera', 'JavaScript', 'Coursera', 'script'
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
	let hash_new = [];
	for (let i = 0; i < hashtags.length ;)
	{
		if (!hash_new.includes(hashtags[i].toLowerCase()))
			hash_new.push(hashtags[i].toLowerCase());
		i++;
	}
	let hashs = hash_new.join(', ');
	return hashs;
};