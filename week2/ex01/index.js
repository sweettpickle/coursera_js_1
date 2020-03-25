/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
	let stack= [];
	while (tweet.indexOf('#') !== -1)
	{
		let i = tweet.indexOf('#');
		let end = getIn(tweet, i);
		stack.push(tweet.slice(i + 1, end));
		tweet = tweet.slice(end, tweet.length);
	}

	function getIn(tweet, i)
	{
		for (; i < tweet.length; i++)
		{
			if (tweet[i] === ' ')
			return i;
		}
		return tweet.length;
	}
	return stack;
};

