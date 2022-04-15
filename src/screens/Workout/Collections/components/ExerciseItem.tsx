import { useEffect } from 'react'
import { StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'

import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import { Box, Text } from '../../../../themes/default'
import Chevron from './Chevron'
import VideoPlayer from './VideoPlayer'

type ExerciseItemProps = {
  id: number,
  name: string,
  info: string,
  time: number,
  video: any,
  switchIndex: () => void,
  isActive: boolean
}

const ExerciseItem = ({ id, name, info, time, video, switchIndex, isActive }: ExerciseItemProps) => {
  const exerciseOpen = useSharedValue(false)
  useEffect(() => {
    exerciseOpen.value = isActive
  }, [isActive])
  const progress = useDerivedValue(() => exerciseOpen.value ? withSpring(250) : withTiming(0))

  const style = useAnimatedStyle(() => ({ height: progress.value }))
  
  return (
    <TouchableWithoutFeedback onPress={switchIndex}>
      <Box>
        <Box style={styles.exerciseItem} borderBottomColor='greyLight' pr='s'>
          <Image 
            source={{ uri: video }}
            style={{width: 100, height: 100}}
          />
          <Text variant='Poppins400Size18ColorBlack' ml='l' mr='m'>
            {Math.floor(time / 60)}:{time % 60 < 10 ? `0${time % 60}` : time % 60}
          </Text>
          <Box style={styles.textBlock}>
            <Text variant='Poppins400Size18ColorBlack'>{name}</Text>
            <Text variant='Poppins400Size14ColorGreyDark'>{info}</Text>
          </Box>
          <Chevron exerciseOpen={exerciseOpen}/>
        </Box>
        <Animated.View style={[style]}>
          {isActive && <VideoPlayer video={video} id={id}/>}
        </Animated.View>
      </Box>
    </TouchableWithoutFeedback>
  )
}

export default ExerciseItem

const styles = StyleSheet.create({
  exerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1
  },
  textBlock: {
    marginRight: 'auto'
  },
  dropButton: {
    width: 10,
    height: 6,
  }
})