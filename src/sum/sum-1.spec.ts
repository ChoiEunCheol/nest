import sum from './sum';

test('1 + 2는 3이어야 함', () => {
  expect(sum(1, 2)).toBe(4);
});