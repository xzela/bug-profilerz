var Profilerz = require('../../../index.js').Profiler(),
	utils = require('../../../lib/utils');

var args = [
	1,
	10000000,
	10000000
];

var nonUniqueList = utils.numbers.nonUniqueList;

Profilerz.speed(nonUniqueList, args, 20);
