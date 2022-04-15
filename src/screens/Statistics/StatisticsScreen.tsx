import { StyleSheet, Text, View, Button, Dimensions } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { StackNavigationProps, AppRoutes } from '../../navigation/types'

const StatisticsScreen = ({ navigation }: StackNavigationProps<AppRoutes, 'Statistics'>) => {
  const tabBarHeight = useBottomTabBarHeight()
  const {height} = Dimensions.get("window")

  return (
    <View style={styles.container}>
      <Text>Statistics screen</Text>
      <Text>TabBarHeight: {tabBarHeight}</Text>
      <Text>Height1: {height}</Text>
      <Button
        title="Go to Workout"
        onPress={() => navigation.navigate('Workout')}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default StatisticsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})
