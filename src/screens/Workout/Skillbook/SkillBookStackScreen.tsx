import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SkillBookStackRoutes } from '../../../navigation/types'
import SkillBookList from './SkillBookList'
import SkillBookItem from './SkillBookItem'

const Stack = createStackNavigator<SkillBookStackRoutes>()

const SkillbookStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={(props) => ({ headerShown: false })} initialRouteName="SkillBookList">
      <Stack.Screen name='SkillBookList' component={SkillBookList} />
      <Stack.Screen name='SkillBookItem' component={SkillBookItem} />
    </Stack.Navigator>
  )
}

export default SkillbookStackScreen