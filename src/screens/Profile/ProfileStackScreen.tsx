import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { ProfileStackRoutes } from '../../navigation/types'
import ProfileMain from './ProfileMain'
import Favourites from './Favourites'
import Settings from './Settings'
import Subscription from './Subscription'
import EditProfile from './EditProfile'

const Stack = createStackNavigator<ProfileStackRoutes>()

const ProfileStackScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator
        initialRouteName="ProfileMain"
        screenOptions={
          {
            headerTitleAlign: 'center',
            headerTitleStyle: styles.titleStyle,
            headerStyle: styles.headerStyle,
            cardStyle: styles.cardStyle
          }
        }>
        <Stack.Screen 
          name="ProfileMain"
          component={ProfileMain}
          options={{
            title: 'Your profile'
          }} />
        <Stack.Screen name="Favourites" component={Favourites} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Subscription" component={Subscription} />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={({navigation, route}) => ({
            headerTitle: 'Edit profile'
          })} />
      </Stack.Navigator>
    </View>
  )
}

export default ProfileStackScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  titleStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 24
  },
  headerStyle: {
    backgroundColor: 'white',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
  },
  cardStyle: {
    width: Dimensions.get('window').width,
    paddingLeft: 12,
    paddingRight: 12,
    alignSelf: 'center',
    backgroundColor: 'white'
  }
})
