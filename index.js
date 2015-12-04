'use strict';
var childProcess = require('child_process');
var readChunk = require('read-chunk');
var shebangCommand = require('shebang-command');

module.exports = function (bin, args, opts, cb) {
	opts = opts || {};

	if (typeof args === 'function') {
		cb = args;
		opts = {};
		args = [];
	}

	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	readChunk(bin, 0, 150, function (err, buf) {
		if (err) {
			cb(err);
			return;
		}

		var cmd = shebangCommand(buf.toString());

		args.unshift(bin);
		childProcess.execFile(cmd, args, opts, cb);
	});
};
