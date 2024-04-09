import { getUser } from './apiCaller';

// fetch 함수를 모의 함수로 대체
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ id: 1, name: 'John Doe' }),
  }),
) as jest.Mock;

test('사용자 정보를 가져온다', async () => {
  const user = await getUser(1);
  expect(user).toEqual({ id: 1, name: 'John Doe' });
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('https://api.example.com/users/1');
});
