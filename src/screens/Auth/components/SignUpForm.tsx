import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux'
import { userSignUp } from '../../../redux/user/actions'
import { Box, Text, palette } from '../../../themes/default'
import { userErrorSelector } from '../../../redux/user/selectors'
import { TextInput, Button } from '../../../components'
import { Formik } from 'formik'

interface FormValues {
  email: string,
  password: string,
  confirmPassword: string
}

export const SignUpForm = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const selectUser = (state: RootState) => state.user
  const user = useSelector(selectUser)
  const error = useSelector(userErrorSelector)
  console.log("======== Sign Up Form ========")
  console.log(user)

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: ''}}
        onSubmit={(values: FormValues) => console.log(values)}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <Box style={styles.form}>
            <TextInput
              placeholder="Enter your email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              error={errors.email}
              touched={touched.email} />
            <TextInput
              placeholder="Enter your password"
              isPassword={true}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              error={errors.password}
              touched={touched.password} />
            <TextInput
              placeholder="Confirm password"
              isPassword={true}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              error={errors.confirmPassword}
              touched={touched.confirmPassword} />

            {user.isFetching && <Text>Loading...</Text>}
            <Button
              btnVariant="transparent"
              textVariant="Poppins400Size24ColorGreyDark"
              onPress={() => handleSubmit()}
              text="Sign Up"
            />
          </Box>
        )}
      </Formik>
      

      {error && <Text color="red">{error}</Text>}

      <Box alignItems="center" flexDirection="row" marginVertical="xl">
        <Text variant="Poppins400Size18ColorGreyDark">Already have an account? </Text>
        <Button
          btnVariant="underline"
          textVariant="Poppins400Size18ColorBlack"
          onPress={() => navigation.navigate("SignIn")}
          text="Sign In"
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
