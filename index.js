'use strict';
const childProcess = require('child_process');
const pify = require('pify');
const readChunk = require('read-chunk');
const shebangCommand = require('shebang-command');

module.exports = (bin, args, opts) => {
	args = Array.isArray(args) ? args : [];
	opts = Object.assign({}, opts);

	return readChunk(bin, 0, 150)
		.then(buf => shebangCommand(buf.toString()))
		.then(cmd => {
			const execFileP = pify(childProcess.execFile, {multiArgs: true});
			const binary = cmd ? cmd : bin;

			if (cmd) {
				args.splice(0, 0, bin);
			}

			return execFileP(binary, args, opts).then(res => ({
				stdout: res[0].trim(),
				stderr: res[1].trim()
			}));
		});
};
