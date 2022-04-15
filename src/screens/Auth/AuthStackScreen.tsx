import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthStackRoutes } from '../../navigation/types'
import SignIn from './SignIn'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'

const Stack = createStackNavigator<AuthStackRoutes>()

const AuthStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={(props) => ({ headerShown: false })}
      initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  )
}

export default AuthStackScreen
