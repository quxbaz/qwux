/**
 * Constrains a value between [min, max]
 *
 * @param value
 * @param {array} [min, max]
 *
 * @return constrained value
 */
const constrain = (value, [min, max]) => Math.min(Math.max(value, min), max)

export default constrain
