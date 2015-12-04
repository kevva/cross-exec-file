'use strict';
var childProcess = require('child_process');

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

	var node = opts.path || 'node';
	delete opts.path;
	args.unshift(bin);

	childProcess.execFile(node, args, opts, cb);
};
