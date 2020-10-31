/**
 * Converts an object to an array of the form [{key: value}, ...]
 *
 * @param {object} hash
 *
 * @return {array}
 */
const toList = (hash) => (
  Object.keys(hash).map(
    key => (
      {[key]: hash[key]}
    )
  )
)

export default toList
