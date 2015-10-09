
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

// [17-23, 24-60], [32-49, 15-35]
function rangeOverlap(aStart, aEnd, bStart, bEnd) {
	'use strict';

	if (aStart <= bStart && bStart <= aEnd) {  // b starts in a
		return true;
	}
	if (aStart <= bEnd && bEnd <= aEnd) { // b ends in a
		return true;
	}
	if (aStart < bStart && aEnd < bEnd) { // a in b
		return true;
	}
	return false;
}

var exports = module.exports = {
	random: random,
	rangeOverlap: rangeOverlap
};
