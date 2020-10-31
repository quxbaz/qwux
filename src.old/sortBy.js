/**
 * Sorts a list of objects by a specific key and returns a new list.
 *
 * @param {array} list
 * @param {string} key
 *
 * @return {array}
 */
const sortBy = (list, key) => {
  if (list.length === 0) {
    return []
  }
  const sorted = [...list].sort((a, b) => {
    if (a[key] < b[key]) {
      return -1
    } else if (a[key] > b[key]) {
      return 1
    }
    return 0
  })
  return sorted
}

export default sortBy
