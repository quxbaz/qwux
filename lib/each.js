/**
 * Iterates over a list of items.
 *
 * @param {array | object} list
 * @param {function} fn
 *
 * @return list
 */
const each = (list, fn) => {
  if (Array.isArray(list))
    list.forEach(fn)
  else {
    for (let key in list) {
      if (list.hasOwnProperty(key))
        fn(list[key], key)
    }
  }
  return list
}

export default each
