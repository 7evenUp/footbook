import React, { useState, useEffect, useReducer } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StackActions } from '@react-navigation/native'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { mix } from 'react-native-redash'
import { Feather } from '@expo/vector-icons'
import theme, { Box,  Text } from '../../themes/default'
import { VideoPlayer, PauseView} from './components'
import { TrainingStackRoutes, StackNavigationProps } from '../../navigation/types'
import {
  TrainingState,
  TrainingActionTypes,
  TICK,
  SET_NEXT_EXERCISE,
  SET_NEW_EXERCISE
} from './types/TrainingTypes'

const initialState: TrainingState = {
  count: 0,
  passedTime: 0,
  currentExercise: 0
}

const reducer = (state: TrainingState, action: TrainingActionTypes) => {
  switch (action.type) {
    case TICK:
      return {
        ...state,
        count: state.count + 1,
        passedTime: state.passedTime + 1
      }
    case SET_NEXT_EXERCISE:
      return {
        ...state,
        count: 0,
        passedTime: state.passedTime - 1,
        currentExercise: state.currentExercise + 1
      }
    case SET_NEW_EXERCISE:
      return {
        ...state,
        count: 0,
        currentExercise: action.payload.currentExercise
      }
    default:
      throw new Error()
  }
}

const Training = ({ navigation, route: { params: { exercises }} }: StackNavigationProps<TrainingStackRoutes, 'Training'>) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [paused, setPaused] = useState(false)
  const [source, setSource] = useState(exercises[0].video)
  const screenWidth = Dimensions.get('window').width

  const exerciseProgress = useSharedValue(0)

  let interval: ReturnType<typeof setInterval>

  const trainingTick = () => {
    if (!paused) {
      console.log("[#][#][#][#] BEGINING OF TICK FUNCTION [#][#][#][#]")
      console.log('Current state: ', state)
      if (state.currentExercise > exercises.length - 1) {
        console.log('[#] END OF THE TRAINING')
        navigation.dispatch(StackActions.replace('EndTraining', { passedTime: state.passedTime}))
      } else {
        console.log('[#] DISPATCH TICK')
        dispatch({type: TICK})
  
        if (state.count === exercises[state.currentExercise].time) {
          console.log("BEFORE SET_NEXT_EXERCISE: ", state.count)
          dispatch({type: SET_NEXT_EXERCISE})
          console.log('[#] DISPATCH SET NEXT EXERCISE')
          if (state.currentExercise + 1 < exercises.length) {
            setSource(exercises[state.currentExercise + 1].video)
          }
          
          console.log('[#] Change video')
          exerciseProgress.value = 0
        } else {
          exerciseProgress.value = withTiming((state.count + 1) * (screenWidth / exercises[state.currentExercise].time), {
            duration: 1000
          })
          console.log("PROGRESS: ", exerciseProgress.value)
        }
      }
    }
    else {
      console.log("APP IS IN PAUSE MOD")
    }
  }

  useEffect(() => {
    interval = setInterval(trainingTick, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [state.count, paused])
  
  const animatedStyles = useAnimatedStyle(() => ({
    width: mix(1, 0, exerciseProgress.value)
  }))

  return (
    <SafeAreaView style={styles.container}>
      {paused && <PauseView
        passedTime={state.passedTime}
        cancelTraining={() => {
          navigation.dispatch(StackActions.replace('EndTraining', { passedTime: state.passedTime}))
        }}
        disablePause={() => setPaused(false)}
      />}
      <Box style={styles.videoWrapper}>
        <VideoPlayer source={source} paused={paused}/>
        <Box style={styles.videoOverlay}>
          <Text variant='Poppins700Size18ColorWhite'>
            {Math.floor(state.passedTime / 60)}:{state.passedTime % 60 < 10 ? `0${state.passedTime % 60}` : state.passedTime % 60}{}
          </Text>
          <Text>Count: {state.count}</Text>
          <Text>Current exercise: {state.currentExercise}</Text>
          <TouchableWithoutFeedback onPress={() => {
            console.log("CLICK ON PAUSE")
            console.log(paused)
            setPaused(!paused)
          }}>
            <Feather name="pause-circle" size={40} color="white" />
          </TouchableWithoutFeedback>
        </Box>
      </Box>
      <ScrollView>
      {exercises.map((exercise, index) => (
        <TouchableWithoutFeedback key={index} onPress={() => {
          exerciseProgress.value = 0
          setSource(exercise.video)
          dispatch({
            type: SET_NEW_EXERCISE,
            payload: {
              currentExercise: exercise.id
            }
          })
        }}>
          <Box style={styles.exerciseItem} paddingHorizontal='xs' paddingVertical='m' backgroundColor={exercise.id < state.currentExercise ? "greyLight" : "white"}>
            {exercise.id === state.currentExercise && <Animated.View style={[styles.exerciseItemBackground, animatedStyles]}></Animated.View>}
            <Text variant='Poppins400Size18ColorBlack' mr='l'>{exercise.time}</Text>
            <Text variant='Poppins700Size18ColorBlack' mr='m'>{exercise.name}</Text>
            <Text variant='Poppins400Size14ColorGreyDark'>{exercise.info}</Text>
          </Box>
        </TouchableWithoutFeedback>
      ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Training

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  videoWrapper: {
    position: 'relative'
  },
  videoOverlay: {
    width: Dimensions.get('window').width - 24,
    position: 'absolute',
    bottom: 16,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  exerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: theme.colors.greyLight
  },
  exerciseItemBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 61,
    backgroundColor: theme.colors.greenLight
  }
})
