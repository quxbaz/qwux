import {
  // Array
  after, before, last, without, uniq, move,

  // Object
  each, values, pick, omit, objectMap, toArray,

  // String
  capitalize,

  // Values
  // isEmpty, isNil,

  // Math
  // constrain,

  // Timing
  // throttle,

  // Sorting
  // sortBy,

  // Functions
  // times,

  // Misc
  // uniqueId,
} from './index'


/* SECTION: Array */

describe("after", () => {
  test("Gets the item after an item in an array.", () => {
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
  test("Gets the item before an item in an array.", () => {
    expect(before([1, 2, 3], 1)).toEqual(undefined)
    expect(before([1, 2, 3], 2)).toEqual(1)
    expect(before([1, 2, 3], 3)).toEqual(2)
    expect(before([1, 2, 3], 42)).toEqual(undefined)
    const o = {}
    expect(before([1, o, 3], o)).toEqual(1)
    expect(before([1, {}, 3], {})).toEqual(undefined)
  })
})

describe("last", () => {
  test("Gets the last item in an array.", () => {
    expect(last([])).toEqual(undefined)
    expect(last([1])).toEqual(1)
    expect(last([1, 2])).toEqual(2)
    expect(last([1, 2, 3])).toEqual(3)
  })
})

describe("without", () => {
  test("Returns an array with items filtered out.", () => {
    expect(without([], '')).toEqual([])
    expect(without([1, 2], 2)).toEqual([1])
    expect(without([1, 2], 1, 2)).toEqual([])
    expect(without([[1], 2], [1])).toEqual([[1], 2])
    expect(without([1, 2, 3], 1, 2, 3)).toEqual([])
  })
  test("Matches arrays and objects.", () => {
    const arr:object = []
    expect(without([arr], arr)).toEqual([])
    const obj = {}
    expect(without([obj, 'a'], obj)).toEqual(['a'])
  })
  test("Returns the same values if nothing was filtered out", () => {
    const arr = [1, 2, 3]
    expect(without(arr, 4)).toEqual([1, 2, 3])
  })
  test("Always returns a new array even if no change occurred.", () => {
    const arr = [1, 2, 3]
    expect(without(arr, 4)).not.toBe(arr)
  })
})

describe("uniq", () => {
  test("Retains only unique items in an array.", () => {
    expect(uniq([])).toEqual([])
    expect(uniq([1])).toEqual([1])
    expect(uniq([1, 2])).toEqual([1, 2])
    expect(uniq([1, 1, 2])).toEqual([1, 2])
    expect(uniq([1, 1, 2, 2, 3])).toEqual([1, 2, 3])
    expect(uniq([1, 1, 1])).toEqual([1])
    expect(uniq([{a:1}, {a:1}])).toEqual([{a:1}, {a:1}])
  })
})

describe("move", () => {
  test("Maps each value in an object and returns a new object.", () => {
    expect(move(['a', 'b', 'c'], 0, 1)).toEqual(['b', 'a', 'c'])
    expect(move(['a', 'b', 'c'], 1, 0)).toEqual(['b', 'a', 'c'])
    expect(move(['a', 'b', 'c'], 1, 2)).toEqual(['a', 'c', 'b'])
    expect(move(['a', 'b', 'c'], 2, 1)).toEqual(['a', 'c', 'b'])
    expect(move(['a', 'b', 'c'], 0, 2)).toEqual(['b', 'c', 'a'])
    expect(move(['a', 'b', 'c'], 2, 0)).toEqual(['c', 'a', 'b'])
  })
})


/* SECTION: Object */

describe("each", () => {
  test("Iterates over an object.", () => {
    let i = ''
    each({a:1, b:2, c:3}, (value, key) => {
      i += key + value
    })
    expect(i).toEqual('a1b2c3')
  })
  test("Returns the results of the callback against an object.", () => {
    const obj = {a:1, b:2, c:3}
    expect(
      each(obj, (v, k) => k + v)
    ).toEqual(['a1', 'b2', 'c3'])
  })
})

describe("values", () => {
  test("Gets the values from an object.", () => {
    expect(values({})).toEqual([])
    expect(values({a:1})).toEqual([1])
    expect(values({a:1, b:2})).toEqual([1, 2])
    expect(values({1:'a', 2:'b'})).toEqual(['a', 'b'])
  })
})

describe("pick", () => {
  test("Picks props from an object.", () => {
    expect(pick({}, 'a')).toEqual({})
    expect(pick({}, 1)).toEqual({})
    expect(pick({a:1, b:2}, 'a', 'a')).toEqual({a:1})
    expect(pick({1:'a', 2:'b'}, 1, 2)).toEqual({1:'a', 2:'b'})
    expect(pick({a:1, b:2}, 'a', 'b')).toEqual({a:1, b:2})
    expect(pick({a:1, b:2}, 'a', 'b', 'c')).toEqual({a:1, b:2})
  })
})

describe("omit", () => {
  test("Omits props from an object.", () => {
    expect(omit({}, 'a')).toEqual({})
    expect(omit({a:1}, 'a')).toEqual({})
    expect(omit({a:1}, 'b')).toEqual({a:1})
    expect(omit({a:1, b:2}, 'a', 'b')).toEqual({})
    expect(omit({a:1, b:2}, 'a', 'b', 'c')).toEqual({})
  })
})

describe("objectMap", () => {
  test("Maps each value in an object and returns a new object.", () => {
    expect(objectMap({}, (x) => x)).toEqual({})
    expect(objectMap({a:1}, (v) => v * 2)).toEqual({a:2})
    expect(objectMap({a:1, b:2}, (v) => v * 2)).toEqual({a:2, b:4})
    expect(objectMap({a:1, b:2}, (v, k) => (k as string) + v)).toEqual({a:'a1', b:'b2'})
  })
  test("Does not alter the original object.", () => {
    const o = {a:1}
    expect(objectMap(o, (v) => v + 1)).not.toBe(o)
    expect(o).toEqual({a:1})
  })
})

describe("toArray", () => {
  test("Converts an object to an array.", () => {
    expect(toArray({})).toEqual([])
    expect(toArray({a:1})).toEqual([{a:1}])
    expect(toArray({a:1, b:2})).toEqual([{a:1}, {b:2}])
    expect(toArray({a:1, b:2, c:3})).toEqual([{a:1}, {b:2}, {c:3}])
    expect(toArray({a:1, b:{c:3}})).toEqual([{a:1}, {b:{c:3}}])
  })
})


/* SECTION: string */

describe("capitalize()", () => {
  test("Does nothing when passed an empty string.", () => {
    expect(capitalize('')).toEqual('')
  })
  test("Capitalizes a single letter.", () => {
    expect(capitalize('a')).toEqual('A')
  })
  test("Capitalizes a string.", () => {
    expect(capitalize('foo')).toEqual('Foo')
  })
  test("Capitalizes only the first character of a multi-word string.", () => {
    expect(capitalize('foo foo')).toEqual('Foo foo')
  })
})


/* SECTION: values */

// describe("isEmpty", () => {
//   test("Checks if a value is empty.", () => {
//     expect(isEmpty(undefined)).toBe(true)
//     expect(isEmpty(null)).toBe(true)
//     expect(isEmpty(1)).toBe(true)
//     expect(isEmpty('')).toBe(true)
//     expect(isEmpty([])).toBe(true)
//     expect(isEmpty({})).toBe(true)
//   })
//   test("Checks if a value is not empty.", () => {
//     expect(isEmpty('a')).toBe(false)
//     expect(isEmpty('ab')).toBe(false)
//     expect(isEmpty([1])).toBe(false)
//     expect(isEmpty([1, 2])).toBe(false)
//     expect(isEmpty([{a: 1}])).toBe(false)
//     expect(isEmpty([{a: 1, b: 2}])).toBe(false)
//   })
// })

// describe("isNil", () => {
//   test("Checks if a value is undefined.", () => {
//     expect(isNil(undefined)).toBe(true)
//     let a
//     expect(isNil(a)).toBe(true)
//     let d = {}
//     expect(isNil(d.foo)).toBe(true)
//     expect(isNil(d)).toBe(false)
//     expect(isNil(1)).toBe(false)
//     expect(isNil('a')).toBe(false)
//     expect(isNil('undefined')).toBe(false)
//     expect(isNil(0)).toBe(false)
//   })
//   test("Checks if a value is null.", () => {
//     expect(isNil(null)).toBe(true)
//   })
// })


/* SECTION: Math */

// describe("constrain()", () => {
//   test("returns a number within its proper range.", () => {
//     expect(
//       constrain(5, [0, 10])
//     ).toEqual(5)
//   })
//   test("forces a minimum.", () => {
//     expect(
//       constrain(-1, [0, 10])
//     ).toEqual(0)
//   })
//   test("forces a maximum.", () => {
//     expect(
//       constrain(100, [0, 10])
//     ).toEqual(10)
//   })
// })


/* SECTION: Timing */

// describe("throttle", () => {
//   test("Calls a function twice in succession, but only executes it once.", () => {
//     let spy = 0
//     let fn = () => spy++
//     let fn2 = throttle(fn, 100)
//     fn2()
//     fn2()
//     expect(spy).toEqual(1)
//   })
// })


/* SECTION: Sorting*/

// describe("sortBy", () => {
//   test("Returns an empty list.", () => {
//     expect(sortBy([])).toEqual([])
//   })
//   test("Sorts a list.", () => {
//     expect(sortBy([{a:1}])).toEqual([{a:1}])
//     expect(sortBy([{a:1}, {a:2}], 'a')).toEqual([{a:1}, {a:2}])
//     expect(sortBy([{a:2}, {a:1}], 'a')).toEqual([{a:1}, {a:2}])
//     expect(sortBy([{a:1}, {a:2}, {a:3}], 'a')).toEqual([{a:1}, {a:2}, {a:3}])
//     expect(sortBy([{a:2}, {a:1}, {a:3}], 'a')).toEqual([{a:1}, {a:2}, {a:3}])
//     expect(sortBy([{a:2}, {a:3}, {a:1}], 'a')).toEqual([{a:1}, {a:2}, {a:3}])
//     expect(sortBy([{a:4}, {a:3}, {a:2}, {a:1}], 'a')).toEqual([{a:1}, {a:2}, {a:3}, {a:4}])
//     expect(sortBy([{a:4}, {a:5}, {a:2}, {a:1}], 'a')).toEqual([{a:1}, {a:2}, {a:4}, {a:5}])
//   })
//   test("Returns a new list", () => {
//     const list = [{a:1}, {b:2}]
//     expect(sortBy(list)).toEqual([{a:1}, {b:2}])
//     expect(sortBy(list)).not.toBe(list)
//   })
// })


/* SECTION: Functions */

// describe("times", () => {
//   test("Calls a function N times.", () => {
//     let i = 0
//     const fn = () => i++
//     times(5, fn)
//     expect(i).toEqual(5)
//   })
//   test("Calls the function with the current iteration.", () => {
//     let i = 0
//     const fn = (n) => i += n
//     times(5, fn)
//     expect(i).toEqual(0 + 1 + 2 + 3 + 4)
//   })
//   test("Returns the results of the callbacks.", () => {
//     expect(times(5, (i) => i)).toEqual([0, 1, 2, 3, 4])
//   })
//   test("Returns a value N times.", () => {
//     expect(times(3, null)).toEqual([null, null, null])
//     expect(times(3, 'a')).toEqual(['a', 'a', 'a'])
//     expect(times(3, {a:1})).toEqual([{a:1}, {a:1}, {a:1}])
//     expect(times(3, [1, 2])).toEqual([[1, 2], [1, 2], [1, 2]])
//   })
// })


/* Section: Misc */

// describe("uniqueId", () => {
//   test("ids begin at 0.", () => {
//     expect(uniqueId()).toBe('0')
//   })
//   test("ids are string types.", () => {
//     expect(typeof uniqueId()).toBe('string')
//   })
//   test("Generates unique ids.", () => {
//     const ids = new Set()
//     for (let i=0; i < 1000; i++) {
//       ids.add(uniqueId())
//     }
//     expect(ids.size).toEqual(1000)
//   })
// })
