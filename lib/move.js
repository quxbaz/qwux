/**
 * Moves an item in an array to another position and returns the new
 * array.
 *
 * @param {array} arr
 * @param {number} src
 * @param {number} dest
 *
 * @return {array}
 */
const move = (arr, src, dest) => {
  if (src === dest)
    return arr
  const copy = [...arr]
  const item = copy.splice(src, 1)[0]
  copy.splice(dest, 0, item)
  return copy
}

export default move
