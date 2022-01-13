import React, { useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { 
  useFonts, 
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_700Bold 
} from  '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme';

import Dashboard from './src/screens/Dashboard';
import Register from './src/screens/Register';


import * as SplashScreen from 'expo-splash-screen';
import { CategorySelect } from './src/screens/CategorySelect';

import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './src/routes/app.routes';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(true);
  const [fontsLoaded] = useFonts({ 
    Poppins_400Regular, 
    Poppins_500Medium,
    Poppins_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady && !fontsLoaded) {
    return null;
  }
 
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer >
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}