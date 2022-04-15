import React from 'react'
import { StyleSheet, Linking } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Box, Text } from '../../../themes/default'
import { TouchableOpacity } from 'react-native-gesture-handler'

const socialsData: Array<{
  name: 'logo-vk' | 'logo-instagram' | 'logo-twitter'
  url: string
  supUrl: string
}> = [
  {
    name: 'logo-vk',
    url: 'vk://vk.com/aptem_oxa',
    supUrl: 'https://vk.com/aptem_oxa'
  },
  {
    name: 'logo-instagram',
    url: 'instagram://user?username=7_even_up',
    supUrl: 'https://www.instagram.com/7_even_up/'
  },
  {
    name: 'logo-twitter',
    url: 'twitter://user?screen_name=_7even_up_',
    supUrl: 'https://www.twitter.com/_7even_up_'
  },
]

export const Socials = () => {
  return (
    <Box style={styles.socials} mt="l">
      <Text variant="Poppins400Size14ColorGreyDark">Check our socials</Text>
      <Box flexDirection="row" alignItems="center" mt="s">
        {socialsData.map((social, index) => (
          <TouchableOpacity key={index} onPress={async () => {
            const supported = await Linking.canOpenURL(social.url)

            supported ? Linking.openURL(social.url) : Linking.openURL(social.supUrl)
          }}>
            <Box backgroundColor="greyDark" style={styles.socialsItem} mr="l">
              <Ionicons name={social.name} size={26} color="white" />
            </Box>
          </TouchableOpacity>
        ))}
      </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  socials: {
    flex: 15,
    alignItems: 'center',
  },
  socialsItem: {
    borderRadius: 50,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
