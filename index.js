'use strict';

function letterPairs(string) {
	if (typeof string !== 'string' || string.length == 0) {
		return [];
	}

	var pairs = [];
	for (var i = 0; i < string.length - 1; i++) {
		pairs.push(string.substr(i, 2));
	}
	return pairs;
};

function wordLetterPairs(string) {
	var pairs = [], tokens = string.split(' ');

	for (var i = 0; i < tokens.length; i ++) {
		pairs = pairs.concat(letterPairs(tokens[i]));
	}

	return pairs;
};


module.exports = function strikeAMatch(stringOne, stringTwo) {
	if (typeof stringOne !== 'string' || typeof stringTwo !== 'string') {
		throw new TypeError('stringOne and stringTwo must be strings');
	}

	const onePairs = wordLetterPairs(stringOne.toUpperCase()),
		twoPairs = wordLetterPairs(stringTwo.toUpperCase());

	var intersection = 0,
		union = onePairs.length + twoPairs.length;

	for (var i = 0; i < onePairs.length; i++) {
		var pair1 = onePairs[i];
		for (var ii = 0; ii < twoPairs.length; ii++) {
			var pair2 = twoPairs[ii];
			if (pair1 == pair2) {
				intersection++;
				twoPairs.splice(ii, 1);
				break;
			}
		}
	}

	return (2 * intersection) / union;
};