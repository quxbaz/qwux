/**
 * Checks if a value is empty. A value is considered empty if it has
 * no enumerabale properties.
 *
 * @param {value} value
 *
 * @return {boolean}
 */
const isEmpty = (value) => {
  if (value == null) {
    return true
  }
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0
  } else if (typeof value === 'object') {
    return Object.keys(value).length === 0
  }
  return true
}

export default isEmpty
