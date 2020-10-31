import {after} from './index'

test('after()', () => {
  expect(
    after([1, 2], 1)
  ).toBe(2)
})
