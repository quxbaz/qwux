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
