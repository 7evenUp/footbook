import { useFocusEffect  } from '@react-navigation/native'
import React, { useState } from 'react'
import { Box, Text } from '../../../../themes/default'
import ExerciseItem from './ExerciseItem'

type ExerciseListProps = {
  exercises: Array<{
    id: number,
    name: string,
    info: string,
    time: number,
    video: any
  }>
}

const ExerciseList = ({ exercises }: ExerciseListProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = () => setActiveIndex(null)

      return () => unsubscribe();
    }, [])
  )

  return (
    <Box p='xs'>
      <Text fontFamily="Poppins-Regular" fontSize={24} lineHeight={36} pb='s' pt='m'>
        List of exercises · {exercises.length}
      </Text>
      {exercises.map((exercise, index) => (
        <ExerciseItem
          key={index}
          {...exercise}
          isActive={index === activeIndex}
          switchIndex={() => index === activeIndex ? setActiveIndex(null) : setActiveIndex(index)}
        />)
      )}
    </Box>
  )
}

export default ExerciseList