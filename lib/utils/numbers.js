
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

/**
 * Attempts to create a (non-sorted) array of unique numbers
 *
 * @param  {Number} min The minimum value a number could be
 * @param  {Number} max The maximum value a number could be
 * @param  {Number} ln  The length of the array
 *
 * @return {Array}      An unsorted array of unique numbers
 */
function uniqueList(min, max, ln) {
	'use strict';
	var list = [];

	if (ln > max) {
		ln = max;
	}

	for (var i = 0; i < ln;) {
		var n = random(min, max);
		if (list.indexOf(n) === -1) {
			list.push(n);
			i++;
		}
	}
	return list;
}

/**
 * Attempts to create a non-sorted array of non-unique numbers
 *
 * @param  {Number} min The minimum value a number could be
 * @param  {Number} max The maximum value a number could be
 * @param  {Number} ln  The length of the array
 *
 * @return {Array}      An unsorted array of non-unique numbers
 */
function nonUniqueList(min, max, ln) {
	'use strict';

	var list = [];

	if (ln > max) {
		ln = max;
	}


	for (var i = 0; i < ln; i++) {
		var n = random(min, max);
		list.push(n);
	}
	return list;
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
	nonUniqueList: nonUniqueList,
	random: random,
	rangeOverlap: rangeOverlap,
	uniqueList: uniqueList
};
