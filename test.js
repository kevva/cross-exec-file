import path from 'path';
import test from 'ava';
import m from '.';

test('node', async t => {
	const {stdout} = await m(path.join(__dirname, 'fixture.js'));
	t.is(stdout, 'unicorns and cats');
});

test('bash', async t => {
	const {stdout} = await m(path.join(__dirname, 'fixture.sh'));
	t.is(stdout, 'unicorns and cats');
});
