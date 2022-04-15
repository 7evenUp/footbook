import React from 'react'
import { StyleSheet, TextInput as RNTextInput, TextInputProps as RNTextInputProps } from 'react-native'
import { palette } from '../themes/default'

interface TextInputProps extends RNTextInputProps {
  isPassword?: boolean,
  touched?: boolean,
  error?: string
}

const TextInput = ({ placeholder, isPassword, touched, error, onChangeText, value }: TextInputProps) => {
  return (
    <RNTextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={palette.greyLight}
      secureTextEntry={isPassword ? true : false}
      autoCapitalize="none"
      onChangeText={onChangeText}
      value={value} />
  )
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: palette.greyLight,
    color: palette.greyDark,
    height: 31,
    width: 288,
    paddingVertical: 0,
    paddingHorizontal: 8,
    fontFamily: 'Poppins-Regular',
    fontSize: 18
  }
})

export default TextInput
