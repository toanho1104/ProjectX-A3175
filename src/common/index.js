import moment from 'moment'

export const isEmptyObject = (obj) => {
  if (Object.keys(obj).length === 0) {
    return true
  }
  return false
}
export const dateFormat = (val) => moment(val).format('DD/MM/YYYY')

export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size))
export const base64 = () => 'data:image/png;base64,'
