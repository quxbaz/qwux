import each from './each'

/**
 * Picks props from an object.
 *
 * @param {object} obj
 * @param {string | array | function} props
 *
 * @return {object}
 */
const pick = (obj, ...props) => {
  props = [].concat(...props)
  const result = {}
  if (props.length === 1 && typeof props[0] === 'function') {
    const cond = props[0]
    each(obj, (value, key) => {
      if (cond(value, key))
        result[key] = value
    })
  }
  else {
    props.forEach((prop) => {
      if (obj.hasOwnProperty(prop))
        result[prop] = obj[prop]
    })
  }
  return result
}

export default pick
