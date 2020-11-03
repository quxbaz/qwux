/* Useful types */

type Key = string | number
type Obj<T> = Record<Key, T>;
type Collection<T> = T[] | Obj<T>


/* SECTION: Arrays */

/**
 * Gets the item afterr an item in an array.
 *
 * @param {array} array
 * @param {value} item
 *
 * @return {value}
 */
const after = <T>(array:T[], item:T): T | undefined => {
  const index = array.indexOf(item)
  if (index === -1)
    return undefined
  return array[index + 1]
}

/**
 * Gets the item before an item in an array.
 *
 * @param {array} array
 * @param {value} item
 *
 * @return {value}
 */
const before = <T>(array:T[], item:T): T | undefined => {
  const index = array.indexOf(item)
  if (index === -1)
    return undefined
  return array[index - 1]
}

/**
 * Gets the last item in an array.
 * @param {array} array
 * @return {value}
 */
const last = <T>(array:T[]): T | undefined => array[array.length - 1]

/**
 * Returns an array with items filtered out.
 *
 * @param {array} array
 * @param {...values} items
 *
 * @return {array}
 */
const without = <T>(array:T[], ...items:T[]): T[] => (
  array.filter(item => !items.includes(item))
)

/**
 * Retains only unique values from an array.
 *
 * @param {array} array
 *
 * @return {array}
 */
const uniq = <T>(array:T[]): T[] => Array.from(new Set(array))

/**
 * Inserts an item into the array at a position. If the position
 * exceeds the length of the array, append the item.
 *
 * @param {array} array
 * @param {number} i
 * @param {value} item
 *
 * @return {array}
 */
const insert = <T>(array:T[], i:number, ...items:T[]): T[] => ([
  ...array.slice(0, i),
  ...items,
  ...array.slice(i),
])

/**
 * Moves an item in an array to another position and returns the new
 * array.
 *
 * @param {array} arr
 * @param {number} from
 * @param {number} to
 *
 * @return {array}
 */
const move = <T>(array:T[], from:number, to:number): T[] => {
  const copy = [...array]
  if (from === to)
    return copy
  const item = copy.splice(from, 1)[0]
  copy.splice(to, 0, item)
  return copy
}

/**
 * Divides an array into two parts at a position.
 *
 * @param {array} array
 * @param {number} i
 *
 * @return {array} [leftArray, rightArray]
 */
const divide = <T>(array:T[], i:number): [T[], T[]] => (
  [array.slice(0, i), array.slice(i)]
)

/**
 * Gets a random item from an array.
 *
 * @param {array} array
 *
 * @return A random item from the array.
 */
const getRandomItem = <T>(array:T[]): T => (
  array[Math.floor(Math.random() * array.length)]
)


/* SECTION: Objects */

/**
 * Determines if a value is a true object.
 *
 * @param {value} value
 */
const isTrueObject = (value:unknown): boolean => (
  Object.prototype.toString.call(value) === '[object Object]'
)

/**
 * Gets the values from an object.
 *
 * @param {object} obj
 *
 * @return {array}
 */
const values = <T>(obj:Obj<T>): T[] => (
  Object.keys(obj).map(k => obj[k])
)

interface each {
  <T>(obj:Obj<T>, fn:(value:T, key:string) => any): unknown[]
}

/**
 * Iterates over an object.
 *
 * @param {object} obj
 * @param {function} fn
 *
 * @return {array}
 */
const each:each = (obj, fn) => {
  const results = []
  for (let key in obj) {
    if (obj.hasOwnProperty(key))
      results.push(fn(obj[key], key))
  }
  return results
}

/**
 * Picks props from an objecta and returns a new object.
 *
 * @param {object} obj
 * @param {...string} keys
 *
 * @return {object}
 */
const pick = <T>(obj:Obj<T>, ...keys:Key[]): typeof obj => {
  const o:typeof obj = {}
  keys.forEach((k) => {
    if (obj.hasOwnProperty(k))
      o[k] = obj[k]
  })
  return o
}

/**
 * Omits props from an object and returns a new object.
 *
 * @param {object} obj
 * @param {...string} props
 *
 * @return {object}
 */
const omit = <T>(obj:Obj<T>, ...keys:Key[]): typeof obj => {
  const o:typeof obj = {...obj}
  keys.forEach(key => delete o[key])
  return o
}

/**
 * Similar to array map, but for objects. Maps each value in an object
 * and returns a new object, maintaining its {key: value} structure.
 *
 * @param {object} obj
 * @param {function} fn
 *
 * @return {object}
 */
