import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Switch, TouchableOpacity } from 'react-native-gesture-handler'
import { ProfileStackRoutes, StackNavigationProps } from '../../navigation/types'
import { Box, palette, Text } from '../../themes/default'
import { Ionicons } from '@expo/vector-icons'

const Settings = ({ navigation }: StackNavigationProps<ProfileStackRoutes, "Settings">) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {}}>
          <Ionicons name="checkmark" size={30} color={palette.cyan} />
        </TouchableOpacity>
      ),
      headerBackImage: () => (
        <Ionicons name="close" size={30} color="black" />
      )
    })
  })
  
  return (
    <View style={styles.container}>
      <Box style={styles.setting}>
        <Text>Dark theme</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </Box>
      <Box style={styles.setting}>
        <Text>Language</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </Box>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightblue'
  },
  setting: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'red'
  }
})
