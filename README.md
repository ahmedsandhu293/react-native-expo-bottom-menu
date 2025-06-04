# BottomMenuExpandable Component

A modern React Native floating bottom menu component with smooth animations, haptic feedback, blur overlay, and theme support. Features an expandable interface that transforms from a compact chat button to a full menu with customizable items.

## ✨ Features

- 🎭 **Smooth Animations**: Built with React Native Reanimated for 60fps performance
- 📱 **Responsive Design**: Automatically centers and adapts to screen width
- 🌙 **Dark/Light Theme**: Full support for theme switching with adaptive colors
- 📳 **Haptic Feedback**: Native vibration feedback on menu expansion
- 🌫️ **Blur Overlay**: Glass effect background when menu is expanded
- 🎯 **Touch-to-Close**: Tap anywhere on blur overlay to close menu
- 📜 **Scrollable Content**: Smooth scrolling menu items with custom icons
- 🎨 **Custom Fonts**: Instrument Serif font integration for elegant typography
- 🔧 **StyleSheet Organized**: Clean, maintainable code structure
- ⚡ **Performance Optimized**: Efficient animations with reduced bounce

## 🛠️ Platform Support

| Platform | Status | Notes |
|----------|--------|-------|
| **iOS** | ✅ Full Support | Native haptic feedback, smooth animations |
| **Android** | ✅ Full Support | Haptic feedback, native performance |
| **Web** | ✅ Full Support | Blur effects, responsive design |

## 📋 Requirements

| Dependency | Version | Required |
|------------|---------|----------|
| **Expo SDK** | 53.0.0+ | ✅ |
| **React Native** | 0.79+ | ✅ |
| **React Native Reanimated** | 3.17+ | ✅ |
| **Expo Blur** | Latest | ✅ |
| **Expo Haptics** | Latest | ✅ |
| **Expo Font** | Latest | ✅ |
| **TypeScript** | 5.8+ | ✅ |

## 🚀 Installation

```bash
# Install core dependencies
npm install react-native-reanimated

# Install Expo modules
npx expo install expo-blur expo-haptics expo-font

# Install custom fonts (if using Instrument Serif)
npm install @expo-google-fonts/instrument-serif
```

## 📁 Setup

### 1. Font Files Structure
```
assets/
└── fonts/
    ├── InstrumentSerif-Regular.ttf
    └── InstrumentSerif-Italic.ttf
```

### 2. Theme Integration
```tsx
// App.tsx
import { useState } from 'react';
import BottomMenuExpandable from './components/BottomMenuExpandable';

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Your app content */}
      
      {/* Floating bottom menu */}
      <BottomMenuExpandable isDarkTheme={isDarkTheme} />
    </SafeAreaView>
  );
}
```

## 📖 Usage

### Basic Implementation
```tsx
import BottomMenuExpandable from './components/BottomMenuExpandable';

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDarkTheme ? '#000' : '#fff' }}>
      {/* Your content here */}
      
      <BottomMenuExpandable isDarkTheme={isDarkTheme} />
    </SafeAreaView>
  );
}
```

### With Theme Toggle
```tsx
import AnimationSwitchTheme from './components/AnimationSwitchTheme';
import BottomMenuExpandable from './components/BottomMenuExpandable';

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeChange = (isDark: boolean) => {
    setIsDarkTheme(isDark);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Header with theme toggle */}
      <View style={{ padding: 20 }}>
        <AnimationSwitchTheme onThemeChange={handleThemeChange} />
      </View>
      
      {/* Floating menu */}
      <BottomMenuExpandable isDarkTheme={isDarkTheme} />
    </SafeAreaView>
  );
}
```

## 🎛️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isDarkTheme` | `boolean` | `false` | Controls dark/light theme appearance |

## 🎨 Customization

### Menu Items Configuration
```typescript
const menuItems = [
  { id: 1, icon: 'chatbubble-outline', text: 'Chat', color: '#AFFF00' },
  { id: 2, icon: 'search-outline', text: 'Search', color: '#FF9500' },
  { id: 3, icon: 'heart-outline', text: 'Favorites', color: '#FF3B30' },
  // Add more items...
];
```

### Theme Colors
```typescript
const themeColors = {
  menuBg: isDarkTheme ? '#1C1C1E' : '#FFFFFF',
  textColor: isDarkTheme ? '#FFFFFF' : '#000000',
  accentColor: '#AFFF00', // Custom accent color
  separator: isDarkTheme ? '#38383A' : '#E5E5E7',
};
```

