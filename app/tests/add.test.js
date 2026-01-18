const { add } = require('../src/index');

test('1 + 2 should equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
