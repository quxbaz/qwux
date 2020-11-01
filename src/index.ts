/* SECTION: Array */

/**
 * Gets the item after an item in an array.
 *
 * @param {array} array
 * @param {value} value
 *
 * @return {value}
 */
const after = <T>(array:T[], value:T): T | undefined => {
  const index = array.indexOf(value)
  if (index === -1)
    return undefined
  return array[index + 1]
}

/**
 * Gets the item before an item in an array.
 * @param {array} array
 * @param {value} value
 * @return {value}
 */
const before = <T>(array:T[], value:T): T | undefined => {
  const index = array.indexOf(value)
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
 * @param {...values} values
 *
 * @return {array}
 */
const without = <T>(array:T[], ...values:T[]): T[] => (
  array.filter(item => !values.includes(item))
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


/* SECTION: Object */

interface each {
  <T>(obj:Record<string, T>, fn:(value:T, key:string) => any): unknown[]
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
 * Gets the values from an object.
 *
 * @param {object} obj
 *
 * @return {array}
 */
// const values = (obj) => Object.keys(obj).map(k => obj[k])

/**
 * Picks props from an object.
 *
 * @param {object} obj
 * @param {string | array | function} props
 *
 * @return {object}
 */
// const pick = (obj, ...props) => {
//   props = [].concat(...props)
//   const result = {}
//   if (props.length === 1 && typeof props[0] === 'function') {
//     const cond = props[0]
//     each(obj, (value, key) => {
//       if (cond(value, key))
//         result[key] = value
//     })
//       }
//   else {
//     props.forEach((prop) => {
//       if (obj.hasOwnProperty(prop))
//         result[prop] = obj[prop]
//     })
//   }
//   return result
// }

/**
 * Omits props from an object.
 *
 * @param {object} obj
 * @param {string | array | function} props
 *
 * @return {object}
 */
// const omit = (obj, ...props) => {
//   props = [].concat(...props)
//   const result = {...obj}
//   if (props.length === 1 && typeof props[0] === 'function') {
//     const cond = props[0]
//     each(obj, (value, key) => {
//       if (cond(value, key))
//         delete result[key]
//     })
//       }
//   else {
//     props.forEach((prop) => {
//       delete result[prop]
//     })
//   }
//   return result
// }

/**
 * Maps each value in an object and returns a new object.
 *
 * @param {object} obj
 * @param {function} fn
 *
 * @return {object}
 */
// const mapValues = (obj, fn) => {
//   const result = {}
//   Object.keys(obj).forEach((key) => {
//     result[key] = fn(obj[key], key)
//   })
//   return result
// }

/**
 * Converts an object to an array of the form [{key: value}, ...]
 *
 * @param {object} hash
 *
 * @return {array}
 */
// const toList = (hash) => (
//   Object.keys(hash).map(
//     key => (
//       {[key]: hash[key]}
//     )
//   )
// )


/* SECTION: String */

/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} s
 *
 * @return {string}
 */
// const capitalize = (s) => s.substring(0, 1).toUpperCase() + s.substring(1)


/* SECTION: Values */

/**
 * Checks if a value is empty. A value is considered empty if it has
 * no enumerabale properties.
 *
 * @param {value} value
 *
 * @return {boolean}
 */
// const isEmpty = (value) => {
//   if (value == null) {
//     return true
//   }
//   if (typeof value === 'string' || Array.isArray(value)) {
//     return value.length === 0
//   } else if (typeof value === 'object') {
//     return Object.keys(value).length === 0
//   }
//   return false
// }

/**
 * Checks if a value is undefined or null.
 *
 * @param {value} value
 *
 * @return {boolean}
 */
// const isNil = (value) => value === undefined || value === null


/* SECTION: Math */

/**
 * Constrains a value between [min, max]
 *
 * @param value
 * @param {array} [min, max]
 *
 * @return constrained value
 */
// const constrain = (value, [min, max]) => Math.min(Math.max(value, min), max)


/* SECTION: Timing */

/**
 * Limits a function to be called at most N times/second
 *
 * @param {function} fn
 * @param {int} ms
 *
 * @return {function}
 */
// const throttle = (fn, ms) => {
//   let lastCalled = 0
//   return (...args) => {
//     const time = performance.now()
//     if ((time - lastCalled) > ms) {
//       fn(...args)
//       lastCalled = time
//     }
//   }
// }


/* SECTION: Sorting */

/**
 * Sorts an array of objects by a specific key and returns a new array.
 *
 * @param {array} array
 * @param {string} key
 *
 * @return {array}
 */
// const sortBy = (array, key) => {
//   if (array.length === 0) {
//     return []
//   }
//   const sorted = [...array].sort((a, b) => {
//     if (a[key] < b[key]) {
//       return -1
//     } else if (a[key] > b[key]) {
//       return 1
//     }
//     return 0
//   })
//   return sorted
// }


/* SECTION: Functions */

/**
 * Calls a function N times. @fn is called with the current iteration
 * starting from 0.
 *
 * @param {int} n
 * @param {function | value} fn
 *
 * @return {array} The result of the callbacks
 */
// const times = (n, fn) => {
//   const results = []
//   if (typeof fn === 'function') {
//     for (let i=0; i < n; i++)
//       results.push(fn(i))
//   } else {
//     for (let i=0; i < n; i++)
//       results.push(fn)
//   }
//   return results
// }


/* SECTION: Misc */

/**
 * Generates a unique id.
 *
 * @return {string}
 */
// const uniqueId = (() => {
//   let id = -1
//   return () => ((++id).toString())
// })()


export {
  // Array
  after, before, last, without, uniq, move,

  // Object
  each,
  //each, values, pick, omit, mapValues, toList,

  // String
  //capitalize,

  // Values
  //isEmpty, isNil,

  // Math
  //constrain,

  // Timing
  //throttle,

  // Sorting
  //sortBy,

  // Functions
  //times,

  // Misc
  //uniqueId,
}