const objectMap = <T, R>(obj:Obj<T>, fn:(value:T, key:Key) => R): Obj<R> => {
  const o:Obj<R> = {}
  each(obj, (v, k) => {
    o[k] = (fn(v, k))
  })
  return o
}

/**
 * Converts an object to an array of the form
 * [{key: value}, {key: value}, ...]
 *
 * @param {object} obj
 *
 * @return {array}
 */
const toArray =<T>(obj:Obj<T>): Obj<T>[] => (
  Object.keys(obj).map(key => ({
    [key]: obj[key],
  }))
)


/* SECTION: Strings */

/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} s
 *
 * @return {string}
 */
const capitalize = (s:string): string => (
  s.substring(0, 1).toUpperCase() + s.substring(1)
)


/* SECTION: Values */

/**
 * Checks if a value is empty. A value is considered empty if it has
 * zero length or is non-enumerable.
 *
 * @param {array | object | string}  value
 *
 * @return {boolean}
 */
const isEmpty = (value:unknown): boolean => {
  if (typeof value === 'string' || Array.isArray(value))
    return value.length === 0
  else if (isTrueObject(value))
    return Object.keys(value as Obj<unknown>).length === 0
  else
    return true
}

/**
 * Checks if a value is undefined or null.
 *
 * @param {value} value
 *
 * @return {boolean}
 */
const isNil = (value:unknown): boolean => value === undefined || value === null


/* SECTION: Functions */

/**
 * Returns undefined.
 */
const noop = () => {}

/**
 * Returns the given value.
 *
 * @param {any} value
 *
 * @return {any} value
 */
const identity = <T>(value:T) => value

/**
 * Composes multiple functions against a value.
 *
 * @param {...functions} ...fns
 * @param {any} value
 *
 * @return {any} The result of the function composition.
 */
const compose = (...fns:Function[]) => (value:unknown): unknown => (
  fns.reduceRight((acc, fn) => fn(acc), value)
)

/**
 * Repeats a value or calls a function N times.
 *
 * @param {int} n
 * @param {value | function} value
 *
 * @return {array} The result of the callbacks
 */
const repeat = (n:number, value:unknown): unknown[] => {
  const results = []
  if (typeof value === 'function') {
    for (let i=0; i < n; i++)
      results.push(value(i))
  } else {
    for (let i=0; i < n; i++)
      results.push(value)
  }
  return results
}


/* SECTION: Math */

/**
 * Constrains a value between [min, max]
 *
 * @param value
 * @param {array} [min, max]
 *
 * @return constrained value
 */
const constrain = (value:number, [min, max]:[number, number]): number => (
  Math.min(Math.max(value, min), max)
)


/* SECTION: Timing */

/**
 * Limits a function to be called at most N times/second.
 *
 * @param {function} fn
 * @param {number} ms
 *
 * @return {function}
 */
const throttled = (fn:Function, ms:number) => {
  let lastCalled = 0
  return (...args:unknown[]) => {
    const time = typeof performance !== 'undefined'
          ? performance.now()
          : Date.now()
    if (time - lastCalled > ms) {
      const ret = fn(...args)
      lastCalled = time
      return ret
    }
    return undefined
  }
}


/* SECTION: Sorting */

/**
 * Sorts an array of objects by a specific key and returns a new array.
 *
 * @param {array} array
 * @param {string} key
 *
 * @return {array}
 */
const sortByKey = <T>(array:Obj<T>[], key:Key): typeof array => {
  if (array.length === 0)
    return []
  else if (array.length === 1)
    return [...array]
  return [...array].sort((a:Obj<T>, b:Obj<T>) => {
    if (a[key] < b[key])
      return -1
    else if (a[key] > b[key])
      return 1
    return 0
  })
}


/* SECTION: Misc */

/**
 * Generates a unique id.
 *
 * @return {string}
 */
const uniqId = (() => {
  let id = 0
  return () => ((id++).toString())
})()


export {
  // Array
  after, before, last, without, uniq, insert, move,
  divide, getRandomItem,

  // Object
  isTrueObject, values, each, pick, omit, objectMap, toArray,

  // String
  capitalize,

  // Values
  isEmpty, isNil,

  // Functions
  noop, identity, compose, repeat,

  // Math
  constrain,

  // Timing
  throttled,

  // Sorting
  sortByKey,

  // Misc
  uniqId,
}
