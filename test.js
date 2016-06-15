const sam = require('./index'),
	assert = require('assert');

describe('strike-a-match', () => {

	it('gives 100% on matches', () => {
		assert(sam('hello', 'hello') === 1);
		assert(sam('hello world', 'hello world') === 1);
	});

	it('is case insensitive', () => {
		assert(sam('hElLo', 'HeLlO') === 1);
		assert(sam('HELLO wOrLd', 'hello WORLD') == 1);
	});

	it('returns the expected percentages', () => {
		assert(sam('HELLO', 'ELLO') === (2 * 3) / 7);
		assert(sam('france', 'republic of france') === 5 / 9);
	});

});