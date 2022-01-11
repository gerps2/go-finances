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
import * as SplashScreen from 'expo-splash-screen';

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

  if (!appIsReady) {
    return null;
  }
 
  return (
    <ThemeProvider theme={theme}>
      <Dashboard></Dashboard>
    </ThemeProvider>
  );
}