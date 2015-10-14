var Profilerz = require('../index.js').Profiler(),
	utils = require('../lib/utils');

var data = [],
	_length = 1000;
for (var i = 0; i < _length; i++) {
	data.push(utils.strings.random(_length));
}

// arguments to pass into your test function
var args = [
	data
];




var arrayJoin = function (strings) {
	'use strict';
	return strings.join('');
};

// console.log(stringConcat(data));
Profilerz.speed(arrayJoin, args, 100000);
