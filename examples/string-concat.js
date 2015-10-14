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


function makeId(len) {
	'use strict';

    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < len; i++ ) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}

// the actual fun you want to test
var stringConcat = function (strings) {
	'use strict';
	var string = '';
	for (var i = 0; i < strings.length; i++) {
		string += strings[i];
	}
	return string;
};


// console.log(stringConcat(data));

// start!
Profilerz.speed(stringConcat, args, 100000);
