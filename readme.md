# cross-exec-file [![Build Status](https://travis-ci.org/kevva/cross-exec-file.svg?branch=master)](https://travis-ci.org/kevva/cross-exec-file)

> Cross platform `execFile`


## Install

```
$ npm install --save cross-exec-file
```


## Usage

```js
const crossExecFile = require('cross-exec-file');

crossExecFile('cli.js', ['unicorn'], (err, stdout, stderr) => {
	console.log(stdout);
	//=> 'unicorns & rainbows'
});
```


## API

### crossExecFile(bin, [args], [options], callback)

#### bin

*Required*  
Type: `string`

Path to your binary to be ran.

#### args

Type: `array`

Arguments to run your binary with.

#### options

Provide options to be used with [`execFile`](https://nodejs.org/api/child_process.html#child_process_child_process_execfile_file_args_options_callback)

##### path

Type: `string`
Default: `node`

A custom path to a `node` executable.


## License

MIT © [Kevin Martensson](http://github.com/kevva)
