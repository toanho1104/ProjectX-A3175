import { themeTypes } from '../types'

export const changeThemes = (data, callback) => {
  return {
    type: themeTypes.CHANGE_THEMES,
    payload: { data, callback },
  }
}
