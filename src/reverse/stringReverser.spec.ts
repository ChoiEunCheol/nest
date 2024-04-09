import { stringReverser } from './stringReverser';

test('문자열을 반전시킨다', () => {
  expect(stringReverser('hello')).toBe('olleh');
});
