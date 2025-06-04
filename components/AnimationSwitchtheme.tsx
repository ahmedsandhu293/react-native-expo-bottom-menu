import React, { createContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

// Context pour l'overlay
const OverlayContext = createContext<any>(null);

export const OverlayProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <OverlayContext.Provider value={{}}>{children}</OverlayContext.Provider>;
};

interface AnimationSwitchThemeProps {
  onThemeChange: (isDark: boolean) => void;
  size?: number;
}

const AnimationSwitchTheme: React.FC<AnimationSwitchThemeProps> = ({
  onThemeChange,
  size = 50,
}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Valeurs animées
  const translateX = useSharedValue(0);
  const backgroundColorProgress = useSharedValue(0);
  const iconRotation = useSharedValue(0);
  const iconScale = useSharedValue(1);

  const handleThemeToggle = () => {
    const newTheme = !isDarkTheme;

    // Animations du toggle
    translateX.value = withSpring(newTheme ? size - 28 : 0, {
      damping: 15,
      stiffness: 100,
    });

    backgroundColorProgress.value = withTiming(newTheme ? 1 : 0, {
      duration: 300,
    });

    // Animation de l'icône
    iconScale.value = withSpring(0.8, { damping: 15, stiffness: 100 }, () => {
      iconScale.value = withSpring(1, { damping: 15, stiffness: 100 });
    });

    iconRotation.value = withSpring(iconRotation.value + 180, { damping: 12, stiffness: 80 });

    runOnJS(setIsDarkTheme)(newTheme);
    runOnJS(onThemeChange)(newTheme);
  };

  // Styles animés
  const animatedContainerStyle = useAnimatedStyle(() => {
    const backgroundColor = backgroundColorProgress.value === 0 ? '#E5E5E7' : '#1C1C1E';

    return {
      backgroundColor,
    };
  });

  const animatedToggleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { scale: iconScale.value },
        { rotate: `${iconRotation.value}deg` },
      ],
    };
  });

  return (
    <TouchableOpacity onPress={handleThemeToggle} activeOpacity={0.8}>
      <Animated.View
        style={[
          animatedContainerStyle,
          {
            width: size,
            height: 28,
            borderRadius: 14,
            padding: 2,
            justifyContent: 'center',
          },
        ]}>
        <Animated.View
          style={[
            animatedToggleStyle,
            {
              width: 24,
              height: 24,
              borderRadius: 12,
              backgroundColor: '#FFFFFF',
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 2,
            },
          ]}>
          <Ionicons
            name={isDarkTheme ? 'moon' : 'sunny'}
            size={14}
            color={isDarkTheme ? '#1C1C1E' : '#FF9500'}
          />
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default AnimationSwitchTheme;
