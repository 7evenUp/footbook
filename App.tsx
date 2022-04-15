import { LogBox } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from '@shopify/restyle'
import theme from './src/themes/default'
import AppNavigator from './src/navigation/AppNavigator'
import { createAppStore } from './src/redux'
import { StatusBar } from 'expo-status-bar'

const store = createAppStore()

LogBox.ignoreLogs([
  'AsyncStorage has been extracted from react-native core and will be removed in a future release',
  'Setting a timer for a long period of time']);

const fonts = {
  'Poppins-Regular': require('./assets/fonts/Poppins-Regular.otf'),
  'Poppins-Bold': require('./assets/fonts/Poppins-Bold.otf'),
  'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.otf'),
}

export default function App() {
  let [fontsLoaded] = useFonts(fonts)
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <StatusBar style="dark"/>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <SafeAreaProvider>
              <AppNavigator />
            </SafeAreaProvider>
          </ThemeProvider>
        </Provider>
      </>
    )
  }
}
