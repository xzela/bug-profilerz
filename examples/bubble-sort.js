var Profilerz = require('../index.js').Profiler(),
	utils = require('../lib/utils');

var list = [];
// generate some numbers for the list
for (var i = 0; i < 10000; i++) {
	list.push(utils.numbers.random(i, 100000));
}
var args = [
	list
];

/**
 * Simple bubble sort implementation...
 *
 * @param  {Array} _list An unsorted array of numbers (hopefully)
 *
 * @return {Array}       a sorted array of number
 */
var bubble = function (_list) {
	'use strict';

	var swapped = true;
	var j = 0;
	var temp;
	while (swapped) {
		swapped = false;
		j++;
		for (var i = 0; i < _list.length - j; i++) {
			if (_list[i] > _list[i + 1]) {
				temp = _list[i];
				list[i] = list[i + 1];
				list[i + 1] = temp;
				swapped = true;
			}
		}
	}
	return _list;
};

Profilerz.speed(bubble, args, 10);
