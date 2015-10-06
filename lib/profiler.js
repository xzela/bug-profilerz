
function Profiler () {
	'use strict';
	var publicAPI;

	/**
	 * Deep copy of an array or object
	 *
	 * Stolen from:
	 * http://james.padolsey.com/javascript/deep-copying-of-objects-and-arrays/
	 *
	 * @param  {Mixed]} obj 		Thing you want to copy
	 *
	 * @return {Object||Array}     	A deeply copied object/array
	 */
	function _copy(obj) {
		var out, i;
		if (Object.prototype.toString.call(obj) === '[object Array]') {
			out = [];
			i = 0;
			var len = obj.length;
			for ( ; i < len; i++ ) {
				out[i] = _copy(obj[i]);
			}
			return out;
		}
		if (typeof obj === 'object') {
			out = {};
			for ( i in obj ) {
				out[i] = _copy(obj[i]);
			}
			return out;
		}
		return obj;
	}

	/**
	 * Tests to need for speed!
	 *
	 * @param  {Function} fn   The function you're try to speed test
	 * @param  {Mixed} params  Any number of parameters to make your the
	 *                             given function to work
	 * @param  {Number} testRep    The number of times you want the function to
	 *                             be tested.
	 *
	 */
	function speed(fn, args, reps) {
		reps = reps || 100;
		var startTime, endTime, _args = [],
			sumTime = 0,
			averageTime = 0;

		for (var i = 0, x = reps; i < x; i++) {
			// copy the array
			_args = _copy(args);
			startTime = +new Date();
			fn.apply({}, _args);
			endTime = +new Date();
			sumTime += endTime - startTime;
		}

		return console.log('average time:', sumTime / reps, 'mills');
	}

	publicAPI = {
		speed: speed
	};

	return publicAPI;
}

var exports = module.exports = Profiler;
