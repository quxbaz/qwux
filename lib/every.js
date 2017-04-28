/**
 * Checks if all elements of an array are truthy for the predicate.
 *
 * @param {array} list
 * @param {function} cond
 *
 * @return {boolean}
 */
const every = (list, cond) => {
  for (let i=0; i < list.length; i++) {
    if (cond(list[i]) === false) {
      return false
    }
  }
  return true
}

export default every
