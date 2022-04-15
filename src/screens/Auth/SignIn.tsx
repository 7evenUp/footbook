import React from 'react'
import { AuthStackRoutes, StackNavigationProps } from '../../navigation/types'
import { Box } from '../../themes/default'
import { LogoHeader, SignInForm, Socials } from './components'


const SignIn = ({ navigation, route }: StackNavigationProps<AuthStackRoutes, 'SignIn'>) => {
  return (
    <Box style={{flex: 1}} backgroundColor="greenLight">
      <LogoHeader header="Login into your account"/>
      
      <SignInForm />

      <Socials />
    </Box>
  )
}

export default SignIn
