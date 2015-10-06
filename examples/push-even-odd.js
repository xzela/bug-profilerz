var Profilerz = require('../index.js').Profiler();

// arguments to pass into your test function
var args = [
	[],
	[],
	1000000
];

// the actual fun you want to test
var pushFn = function (even, odd, limit) {
	'use strict';

	// // slowest
	for (var i = 0; i < limit; i++) {
		if ((i % 2) === 0) {
			even.push(i);
			continue;
		}
		odd.push(i);
	}

	// Fastest?
	// for (var i = 0; i < limit; i++) {
	// 	odd.push(i);
	// 	even.push(++i);
	// }

	// Faster?
	// for (var i = 0; i < limit; i += 2) {
	// 	even.push(i);
	// }
	// for (var i = 1; i < limit; i += 2) {
	// 	odd.push(i);
	// }
};

// start!
Profilerz.speed(pushFn, args, 100);
