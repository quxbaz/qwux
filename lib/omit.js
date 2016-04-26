/**
 * Omits props from an object.
 *
 * @param {object} obj
 * @param {string | array} props
 *
 * @return {object}
 */
const omit = (obj, props) => {
  props = [].concat(props)
  const result = {...obj}
  props.forEach((prop) => {
    delete result[prop]
  })
  return result
}

export default omit
