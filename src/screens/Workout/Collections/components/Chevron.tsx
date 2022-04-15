import React from 'react'
import { StyleSheet } from 'react-native'
import Animated, { useAnimatedStyle, useDerivedValue, withSpring, withTiming } from 'react-native-reanimated'
import { mix } from 'react-native-redash'
import Svg, { Path } from 'react-native-svg'
import { palette } from '../../../../themes/default'

type ChevronProps = {
  exerciseOpen: Animated.SharedValue<boolean>
}

const Chevron = ({ exerciseOpen }: ChevronProps) => {
  const progress = useDerivedValue(() => exerciseOpen.value ? withSpring(1) : withTiming(0))
  const style = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${mix(progress.value, 0, Math.PI)}rad`}]
  }))

  return (
    <Animated.View style={[styles.container, style]}>
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M6 9l6 6 6-6" />
      </Svg>
    </Animated.View>
  )
}

export default Chevron

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.greyLight
  }
})
