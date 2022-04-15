import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux'
import { userSignIn } from '../../../redux/user/actions'
import { Box, Text, palette } from '../../../themes/default'
import { TextInput, Button } from '../../../components'
import { Formik } from 'formik'

interface FormValues {
  email: string,
  password: string
}

export const SignInForm = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const selectUser = (state: RootState) => state.user
  const user = useSelector(selectUser)
  console.log("======== Sign In Form ========")
  console.log(user)

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values: FormValues) => { dispatch(userSignIn(values)) }}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <Box style={styles.form}>
            <TextInput
              placeholder="Enter your email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              error={errors.email}
              touched={touched.email}
            />
            <TextInput
              placeholder="Enter your password"
              isPassword={true}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              error={errors.password}
              touched={touched.password}
            />

            <Button
              btnVariant="borderless"
              textVariant="Poppins400Size14ColorGreyDark"
              onPress={() => navigation.navigate("ForgotPassword")}
              text="Forgot password?"
            />
            
            {user.isFetching && <Text>Loading...</Text>}
            
            <Button
              btnVariant="transparent"
              textVariant="Poppins400Size24ColorGreyDark"
              onPress={() => handleSubmit()}
              text="Sign In"/>
            
          </Box>
        )}
      </Formik>

      <Box alignItems="center" flexDirection="row" marginVertical="xl">
        <Text variant="Poppins400Size18ColorGreyDark">Don't have an account yet? </Text>
        <Button
          btnVariant='underline'
          textVariant='Poppins400Size18ColorBlack'
          text="Sign Up"
          onPress={() => navigation.navigate("SignUp")}
        />
      </Box>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 470,
    alignItems: 'center',
    backgroundColor: palette.white,
    justifyContent: 'space-between',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  form: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
})
