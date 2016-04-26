/**
 * Gets the values from an object.
 *
 * @param {object} obj
 *
 * @return {array}
 */
const values = (obj) => Object.keys(obj).map(k => obj[k])

export default values
