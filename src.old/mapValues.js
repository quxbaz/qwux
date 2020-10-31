/**
 * Maps each value in an object and returns a new object.
 *
 * @param {object} obj
 * @param {function} fn
 *
 * @return {object}
 */
const mapValues = (obj, fn) => {
  const result = {}
  Object.keys(obj).forEach((key) => {
    result[key] = fn(obj[key], key)
  })
  return result
}

export default mapValues
