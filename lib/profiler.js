
function Profiler () {
	'use strict';

	var publicAPI;

	/**
	 * Deep copy an array or object
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
		var startTime, endTime,
			_args = [],
			sumTime = 0,
			averageTime = 0,
			trueStartTime = +new Date();
		for (var i = 0, x = reps; i < x; i++) {
			var time = 0;
			// copy the array
			// this seems to be the slowest part!
			_args = _copy(args);
			startTime = +new Date();
			fn.apply({}, _args);
			time = +new Date() - startTime;
			sumTime += time;
			console.log('test', i + 1, 'of', x, 'completed in', time, 'mills');
		}
		averageTime = (sumTime / reps);

		console.log('average execution time:', (averageTime / 1000).toFixed(2), 'seconds');
		console.log('total time:', ((+new Date() - trueStartTime) / 1000).toFixed(2), 'seconds');
	}

	publicAPI = {
		speed: speed
	};

	return publicAPI;
}

var exports = module.exports = Profiler;
