import React from 'react'
import { Dimensions, ImageBackground, StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { Box, Text } from '../../../../themes/default'

type SkillCardItemProps = {
  item: {
    posterUri: string
    title1: string
    title2: string
  },
  index: number,
  y: Animated.SharedValue<number>,
  onPress: () => void
}

const { width, height } = Dimensions.get('window')
const MIN_HEIGHT = 250
export const MAX_HEIGHT = height / 2

const SkillCardItem = ({ item: { posterUri, title1, title2 }, index, y, onPress }: SkillCardItemProps) => {
  const container = useAnimatedStyle(() => ({
    height: interpolate(
      y.value,
      [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
      [MIN_HEIGHT, MAX_HEIGHT],
      Extrapolate.CLAMP
    )
  }))

  const titleStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      y.value,
      [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
      [0, 1],
      Extrapolate.CLAMP
    )
  }))

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.container, container]}>
        <ImageBackground
          source={{ uri: posterUri }}
          style={styles.image}
        >
          <Animated.View style={titleStyle}>
            <Box justifyContent="center" height="100%">
              {index % 2 === 0 ? (
                <>
                  <Text variant="SkillBookTitle" ml="xs">{title1}</Text>
                  <Text variant="SkillBookTitle" mr="xs" textAlign="right">{title2}</Text>
                </>
              ) : (
                <>
                  <Text variant="SkillBookTitle" mr="xs" textAlign="right">{title1}</Text>
                  <Text variant="SkillBookTitle" ml="xs">{title2}</Text>
                </>
              )}
            </Box>
          </Animated.View>
        </ImageBackground>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default SkillCardItem

const styles = StyleSheet.create({
  container: {
    width,
    height: MIN_HEIGHT
  },
  image: {
    width
  },
  title: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: 64,
    lineHeight: 96,
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5
  }
})
