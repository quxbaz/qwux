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

  it("Returns a value N times.", () => {
    expect(times(3, null)).toEqual([null, null, null])
    expect(times(3, 'a')).toEqual(['a', 'a', 'a'])
    expect(times(3, {a:1})).toEqual([{a:1}, {a:1}, {a:1}])
    expect(times(3, [1, 2])).toEqual([[1, 2], [1, 2], [1, 2]])
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

describe("capitalize()", () => {

  const capitalize = require('qux/lib/capitalize').default

  it("Does nothing when passed an empty string.", () => {
    expect(capitalize('')).toEqual('')
  })

  it("Capitalizes a single letter.", () => {
    expect(capitalize('a')).toEqual('A')
  })

  it("Capitalizes a string.", () => {
    expect(capitalize('foo')).toEqual('Foo')
  })

  it("Capitalizes only the first character of a multi-word string.", () => {
    expect(capitalize('foo foo')).toEqual('Foo foo')
  })

})

describe("constrain()", () => {

  const constrain = require('qux/lib/constrain').default

  describe("constrain()", () => {

    it("returns a number within its proper range.", () => {
      expect(
        constrain(5, [0, 10])
      ).toEqual(5)
    })

    it("forces a minimum.", () => {
      expect(
        constrain(-1, [0, 10])
      ).toEqual(0)
    })

    it("forces a maximum.", () => {
      expect(
        constrain(100, [0, 10])
      ).toEqual(10)
    })

  })

})


describe("throttle", () => {

  const throttle = require('qux/lib/throttle').default

  it("Calls a function twice in succession, but only executes it once.", () => {
    let spy = 0
    let fn = () => spy++
    let fn2 = throttle(fn, 100)
    fn2()
    fn2()
    expect(spy).toEqual(1)
  })

})

describe("isEmpty", () => {

  const isEmpty = require('qux/lib/isEmpty').default

  it("Checks if a value is empty.", () => {
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(1)).toBe(true)
    expect(isEmpty('')).toBe(true)
    expect(isEmpty([])).toBe(true)
    expect(isEmpty({})).toBe(true)
  })

  it("Checks if a value is not empty.", () => {
    expect(isEmpty('a')).toBe(false)
    expect(isEmpty('ab')).toBe(false)
    expect(isEmpty([1])).toBe(false)
    expect(isEmpty([1, 2])).toBe(false)
    expect(isEmpty([{a: 1}])).toBe(false)
    expect(isEmpty([{a: 1, b: 2}])).toBe(false)
  })

})

describe("isNil", () => {

  const isNil = require('qux/lib/isNil').default

  it("Checks if a value is undefined.", () => {
    expect(isNil(undefined)).toBe(true)
    let a
    expect(isNil(a)).toBe(true)
    let d = {}
    expect(isNil(d.foo)).toBe(true)
    expect(isNil(d)).toBe(false)
    expect(isNil(1)).toBe(false)
    expect(isNil('a')).toBe(false)
    expect(isNil('undefined')).toBe(false)
    expect(isNil(0)).toBe(false)
  })

  it("Checks if a value is null.", () => {
    expect(isNil(null)).toBe(true)
  })

})

describe("shallowEqual", () => {

  const shallowEqual = require('qux/lib/shallowEqual').default

  it("Checks if a value is undefined.", () => {

    expect(shallowEqual([], [])).toBe(true)

    var a = [1, 2]
    var b = a
    expect(shallowEqual(a, b)).toBe(true)

    expect(shallowEqual(
      [1, 2],
      [1, 2]
    )).toBe(true)

    expect(shallowEqual(
      {a:1, b:2},
      {a:1, b:2}
    )).toBe(true)

    expect(shallowEqual(
      {a:1, b:2, c:3},
      {a:1, b:2}
    )).toBe(false)

    expect(shallowEqual(
      {a:1, b:2, c:{c:3}},
      {a:1, b:2, c:{c:3}}
    )).toBe(false)

  })

})

describe("sortBy", () => {

  const sortBy = require('qux/lib/sortBy').default

  it("Returns an empty list.", () => {
    expect(sortBy([])).toEqual([])
  })

  it("Sorts a list.", () => {
    expect(sortBy([{a:1}])).toEqual([{a:1}])
    expect(sortBy([{a:1}, {a:2}], 'a')).toEqual([{a:1}, {a:2}])
    expect(sortBy([{a:2}, {a:1}], 'a')).toEqual([{a:1}, {a:2}])
    expect(sortBy([{a:1}, {a:2}, {a:3}], 'a')).toEqual([{a:1}, {a:2}, {a:3}])
    expect(sortBy([{a:2}, {a:1}, {a:3}], 'a')).toEqual([{a:1}, {a:2}, {a:3}])
    expect(sortBy([{a:2}, {a:3}, {a:1}], 'a')).toEqual([{a:1}, {a:2}, {a:3}])
    expect(sortBy([{a:4}, {a:3}, {a:2}, {a:1}], 'a')).toEqual([{a:1}, {a:2}, {a:3}, {a:4}])
    expect(sortBy([{a:4}, {a:5}, {a:2}, {a:1}], 'a')).toEqual([{a:1}, {a:2}, {a:4}, {a:5}])
  })

  it("Returns a new list", () => {
    const list = [{a:1}, {b:2}]
    expect(sortBy(list)).toEqual([{a:1}, {b:2}])
    expect(sortBy(list)).toNotBe(list)
  })

})

describe("last", () => {

  const last = require('qux/lib/last').default

  it("Gets the last item in an array.", () => {
    expect(last([])).toEqual(undefined)
    expect(last([1])).toEqual(1)
    expect(last([1, 2])).toEqual(2)
    expect(last([1, 2, 3])).toEqual(3)
  })

})

describe("toList", () => {

  const toList = require('qux/lib/toList').default

  it("Converts an object to an array.", () => {
    expect(toList({})).toEqual([])
    expect(toList({a:1})).toEqual([{a:1}])
    expect(toList({a:1, b:2})).toEqual([{a:1}, {b:2}])
    expect(toList({a:1, b:2, c:3})).toEqual([{a:1}, {b:2}, {c:3}])
    expect(toList({a:1, b:{c:3}})).toEqual([{a:1}, {b:{c:3}}])
  })

})

describe("uniq", () => {

  const uniq = require('qux/lib/uniq').default

  it("Retains only unique items in an array.", () => {
    expect(uniq([])).toEqual([])
    expect(uniq([1])).toEqual([1])
    expect(uniq([1, 2])).toEqual([1, 2])
    expect(uniq([1, 1, 2])).toEqual([1, 2])
    expect(uniq([1, 1, 2, 2, 3])).toEqual([1, 2, 3])
    expect(uniq([1, 1, 1])).toEqual([1])
    expect(uniq([{a:1}, {a:1}])).toEqual([{a:1}, {a:1}])
  })

  it("Returns the original array if items are already unique.", () => {
    const arr = [1, 2, 3]
    expect(uniq(arr)).toBe(arr)
  })

})

describe("without", () => {

  const without = require('qux/lib/without').default

  it("Returns an array with items filtered out.", () => {
    expect(without([], '')).toEqual([])
    expect(without([1, 2], 2)).toEqual([1])
    expect(without([1, 2], 1, 2)).toEqual([])
    expect(without([1, 2], [1])).toEqual([1, 2])
    expect(without([[1], 2], [1])).toEqual([[1], 2])
    expect(without([1, 2, 3], 1, 2, 3)).toEqual([])
  })

  it("Matches arrays and objects.", () => {
    const arr = []
    expect(without([arr], arr)).toEqual([])
    const obj = {}
    expect(without([obj, 'a'], obj)).toEqual(['a'])
  })

  it("Returns the original array if no change occurs.", () => {
    const arr = [1, 2, 3]
    expect(without(arr, 'foo')).toBe(arr)
  })

})

describe("after", () => {

  const after = require('qux/lib/after').default

  it("Gets the item after an item in an array.", () => {
    expect(after([1, 2, 3], 1)).toEqual(2)
    expect(after([1, 2, 3], 2)).toEqual(3)
    expect(after([1, 2, 3], 3)).toEqual(undefined)
    expect(after([1, 2, 3], 42)).toEqual(undefined)
    const o = {}
    expect(after([1, o, 3], o)).toEqual(3)
    expect(after([1, {}, 3], {})).toEqual(undefined)
  })

})

describe("before", () => {

  const before = require('qux/lib/before').default

  it("Gets the item before an item in an array.", () => {
    expect(before([1, 2, 3], 1)).toEqual(undefined)
    expect(before([1, 2, 3], 2)).toEqual(1)
    expect(before([1, 2, 3], 3)).toEqual(2)
    expect(before([1, 2, 3], 42)).toEqual(undefined)
    const o = {}
    expect(before([1, o, 3], o)).toEqual(1)
    expect(before([1, {}, 3], {})).toEqual(undefined)
  })

})

describe("mapValues", () => {

  const mapValues = require('qux/lib/mapValues').default

  it("Maps each value in an object and returns a new object.", () => {
    expect(mapValues({}, (x) => x)).toEqual({})
    expect(mapValues({a:1}, (v) => v * 2)).toEqual({a:2})
    expect(mapValues({a:1, b:2}, (v) => v * 2)).toEqual({a:2, b:4})
    expect(mapValues({a:1, b:2}, (v, k) => k + v)).toEqual({a:'a1', b:'b2'})
  })

  it("Does not alter the original object.", () => {
    const o = {a:1}
    expect(mapValues(o, (v) => v + 1)).toNotBe(o)
    expect(o).toEqual({a:1})
  })

})

describe("move", () => {

  const move = require('qux/lib/move').default

  it("Maps each value in an object and returns a new object.", () => {
    expect(move(['a', 'b', 'c'], 0, 1)).toEqual(['b', 'a', 'c'])
    expect(move(['a', 'b', 'c'], 1, 0)).toEqual(['b', 'a', 'c'])
    expect(move(['a', 'b', 'c'], 1, 2)).toEqual(['a', 'c', 'b'])
    expect(move(['a', 'b', 'c'], 2, 1)).toEqual(['a', 'c', 'b'])
    expect(move(['a', 'b', 'c'], 0, 2)).toEqual(['b', 'c', 'a'])
    expect(move(['a', 'b', 'c'], 2, 0)).toEqual(['c', 'a', 'b'])
  })

  it("Does not alter the original object if passed in the same value for @from and @to.", () => {
    const arr = [1, 2, 3]
    expect(move(arr, 1, 1)).toBe(arr)
  })

})

describe("uniqueId", () => {

  const uniqueId = require('qux/lib/uniqueId').default

  it("ids begin at 0.", () => {
    expect(uniqueId()).toBe('0')
  })

  it("ids are string types.", () => {
    expect(typeof uniqueId()).toBe('string')
  })

  it("Generates unique ids.", () => {
    const ids = new Set()
    for (let i=0; i < 1000; i++) {
      ids.add(uniqueId())
    }
    expect(ids.size).toEqual(1000)
  })

})
