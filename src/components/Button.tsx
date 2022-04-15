import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { palette, Text } from '../themes/default'

type ButtonProps = {
  text: string,
  onPress: () => void,
  btnVariant: 'accent' | 'transparent' | 'borderless' | 'white' | 'underline',
  textVariant: 'Poppins400Size24ColorGreyDark' | 'Poppins400Size18ColorBlack' | 'Poppins400Size14ColorGreyDark'
}

const Button = ({ onPress, text, btnVariant, textVariant }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles[btnVariant]}
      onPress={onPress} >
      <Text variant={textVariant} textAlign="center">{text}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  accent: {
    
  },
  transparent: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: palette.greyDark,
    width: 272,
    paddingVertical: 8
  },
  borderless: {
    borderRadius: 20,
    width: 272,
    paddingVertical: 8
  },
  white: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: palette.greyDark,
    backgroundColor: palette.white,
    width: 272,
    paddingVertical: 8
  },
  underline: {
    borderBottomWidth: 1
  }
})
