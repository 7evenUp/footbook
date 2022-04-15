import { Dimensions } from 'react-native'
import { Video } from 'expo-av'

const VideoPlayer = ({video, id} : {video: any, id: number}) => {
  const _handleVideoRef = async component => {
    const playbackObject = component

    try {
      await playbackObject?.unloadAsync()
    }
    catch (error) {
      console.log("ERROR1: ", error)
    }

    try {
      await playbackObject?.loadAsync({ uri: video }, {
        shouldPlay: true,
        isLooping: true,
        rate: 1.0,
        isMuted: false
      })
    }
    catch (error) {
      console.log(`ERROR2 in ${id}: `, error)
    }
  }
  return (
    <Video
      ref={_handleVideoRef}
      resizeMode="cover"
      style={{ width: Dimensions.get('window').width - 24, height: '100%' }} />
  )
}

export default VideoPlayer