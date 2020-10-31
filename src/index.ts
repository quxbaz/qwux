const after = (array:any[], value:any):any => {
  const index = array.indexOf(value)
  if (index === -1)
    return undefined
  return array[index + 1]
}

export {
  after,
}
