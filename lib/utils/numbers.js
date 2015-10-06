
/**
 * Attempts to randomly (ha!) generate a number
 * between a range
 *
 * @param  {Number} min The minimum value of the range
 * @param  {Number} max The maximum value of the range
 *
 * @return {Number}        hopefully a random number :P
 */
function random(min, max) {
	'use strict';

	min = min || 1;
	max = max || 10;
	if (isNaN(min) || isNaN(max)) {
		// you asked for it :P
		return 0;
	}
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var exports = module.exports = {
	random: random
};
