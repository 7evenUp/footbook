import { useState, useEffect } from 'react'
import { ImageBackground, StyleSheet, View, Dimensions } from 'react-native'
import { StackNavigationProps, AppRoutes } from '../../navigation/types'
import { palette, Text } from '../../themes/default'
import { StatsActivityItem } from './components'
import { Timestamp, getDoc, doc, DocumentData } from 'firebase/firestore'
import { db, auth } from '../../firebase/firebaseConfig'

type Stats = {
  activity: Array<{
    date: Timestamp
    exerciseName: string
    passedTime: number
  }>
  learntSkills: number
}

const { width, height } = Dimensions.get('window')

const StatisticsScreen = ({ navigation }: StackNavigationProps<AppRoutes, 'Statistics'>) => {
  const [items, setItems] = useState<DocumentData>()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    console.log("[#] INSIDE UseEffect FUNCTION [#]")
    const loadItems = async () => {
      if (auth.currentUser?.uid) {
        const docRef = doc(db, 'userStats', auth.currentUser?.uid)
        const docSnap = await getDoc(docRef)

        // Document data:  Object {
        //   "activity": Array [
        //     Object {
        //       "date": Object {
        //         "nanoseconds": 0,
        //         "seconds": 1652734800,
        //       },
        //       "exerciseName": "Close control",
        //       "passedTime": 960,
        //     },
        //   ],
        //   "learntSkills": 4,
        // }

        if (docSnap.exists()) {
          console.log('Document data: ', docSnap.data().activity)
          setItems(docSnap.data())
          setLoading(false)
        } else {
          console.log('Document data doesnt exist')
        }
      }
    }
    loadItems()
  }, [])

  if (loading) return <Text>Loading data...</Text>

  if (!items) { 
    return (
      <ImageBackground
        source={require('../../../assets/noneStats.jpg')}
        style={styles.noneStatsImage}>
          <Text variant={'StatsNoneData'} textAlign='center'>You have not done any exercise yet</Text>
      </ImageBackground>
  )} else {
    return (
      <View style={styles.container}>
        <View style={styles.statsWrapper}>
          <View style={[styles.statsItem, {marginBottom: 1}]}>
            <Text variant={'StatsAccentText'}>14</Text>
            <Text variant={'StatsHelpText'}>Total trainings</Text>
          </View>
          <View style={[styles.statsItem, {marginBottom: 1}]}>
            <Text variant={'StatsAccentText'}>{items.learntSkills}</Text>
            <Text variant={'StatsHelpText'}>Skills learnt</Text>
          </View>
          <View style={styles.statsItem}>
            <Text variant={'StatsAccentText'}>9,4hr</Text>
            <Text variant={'StatsHelpText'}>Time in training</Text>
          </View>
          <View style={styles.statsItem}>
            <Text variant={'StatsAccentText'}>Close Control</Text>
            <Text variant={'StatsHelpText'}>Favourite workout</Text>
          </View>
        </View>

        <Text variant={'StatsHeading'} mt='l' mb={'xs'}>Your activity</Text>

        <StatsActivityItem
          heading='Close control'
          passedTime={40}
          date={'17.05.2022'} />
        <StatsActivityItem
          heading='Fast dribbling'
          passedTime={34}
          date={'16.05.2022'} />
      </View>
    )
  }
}

export default StatisticsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  statsWrapper: {
    backgroundColor: palette.greyDark,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  statsItem: {
    backgroundColor: 'white',
    flexBasis: '49.9%',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: 27,
  },
  noneStatsImage: {
    width: width + 24,
    height: height,
    position: 'absolute',
    left: -15,
    alignItems: 'center'
  }
})
