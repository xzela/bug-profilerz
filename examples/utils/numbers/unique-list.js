var Profilerz = require('../../../index.js').Profiler(),
	utils = require('../../../lib/utils');

var args = [
	0,
	1000000,
	50000
];

var uniqueList = utils.numbers.uniqueList;

Profilerz.speed(uniqueList, args, 20);
