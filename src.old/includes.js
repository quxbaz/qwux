/**
 * Checks if value is in array.
 *
 * @param {array | object} list
 * @param {value} value
 *
 * @return {boolean}
 */
const includes = (list, value) => {
  for (let i=0; i < list.length; i++) {
    if (list[i] === value) {
      return true
    }
  }
  return false
}

export default includes
