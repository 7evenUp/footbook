import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, Box } from '../../../themes/default';

type StatsActivityItemProps = {
  heading: string;
  passedTime: number;
  date: string;
}

const StatsActivityItem = ({heading, passedTime, date}: StatsActivityItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../../assets/Unknown-person.png')} style={styles.img} />
      <Box ml={'s'}>
        <Text variant={'StatsActivityInfoText'}>{heading}</Text>
        <Text variant={'StatsActivityInfoText'}>Time passed: {passedTime} min</Text>
      </Box>
      <Text variant={'StatsActivityDate'} style={{marginLeft: 'auto'}}>{date}</Text>
    </View>
  )
}

export default StatsActivityItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 15
  }
})