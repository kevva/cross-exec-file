# cross-exec-file [![Build Status](https://travis-ci.org/kevva/cross-exec-file.svg?branch=master)](https://travis-ci.org/kevva/cross-exec-file)

> Cross platform `execFile`


## Install

```
$ npm install cross-exec-file
```


## Usage

```js
const crossExecFile = require('cross-exec-file');

crossExecFile('cli.js', ['unicorn']).then(res) => {
	console.log(res.stdout);
	//=> 'unicorns & rainbows'
});
```


## API

### crossExecFile(bin, [args], [options])

Returns a `Promise` for a result `Object` with `stdout` and `stderr` properties.

#### bin

Type: `string`

Path to your binary to be ran.

#### args

Type: `Array`

Arguments to run your binary with.

#### options

Type: `Object`

Provide options to be used with [`execFile`](https://nodejs.org/api/child_process.html#child_process_child_process_execfile_file_args_options_callback)


## Related

* [execa](https://github.com/sindresorhus/execa) - A better `child_process`
* [cross-spawn](https://github.com/IndigoUnited/node-cross-spawn) - A cross platform solution to node's `spawn` and `spawnSync`


## License

MIT © [Kevin Martensson](https://github.com/kevva)
