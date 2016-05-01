import expect from 'expect'

describe("omit", () => {

  const omit = require('qux/lib/omit').default

  it("Omits props from an object.", () => {
    expect(omit({}, 'a')).toEqual({})
    expect(omit({a:1}, 'a')).toEqual({})
    expect(omit({a:1}, 'b')).toEqual({a:1})
    expect(omit({a:1}, ['a'])).toEqual({})
    expect(omit({a:1, b:2}, ['a'])).toEqual({b:2})
    expect(omit({a:1, b:2}, ['a', 'b'])).toEqual({})
    expect(omit({a:1, b:2}, 'a', 'b')).toEqual({})
    expect(omit({a:1, b:2}, 'a', 'b', 'c')).toEqual({})
  })

  it("Can take a predicate argument.", () => {
    expect(
      omit({}, (v, k) => true)
    ).toEqual({})
    expect(
      omit({}, (v, k) => false)
    ).toEqual({})
    expect(
      omit({a:1, b:2}, (v, k) => false)
    ).toEqual({a:1, b:2})
    expect(
      omit({a:1, b:2}, (v, k) => true)
    ).toEqual({})
    expect(
      omit({a:1, b:2, c:3}, (v, k) => v > 1)
    ).toEqual({a:1})
    expect(
      omit({a:1, b:2, c:3}, (v, k) => k === 'c')
    ).toEqual({a:1, b:2})
  })

})


describe("pick", () => {

  const pick = require('qux/lib/pick').default

  it("Picks props from an object.", () => {
    expect(pick({}, 'a')).toEqual({})
    expect(pick({}, ['a'])).toEqual({})
    expect(pick({}, ['a', 'b'])).toEqual({})
    expect(pick({}, 1)).toEqual({})
    expect(pick({a:1}, 'a')).toEqual({a:1})
    expect(pick({a:1}, ['a'])).toEqual({a:1})
    expect(pick({a:1}, ['a', 'b'])).toEqual({a:1})
    expect(pick({a:1, b:2}, ['a', 'b'])).toEqual({a:1, b:2})
    expect(pick({a:1, b:2}, 'a', 'b')).toEqual({a:1, b:2})
    expect(pick({a:1, b:2}, 'a', 'b', 'c')).toEqual({a:1, b:2})
  })

  it("Can take a predicate argument.", () => {
    expect(
      pick({}, (v, k) => true)
    ).toEqual({})
    expect(
      pick({}, (v, k) => false)
    ).toEqual({})
    expect(
      pick({a:1, b:2, c:3}, (v, k) => false)
    ).toEqual({})
    expect(
      pick({a:1, b:2, c:3}, (v, k) => true)
    ).toEqual({a:1, b:2, c:3})
    expect(
      pick({a:1, b:2, c:3}, (v, k) => v > 1)
    ).toEqual({b:2, c:3})
    expect(
      pick({a:1, b:2, c:3}, (v, k) => k !== 'c')
    ).toEqual({a:1, b:2})
  })

})

describe("times", () => {

  const times = require('qux/lib/times').default

  it("Calls a function N times.", () => {
    let i = 0
    const fn = () => i++
    times(5, fn)
    expect(i).toEqual(5)
  })

  it("Calls the function with the current iteration.", () => {
    let i = 0
    const fn = (n) => i += n
    times(5, fn)
    expect(i).toEqual(0 + 1 + 2 + 3 + 4)
  })

  it("Returns the results of the callbacks.", () => {
    expect(times(5, (i) => i)).toEqual([0, 1, 2, 3, 4])
  })

})

describe("values", () => {

  const values = require('qux/lib/values').default

  it("Gets the values from an object.", () => {
    expect(values({})).toEqual([])
    expect(values({a:1})).toEqual([1])
    expect(values({a:1, b:2})).toEqual([1, 2])
    expect(values({1:'a', 2:'b'})).toEqual(['a', 'b'])
  })

})

describe("each", () => {

  const each = require('qux/lib/each').default

  it("Iterates over an array.", () => {
    let i = 0
    each([0, 1, 2], (value, index) => {
      i += value + index
    })
    expect(i).toEqual(6)
  })

  it("Iterates over an object.", () => {
    let i = ''
    each({a:1, b:2, c:3}, (value, key) => {
      i += key + value
    })
    expect(i).toEqual('a1b2c3')
  })

  it("Returns the results of the callback against an array.", () => {
    const list = [1, 2, 3]
    expect(each(list, (x) => x * 2)).toEqual([2, 4, 6])
  })

  it("Returns the results of the callback against an object.", () => {
    const obj = {a:1, b:2, c:3}
    expect(each(obj, (v, k) => k + v)).toEqual(['a1', 'b2', 'c3'])
  })

})
