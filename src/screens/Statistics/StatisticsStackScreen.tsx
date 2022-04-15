import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatisticsStackRoutes } from '../../navigation/types'
import StatisticsScreen from './StatisticsScreen'

const Stack = createStackNavigator<StatisticsStackRoutes>()

const StatisticsStackScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator
        initialRouteName="StatisticsScreen"
        screenOptions={
          {
            headerTitleAlign: 'center',
            headerTitleStyle: styles.titleStyle,
            headerStyle: styles.headerStyle,
            cardStyle: styles.cardStyle
          }
        }>
        <Stack.Screen 
          name="StatisticsScreen"
          component={StatisticsScreen}
          options={{
            title: 'Your statistics'
          }} />
      </Stack.Navigator>
    </View>
  )
}

export default StatisticsStackScreen

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
