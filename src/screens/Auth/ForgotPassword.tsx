import React from 'react'
import { AuthStackRoutes, StackNavigationProps } from '../../navigation/types'
import { Box } from '../../themes/default'
import { LogoHeader, ResetPassword, Socials } from './components'

const ForgotPassword = ({ navigation, route }: StackNavigationProps<AuthStackRoutes, 'ForgotPassword'>) => {
  return (
    <Box style={{flex: 1}} backgroundColor="greenLight">
      <LogoHeader header="Forgot password?" />

      <ResetPassword />

      <Socials />
    </Box>
  )
}

export default ForgotPassword
