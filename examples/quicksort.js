var Profilerz = require('../index.js').Profiler(),
	utils = require('../lib/utils');

var list = [],
	limit = 1000000;

// generate some numbers for the list
for (var i = 0; i < limit; i++) {
	// does not account for repeats
	list.push(utils.numbers.random(0, limit));
}
var args = [
	list
];

/**
 * quicksort implementation...
 *
 * @param  {Array} _list An unsorted array of numbers (hopefully)
 *
 * @return {Array}       a sorted array of number
 */
var quicksort = function (_list, _left, _right) {
	'use strict';

	function _swap(items, a, b) {
		var temp = items[a];
		items[a] = items[b];
		items[b] = temp;
	}

	function _partition(items, left, right) {
		var pivot = items[Math.floor((left + right) / 2)],
			l = left,
			r = right;

		// while left is less than right
		while (l <= r) {
			// walk up the list
			while(items[l] < pivot) {
				l++;
			}

			// walk down the list
			while(items[r] > pivot) {
				r--;
			}

			// if `left` is less than right, swap 'em
			if (l <= r) {
				_swap(items, l, r);
				l++;
				r--;
			}
		}

		return l;
	}

	var index;

	if (_list.length > 1) {
		index = _partition(_list, _left, _right);

		if (_left < index - 1) {
			quicksort(_list, _left, index - 1);
		}

		if (index < _right) {
			quicksort(_list, index, _right);
		}
	}

	return _list;
};

// quicksort(list, 0, list.length - 1);
Profilerz.speed(quicksort, args, 21);
