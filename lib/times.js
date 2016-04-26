/**
 * Calls a function N times. @fn is called with the current iteration
 * starting from 0.
 *
 * @param {int} n
 * @param {function} fn
 */
const times = (n, fn) => {
  for (let i=0; i < n; i++)
    fn(i)
}

export default times
