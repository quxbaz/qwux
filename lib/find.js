/**
 * Finds a value in the list given a condition.
 *
 * @param {array} list
 * @param {function} cond
 *
 * @return {value}
 */
const find = (list, cond) => {
  for (let i=0; i < list.length; i++) {
    if (cond(list[i])) {
      return true
    }
  }
  return false
}

export default find
