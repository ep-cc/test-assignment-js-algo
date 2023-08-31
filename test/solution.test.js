const solve = require('../solution');

test('checking empty array', () => {
   expect(solve([])).toBe(0);
});

test('checking array with one element', () => {
  const theElement = Math.floor(Math.random() * 100);
  const input = [theElement];
  expect(solve(input)).toBe(theElement);
});

test('checking array with more elements', () => {
  const input = [3, 1, 4, 2, 34, 2, 36, 12];
  expect(solve(input)).toBe(70);
});
