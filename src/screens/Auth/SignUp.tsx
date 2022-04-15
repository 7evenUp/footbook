import React from 'react'
import { AuthStackRoutes, StackNavigationProps } from '../../navigation/types'
import { Box } from '../../themes/default'
import { LogoHeader, SignUpForm, Socials } from './components'

const SignUp = ({ navigation, route }: StackNavigationProps<AuthStackRoutes, 'SignUp'>) => {
  return (
    <Box style={{ flex: 1 }} backgroundColor="greenLight">
      <LogoHeader header="Create an account"/>

      <SignUpForm />

      <Socials />
    </Box>
  )
}

export default SignUp
