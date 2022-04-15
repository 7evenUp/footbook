import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { Video } from 'expo-av'

type VideoPlayerProps = {
	source: any,
  paused: boolean
}

const VideoPlayer = ({source, paused}: VideoPlayerProps) => {
  return (
    <Video
      ref={async (component) => {
        const playbackObject = component
        if (paused) {
          await playbackObject?.pauseAsync()
        } else {
          await playbackObject?.unloadAsync()
          await playbackObject?.loadAsync({uri: source}, {
            shouldPlay: true,
            isLooping: true,
          })
        }            
      }}
      resizeMode='cover'
      style={styles.videoContainer} />
  )
}

const styles = StyleSheet.create({
  videoContainer: {
    width: Dimensions.get('window').width,
    height: 300,
    alignSelf: 'center'
  }
})

export default React.memo(VideoPlayer)