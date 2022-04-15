import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '../../components'
import { TrainingStackRoutes, StackNavigationProps } from '../../navigation/types'

const EndTraining = ({ route: { params: { passedTime }} }: StackNavigationProps<TrainingStackRoutes, 'EndTraining'>) => {
	const navigation = useNavigation()
	return (
		<SafeAreaView>
			<Text>It is the end of the training</Text>
			<Text>Passed time: {passedTime}</Text>
			<Button
				btnVariant="underline"
				textVariant="Poppins400Size18ColorBlack"
				text="Go to statistics"
				onPress={() => navigation.navigate("Statistics")}/>
		</SafeAreaView>
	)
}

export default EndTraining

const styles = StyleSheet.create({})
