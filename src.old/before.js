/**
 * Gets the item before an item in an array.
 *
 * @param {array} array
 * @param {value} value
 *
 * @return {value}
 */
const before = (array, value) => {
  const index = array.indexOf(value)
  if (index === -1)
    return undefined
  return array[index - 1]
}

export default before
