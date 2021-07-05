import * as React from 'react'
import { StackActions } from '@react-navigation/routers'

export const navigationRef = React.createRef()

export function navigateToScreen(name, params) {
  navigationRef.current?.navigate(name, params)
}

export function navigateToScreenAndReplace(name, params) {
  navigationRef.current?.dispatch(StackActions.replace(name, params))
}

export function navigateToScreenInTab(nameroot, name, params) {
  navigationRef.current?.navigate(nameroot, { screen: name, params })
}

export function navigateBack() {
  navigationRef.current?.goBack()
}
