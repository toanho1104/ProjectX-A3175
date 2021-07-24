import React from 'react'
import { Text } from 'react-native'

import { useSelector } from 'react-redux'
import { textStyles } from '../assets/styles'

const TextCom = ({
  children, headingLarge, headingMedium, headingSmall, textInput,
  linkTextBold, linkTextNomarl, buttonTextBold, buttonTextNomarl,
  contenTextBold, contenTextRegular, contenTextItalic, textPrimary,
  textSecondary, textOnPrimary, textOnSecondary,
}) => {
  const theme = useSelector((state) => state.storage.theme)
  return (
    <Text
      style={[
        textOnPrimary && { color: theme.textOnPrimary },
        textOnSecondary && { color: theme.textOnSecondary },
        textPrimary && { color: theme.textPrimary },
        textSecondary && { color: theme.textSecondary },
        headingLarge && { ...textStyles.headingLarge },
        headingMedium && { ...textStyles.headingMedium },
        headingSmall && { ...textStyles.headingSmall },
        linkTextBold && { ...textStyles.linkTextBold },
        linkTextNomarl && { ...textStyles.linkTextNomarl },
        buttonTextBold && { ...textStyles.buttonTextBold },
        buttonTextNomarl && { ...textStyles.buttonTextNomarl },
        contenTextBold && { ...textStyles.contenTextBold },
        contenTextRegular && { ...textStyles.contenTextRegular },
        contenTextItalic && { ...textStyles.contenTextItalic },
        textInput && { ...textStyles.textInput, flex: 1 },
      ]}
    >
      {children}
    </Text>
  )
}

export default TextCom
