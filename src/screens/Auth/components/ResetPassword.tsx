import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { TextInput, Button } from '../../../components'
import { userSignIn } from '../../../redux/user/actions'
import { Box, Text, palette } from '../../../themes/default'
import { Formik } from 'formik'

interface FormValues {
  email: string
}


export const ResetPassword = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  console.log("======== Reset Password Form ========")

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={(values: FormValues) => console.log(values)}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <Box style={styles.form}>
            <Text
              variant="Poppins400Size18ColorBlack"
              textAlign="center"
              paddingHorizontal="xxl"
            >
              Enter the email associated with your account
            </Text>

            <TextInput
              placeholder="Enter your email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              error={errors.email}
              touched={touched.email} />
              
            <Button
              btnVariant="transparent"
              textVariant="Poppins400Size24ColorGreyDark"
              onPress={() => handleSubmit()}
              text="Reset password"/>
          </Box>
        )}
      </Formik>

      <Box marginVertical="xl" alignItems="center">
        <Text variant="Poppins400Size18ColorGreyDark">Remembered the password? </Text>
        <Button
          btnVariant='underline'
          textVariant='Poppins400Size18ColorBlack'
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
