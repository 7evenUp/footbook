import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { Button } from '../../../components'
import { Box, Text } from '../../../themes/default'

type PauseViewType = {
	disablePause: () => void
	cancelTraining: () => void
	passedTime: number
}

const {height, width} = Dimensions.get('screen')

const PauseView = ({ disablePause, cancelTraining, passedTime }: PauseViewType) => {
	return (
		<Box style={styles.container}>
			<Box>
				<Text color="white" textAlign="center" fontSize={64}>{Math.floor(passedTime / 60)}:{passedTime % 60 < 10 ? `0${passedTime % 60}` : passedTime % 60}</Text>
				<Text color="white" textAlign="center">Your training is paused</Text>
			</Box>
			<Box height={130} justifyContent='space-between'>
				<Button
					btnVariant="white"
					textVariant="Poppins400Size24ColorGreyDark"
					text="Resume"
					onPress={disablePause}
				/>
				<Button
					btnVariant="white"
					textVariant="Poppins400Size24ColorGreyDark"
					text="Cancel training"
					onPress={cancelTraining}
				/>
			</Box>
		</Box>
	)
}

export default PauseView

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.9)',
		position: 'absolute',
		height,
		width,
		zIndex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 36
	},
})
