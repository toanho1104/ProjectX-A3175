export const isEmptyObject = (obj) => {
  if (Object.keys(obj).length === 0) {
    return true
  }
  return false
}
