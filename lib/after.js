/**
 * Gets the item after an item in an array.
 *
 * @param {array} array
 * @param {value} value
 *
 * @return {value}
 */
const after = (array, value) => {
  const index = array.indexOf(value)
  if (index === -1)
    return undefined
  return array[index + 1]
}

export default after
