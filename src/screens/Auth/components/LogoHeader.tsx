import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Box, Text, palette } from '../../../themes/default'

interface LogoHeaderProps {
  header: string
}

export const LogoHeader = ({header}: LogoHeaderProps) => {
  return (
    <View style={{ backgroundColor: 'white', flex: 31 }}>
      <LinearGradient
        colors={[palette.red, palette.greenDark]}
        start={{ x: 0.3, y: 1.1 }}
        end={{ x: 0.7, y: 0 }}
        style={styles.header}>
        <Box flexDirection="row" alignItems="center" mb="l">
          <Image source={require('../../../../assets/app-logo.png')} style={{ height: 115, width: 284 }} />
        </Box>
        <Text variant="Poppins400Size24ColorWhite">{header}</Text>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 16
  },
})
