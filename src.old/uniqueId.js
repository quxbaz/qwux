/**
 * Generates a unique id.
 *
 * @return {string}
 */
const uniqueId = (() => {
  let id = -1
  return () => ((++id).toString())
})()

export default uniqueId
