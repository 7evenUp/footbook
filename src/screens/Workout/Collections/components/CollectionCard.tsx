import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { ImageBackground, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Text, Box } from '../../../../themes/default'
import { CollectionItemType } from '../types'

type CollectionCardProps = {
  onPress: () => void,
}

const CollectionCard = ({ picture, cardName, exercises, level, onPress }: CollectionCardProps & CollectionItemType) => {
  return (
    <ImageBackground
      source={{ uri: picture }}
      style={styles.picture}
      imageStyle={{ borderRadius: 15 }}>
      <LinearGradient colors={['rgba(255, 255, 255, 0)', 'rgba(0, 0, 0, 0.6)']} style={{ borderRadius: 15 }}>
        <RectButton style={styles.card} onPress={onPress}>
          <Text variant='collectionCardName'>{cardName}</Text>
          <Box>
            <Text variant='collectionCardInfo'>{exercises.length} exercises</Text>
            <Text variant='collectionCardInfo'>{level}</Text>
          </Box>
        </RectButton>
      </LinearGradient>
    </ImageBackground>
  )
}

export default CollectionCard

const styles = StyleSheet.create({
  picture: {
    width: 250,
    height: 175,
    marginRight: 8
  },
  card: {
    width: 250,
    height: 175,
    borderRadius: 15,
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.01)'
  },
})
