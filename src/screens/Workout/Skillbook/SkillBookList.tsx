import { NavigationProp, useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import { SkillBookStackRoutes } from '../../../navigation/types'
import { palette } from '../../../themes/default'
import SkillCard, { MAX_HEIGHT } from './components/SkillCard'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../firebase/firebaseConfig'

type Skill = {
  posterUri: string
  title1: string
  title2: string
}

const SkillbookList = () => {
  const [items, setItems] = useState<Skill[]>([])
  useEffect(() => {
    console.log("[#] INSIDE UseEffect FUNCTION [#]")
    const loadItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'skills'))
      let arr: Skill[] = []
      querySnapshot.forEach(doc => {
        console.log(doc.id)
        console.log(doc.data())
        arr.push(doc.data())
      })
      setItems(arr)
    }
    loadItems()
  }, [])

  const navigation = useNavigation<NavigationProp<SkillBookStackRoutes, 'SkillBookList'>>()

  const y = useSharedValue(0)
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { y: value } }) => {
      y.value = value
    }
  })

  return (
    <Animated.ScrollView
      onScroll={onScroll}
      scrollEventThrottle={16}
      style={styles.container}
      contentContainerStyle={{ height: (items.length + 1) * MAX_HEIGHT }}
      snapToInterval={MAX_HEIGHT}
      decelerationRate="fast"
    >
      {items.map((item, index) => (
        <SkillCard
          item={item}
          key={index}
          index={index}
          y={y}
          onPress={() => navigation.navigate('SkillBookItem', {...item})}
        />
      ))}
      
    </Animated.ScrollView>
  )
}

export default SkillbookList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white
  }
})
