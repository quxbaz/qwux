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
const move = (arr, from, to) => {
  if (from === to)
    return arr
  const copy = [...arr]
  const item = copy.splice(from, 1)[0]
  copy.splice(to, 0, item)
  return copy
}

export default move
