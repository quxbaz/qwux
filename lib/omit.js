/**
 * Omits props from an object.
 *
 * @param {object} obj
 * @param {string | array | function} props
 *
 * @return {object}
 */

import each from './each'

const omit = (obj, ...props) => {
  props = [].concat(...props)
  const result = {...obj}
  if (props.length === 1 && typeof props[0] === 'function') {
    const cond = props[0]
    each(obj, (value, key) => {
      if (cond(value, key))
        delete result[key]
    })
  }
  else {
    props.forEach((prop) => {
      delete result[prop]
    })
  }
  return result
}

export default omit
