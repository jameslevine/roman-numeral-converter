const test = require('tape');
const romanizer = require('./romanizer')

test('Tape is working', (t) => {
  t.equal(1, 1, "one should equal 1");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(1);
  const expected = 'I';
  t.equal(actual, expected, "input 1 should return I");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(2);
  const expected = 'II';
  t.equal(actual, expected, "input 2 should return II");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(3);
  const expected = 'III';
  t.equal(actual, expected, "input 3 should return III");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(4);
  const expected = 'IV';
  t.equal(actual, expected, "input 4 should return IV");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(5);
  const expected = 'V';
  t.equal(actual, expected, "input 5 should return V");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(6);
  const expected = 'VI';
  t.equal(actual, expected, "input 6 should return VI");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(7);
  const expected = 'VII';
  t.equal(actual, expected, "input 7 should return VII");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(8);
  const expected = 'VIII';
  t.equal(actual, expected, "input 8 should return VIII");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(9);
  const expected = 'IX';
  t.equal(actual, expected, "input 9 should return IX");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(10);
  const expected = 'X';
  t.equal(actual, expected, "input 10 should return X");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(11);
  const expected = 'XI';
  t.equal(actual, expected, "input 11 should return XI");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(12);
  const expected = 'XII';
  t.equal(actual, expected, "input 12 should return XII");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(13);
  const expected = 'XIII';
  t.equal(actual, expected, "input 13 should return XIII");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(14);
  const expected = 'XIV';
  t.equal(actual, expected, "input 14 should return XIV");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(15);
  const expected = 'XV';
  t.equal(actual, expected, "input 15 should return XV");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(16);
  const expected = 'XVI';
  t.equal(actual, expected, "input 16 should return XVI");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(17);
  const expected = 'XVII';
  t.equal(actual, expected, "input 17 should return XVII");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(18);
  const expected = 'XVIII';
  t.equal(actual, expected, "input 18 should return XVIII");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(19);
  const expected = 'XIX';
  t.equal(actual, expected, "input 19 should return XIX");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(20);
  const expected = 'XX';
  t.equal(actual, expected, "input 20 should return XX");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(40);
  const expected = 'XL';
  t.equal(actual, expected, "input 40 should return XL");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(90);
  const expected = 'XC';
  t.equal(actual, expected, "input 90 should return XC");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(100);
  const expected = 'C';
  t.equal(actual, expected, "input 100 should return C");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(400);
  const expected = 'CD';
  t.equal(actual, expected, "input 400 should return CD");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(500);
  const expected = 'D';
  t.equal(actual, expected, "input 500 should return D");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(900);
  const expected = 'CM';
  t.equal(actual, expected, "input 900 should return CM");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(1000);
  const expected = 'M';
  t.equal(actual, expected, "input 1000 should return M");
  t.end();
});

test('Romanizer output', (t) => {
  const actual = romanizer(0);
  const expected = 'Sorry no result for numbers < 1';
  t.equal(actual, expected, "input 0 should return 0");
  t.end();
});
