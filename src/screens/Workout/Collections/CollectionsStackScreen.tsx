import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { CollectionStackRoutes } from '../../../navigation/types'
import CollectionList from './CollectionList'
import CollectionItem from './CollectionItem'

const Stack = createStackNavigator<CollectionStackRoutes>()

const CollectionsStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={(props) => ({ headerShown: false })} initialRouteName="CollectionList">
      <Stack.Screen name='CollectionList' component={CollectionList} />
      <Stack.Screen name='CollectionItem' component={CollectionItem} />
    </Stack.Navigator>
  )
}

export default CollectionsStackScreen