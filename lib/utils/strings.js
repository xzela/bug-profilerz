
/**
 * Attempts to generate a random string for a given length.
 * If no length is givem, then a length of `1` will be used
 *
 * @param  {Number} len The length of the string you want to create
 *
 * @return {String}
 */
function random(len) {
	'use strict';

	// make sure we've got a length
	len = len || 1;

	var string = "",
		possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (var i = 0; i < len; i++) {
		string += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return string;
}

module.exports = {
	random: random
};
