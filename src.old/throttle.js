/**
 * Limits a function to be called at most N times/second
 *
 * @param {function} fn
 * @param {int} ms
 *
 * @return {function}
 */
const throttle = (fn, ms) => {
  let lastCalled = 0
  return (...args) => {
    const time = performance.now()
    if ((time - lastCalled) > ms) {
      fn(...args)
      lastCalled = time
    }
  }
}

export default throttle
