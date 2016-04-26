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
