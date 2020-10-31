/**
 * Returns an array with items filtered out.
 *
 * @param {array} array
 * @param {...values} values
 *
 * @return {array}
 */
const without = (array, ...values) => {

  const result = array.filter(
    (item) => !values.includes(item)
  )

  if (array.length === result.length)
    return array
  else
    return result

}

export default without
