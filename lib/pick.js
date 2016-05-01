/**
 * Picks props from an object.
 *
 * @param {object} obj
 * @param {string | array} props
 *
 * @return {object}
 */
const pick = (obj, ...props) => {
  props = [].concat(...props)
  const result = {}
  props.forEach((prop) => {
    if (obj.hasOwnProperty(prop))
      result[prop] = obj[prop]
  })
  return result
}

export default pick
