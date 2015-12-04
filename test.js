import path from 'path';
import pify from 'pify';
import test from 'ava';
import fn from './';

test(async t => {
	const data = await pify(fn)(path.join(__dirname, 'fixture.js'));
	t.is(data.trim(), 'unicorns and cats');
});
