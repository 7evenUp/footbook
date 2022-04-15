import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, Dimensions } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { ProfileStackRoutes, StackNavigationProps } from '../../navigation/types'
import { userLogout } from '../../redux/user/actions'
import { Box, palette, Text } from '../../themes/default'
import { auth } from '../../firebase/firebaseConfig'

const ProfileMain = ({ navigation, route }: StackNavigationProps<ProfileStackRoutes, 'ProfileMain'>) => {
  const isFocused = useIsFocused()
  const [currentUser, setCurrentUser] = useState(auth.currentUser)

  useEffect(() => {
    setCurrentUser(auth.currentUser)
  }, [isFocused])

  const dispatch = useDispatch()
  
  return (
    <Box style={styles.container}>
      { currentUser?.photoURL ?
        <Image source={{ uri: currentUser?.photoURL }} style={styles.avatar} /> :
        <Image source={require('../../../assets/Unknown-person.png')} style={styles.avatar} />
      }
      <Text variant="Poppins700Size24ColorBlack" mt="l">{currentUser?.displayName ? currentUser?.displayName : 'Here will be your name'}</Text>
      <Box mt="l">
        <TouchableNativeFeedback
          style={styles.listItem}
          onPress={() => navigation.navigate('Favourites')}>
          <Ionicons name="star" size={29} color={palette.yellow} />
          <Text variant="Poppins400Size18ColorBlack" ml="l">Favourites</Text>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          style={styles.listItem}
          onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings" size={29} color={palette.greyDark} />
          <Text variant="Poppins400Size18ColorBlack" ml="l">Settings</Text>
        </TouchableNativeFeedback>
        
        <TouchableNativeFeedback
          style={styles.listItem}
          onPress={() => navigation.navigate('Subscription')}>
          <MaterialIcons name="attach-money" size={29} color={palette.greenDark} />
          <Text variant="Poppins400Size18ColorBlack" ml="l">Paid subscription</Text>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          style={styles.listItem}
          onPress={() => navigation.navigate('EditProfile')}>
          <MaterialIcons name="edit" size={29} color={palette.cyan} />
          <Text variant="Poppins400Size18ColorBlack" ml="l">Edit profile</Text>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          style={styles.listItem}
          onPress={() => dispatch(userLogout())}>
          <MaterialIcons name="switch-account" size={29} color={palette.red} />
          <Text variant="Poppins400Size18ColorBlack" ml="l">Change account</Text>
        </TouchableNativeFeedback>
      </Box>
        
    </Box>
  )
}

export default ProfileMain

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    marginTop: 24,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: palette.greyLight
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    marginLeft: 48,
    paddingVertical: 24
  }
})