### Animation Configuration
```typescript
// Expansion animation with less bounce
menuWidth.value = withSpring(expandedWidth, { damping: 20, stiffness: 150 });

// Haptic feedback intensity
Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
```

## ⚙️ Component Structure

### Compact Menu (Initial State)
- **Chat Icon**: Positioned on the left with custom accent color
- **Chat Text**: "Chat" in Instrument Serif Italic font
- **Separator**: Vertical line divider
- **Plus Button**: Expansion trigger on the right

### Expanded Menu
- **Header**: "Menu Principal" title with close button
- **Scrollable Items**: 10 customizable menu options
- **Blur Overlay**: Touch-to-close background
- **Smooth Animations**: Spring-based transitions

## 🎭 Animation Details

### Expansion Sequence
1. **Haptic Feedback**: Immediate vibration on tap
2. **Size Animation**: Width/height expansion with spring
3. **Blur Fade-in**: Background overlay appears
4. **Chat Fade-out**: Logo and text disappear
5. **Content Reveal**: Menu items slide in with stagger

### Performance Optimizations
- **Reduced Bounce**: `damping: 20` for stable animations
- **Efficient Springs**: Optimized stiffness values
- **StyleSheet**: Organized styles for better performance
- **Font Loading**: Conditional rendering until fonts load

## 🌙 Theme System

### Dark Theme Colors
- Background: `#1C1C1E`
- Text: `#FFFFFF`
- Secondary: `#8E8E93`
- Border: `#38383A`

### Light Theme Colors
- Background: `#FFFFFF`
- Text: `#000000`
- Secondary: `#6D6D70`
- Border: `#E5E5E7`

## 📱 Interaction Features

### Touch Interactions
- **Menu Expansion**: Tap plus button to expand
- **Menu Closing**: Tap X or blur overlay to close
- **Item Selection**: Tap any menu item (customizable actions)
- **Haptic Response**: Vibration feedback on expansion

### Accessibility
- **Touch Targets**: Minimum 44px touch areas
- **Visual Feedback**: Clear hover and press states
- **Screen Readers**: Proper accessibility labels

## 🔧 Technical Implementation

### Key Components
```typescript
// Animated values for smooth transitions
const menuWidth = useSharedValue(140);
const menuHeight = useSharedValue(60);
const blurOpacity = useSharedValue(0);
const chatOpacity = useSharedValue(1);

// StyleSheet organization
const styles = StyleSheet.create({
  compactMenu: { /* Compact layout styles */ },
  expandedMenu: { /* Expanded layout styles */ },
  blurOverlay: { /* Blur effect styles */ },
});
```

### Font Integration
```typescript
const [fontsLoaded] = useFonts({
  'InstrumentSerif-Italic': require('../assets/fonts/InstrumentSerif-Italic.ttf'),
});
```

## 🐛 Troubleshooting

### Common Issues

#### Fonts Not Loading
- Verify font files are in `assets/fonts/` directory
- Check font file names match exactly
- Ensure `expo-font` is properly installed

#### Animations Stuttering
- Reduce animation complexity
- Check device performance
- Verify Reanimated installation

#### Blur Effect Not Working
- Ensure `expo-blur` is installed
- Check platform compatibility
- Verify overlay positioning

#### Haptic Feedback Not Working
- Test on physical device (not simulator)
- Check `expo-haptics` installation
- Verify platform permissions

## 🚀 Advanced Usage

### Custom Menu Items
```typescript
const customMenuItems = [
  { 
    id: 1, 
    icon: 'custom-icon', 
    text: 'Custom Action', 
    color: '#FF6B6B',
    onPress: () => {
      // Custom action logic
    }
  },
];
```

### Animation Callbacks
```typescript
// Handle expansion completion
runOnJS(setIsExpanded)(true);

// Custom animation sequences
setTimeout(() => {
  // Delayed animations
}, 200);
```

## 🌐 Platform Considerations

### iOS
- Native haptic feedback support
- Smooth blur effects
- Spring animations optimized

### Android
- Haptic feedback with compatibility layer
- Material Design blur effects
- Optimized for various screen sizes

### Web
- CSS-based blur fallbacks
- Mouse interaction support
- Responsive design adaptation

## 🤝 Contributing

When contributing:
1. Test on all platforms (iOS, Android, Web)
2. Ensure animations maintain 60fps
3. Verify theme switching works correctly
4. Test with different screen sizes
5. Update StyleSheet organization
6. Maintain accessibility standards

## 📄 License

This component is part of the expo-auto-resizing-input project.
