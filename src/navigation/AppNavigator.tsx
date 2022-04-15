import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

import { HomeScreen, StatisticsStackScreen, ProfileStackScreen, WorkoutTabScreen } from '../screens'

import { AppRoutes } from './types'
import { palette } from '../themes/default'

import { AuthScreen } from '../screens/Auth'
import Training from '../screens/Training/Training'
import EndTraining from '../screens/Training/EndTraining'
import { userIsLogedInSelector } from '../redux/user/selectors'

const Tab = createBottomTabNavigator<AppRoutes>()

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: 'home' | 'football' | 'stats-chart' | 'person' | '' = 'home'

          if (route.name === 'Home') iconName = 'home' 
          else if (route.name === 'Workout') iconName = 'football' 
          else if (route.name === 'Statistics') iconName = 'stats-chart'
          else if (route.name === 'Profile') iconName = 'person' 

          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: palette.greenDark,
        tabBarInactiveTintColor: palette.greyDark,
        tabBarHideOnKeyboard: true,
        tabBarStyle: { backgroundColor: palette.greenLight },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Workout" component={WorkoutTabScreen} />
      <Tab.Screen name="Statistics" component={StatisticsStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />

    </Tab.Navigator>
  )
}

const Stack = createStackNavigator()

const AppNavigator = () => {
  // const userIsLogedIn = useSelector(userIsLogedInSelector)
  const userIsLogedIn = true

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={(props) => ({ headerShown: false })}>
        {userIsLogedIn ? (
          <>
            <Stack.Screen name="App" component={AppTabs} />
            <Stack.Screen name="Training" component={Training} />
            <Stack.Screen name="EndTraining" component={EndTraining} />
          </>
        ) : (
            <Stack.Screen name="Auth" component={AuthScreen} />
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator