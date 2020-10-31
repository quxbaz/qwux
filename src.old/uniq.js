/**
 * Retains only unique values from an array.
 *
 * @param {array} array
 *
 * @return {array}
 */
const uniq = (array) => {

  const set = new Set(array)
  const uniques = Array.from(set)

  let isEqual = true
  if (array.length !== uniques.length) {
    isEqual = false
  } else {
    for (let i=0; i < array.length; i++) {
      if (array[i] !== uniques[i]) {
        isEqual = false
        break
      }
    }
  }

  return isEqual ? array : uniques

}

export default uniq
