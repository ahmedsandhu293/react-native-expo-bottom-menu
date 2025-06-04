import './global.css';

import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, Text } from 'react-native';
import { useState } from 'react';
import AnimationSwitchTheme, { OverlayProvider } from './components/AnimationSwitchtheme';
import BottomMenuExpandable from './components/BottomMenuExpandle';
import { useFonts } from 'expo-font';

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Load local fonts
  const [fontsLoaded] = useFonts({
    'InstrumentSerif-Regular': require('./assets/fonts/InstrumentSerif-Regular.ttf'),
    'InstrumentSerif-Italic': require('./assets/fonts/InstrumentSerif-Italic.ttf'),
  });

  const handleThemeChange = (isDark: boolean) => {
    setIsDarkTheme(isDark);
  };

  // Apple-inspired clean colors
  const themeColors = {
    background: isDarkTheme ? '#000000' : '#FFFFFF',
    textPrimary: isDarkTheme ? '#FFFFFF' : '#000000',
    textSecondary: isDarkTheme ? '#8E8E93' : '#6D6D70',
  };

  if (!fontsLoaded) {
    return null; // You can add a loader here if needed
  }

  return (
    <OverlayProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.background }}>
        {/* Clean header */}
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 40,
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 34,
                fontWeight: '700',
                color: themeColors.textPrimary,
                lineHeight: 41,
                marginBottom: 4,
              }}>
              Design System
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: themeColors.textSecondary,
                lineHeight: 22,
              }}>
              Modern and clean interface
            </Text>
          </View>

          {/* Theme toggle */}
          <View style={{ marginLeft: 20, marginTop: 8 }}>
            <AnimationSwitchTheme onThemeChange={handleThemeChange} size={50} />
          </View>
        </View>

        <StatusBar style={isDarkTheme ? 'light' : 'dark'} />

        {/* Floating bottom menu */}
        <BottomMenuExpandable isDarkTheme={isDarkTheme} />
      </SafeAreaView>
    </OverlayProvider>
  );
}
