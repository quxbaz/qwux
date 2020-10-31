/**
 * Iterates over a list of items.
 *
 * @param {array | object} list
 * @param {function} fn
 *
 * @return {array} The result of the callbacks
 */
const each = (list, fn) => {
  const results = []
  if (Array.isArray(list)) {
    for (let i=0; i < list.length; i++)
      results.push(fn(list[i], i))
  }
  else {
    for (let key in list) {
      if (list.hasOwnProperty(key))
        results.push(fn(list[key], key))
    }
  }
  return results
}

export default each
