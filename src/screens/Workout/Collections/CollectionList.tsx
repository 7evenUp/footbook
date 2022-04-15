import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { CollectionScrollView } from './components'
import { CollectionType } from './types'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../firebase/firebaseConfig'

const CollectionList = () => {
  const [items, setItems] = useState<CollectionType[]>([])
  useEffect(() => {
    console.log("[#] INSIDE UseEffect FUNCTION [#]")
    const loadItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'workout'))
      let arr: CollectionType[] = []
      querySnapshot.forEach(doc => {
        console.log(doc.id)
        console.log(doc.data())
        arr.push(doc.data())
      })
      setItems(arr)
    }
    loadItems()
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        {items.map((collectionItem, index) => (
          <CollectionScrollView
            key={index}
            collectionName={collectionItem.collectionName}
            collectionData={collectionItem.collectionData} />
        ))}
      </ScrollView>
    </View>
  )
}

export default CollectionList