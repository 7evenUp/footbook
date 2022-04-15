import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { SkillBookStackRoutes, StackNavigationProps } from '../../../navigation/types'

const SkillBookItem = (
  {
    navigation,
    route: {
      params: {
        poster,
        title1,
        title2
      }
    }
  }: StackNavigationProps<SkillBookStackRoutes, 'SkillBookItem'>) => {
  return (
    <View>
      <Text>{title1} {title2}</Text>
    </View>
  )
}

export default SkillBookItem

const styles = StyleSheet.create({
  
})
