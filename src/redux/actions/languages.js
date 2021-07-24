import { languageTypes } from '../types'

export const changeLangues = (data, callback) => {
  return {
    type: languageTypes.CHANGE_LANGUAGES,
    payload: { data, callback },
  }
}
