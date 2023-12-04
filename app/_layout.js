import { useFonts } from "expo-font";
import { Stack } from "expo-router/stack";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

// 26. Splash screen remains visible during loading font
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  // 27. Load custom fonts
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  // 28. Hide splash screen once fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // 29. Prevent from rendering Stack if fonts are not loaded
  if (!fontsLoaded) return null;
  // 30. Set layout for Stack
  return <Stack onLayout={onLayoutRootView} />;
}
