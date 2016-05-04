/**
 * Calls a function N times. @fn is called with the current iteration
 * starting from 0.
 *
 * @param {int} n
 * @param {function | value} fn
 *
 * @return {array} The result of the callbacks
 */
const times = (n, fn) => {
  const results = []
  if (typeof fn === 'function') {
    for (let i=0; i < n; i++)
      results.push(fn(i))
  } else {
    for (let i=0; i < n; i++)
      results.push(fn)
  }
  return results
}

export default times
