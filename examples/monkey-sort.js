var Profilerz = require('../index.js').Profiler(),
	utils = require('../lib/utils');

var list = [],
	limit = 12;
// generate some numbers for the list
for (var i = 0; i < limit; i++) {
	list.push(utils.numbers.random(0, limit));
}
var args = [
	list
];

/**
 * Simple monkey sort implementation...
 *
 * @param  {Array} _list An unsorted array of numbers (hopefully)
 *
 * @return {Array}       a sorted array of number
 */
var monkey = function (_list) {
	'use strict';

	var unsorted = true;
	while (unsorted) {
		var temp;
		var indx1 = Math.floor(Math.random() * (_list.length));
		var indx2 = Math.floor(Math.random() * (_list.length));

		// switch
		temp = _list[indx1];
		// console.log(indx1, _list[indx1]);
		_list[indx1] = _list[indx2];
		_list[indx2] = temp;
		// unsorted = false;

		for (var i = 0; i < _list.length - 1; i++) {
			if (_list[i] > _list[i + 1]) {
				unsorted = true;
				break;
			}
			unsorted = false;
		}
		if (!unsorted) {
			console.log(_list);
		}
	}
	return _list;
};

Profilerz.speed(monkey, args, 20);
