import { GestureHandlerRootView } from "react-native-gesture-handler";
import { configureReanimatedLogger } from "react-native-reanimated";

import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";

import { useTheme } from "@/presentation/themes/context";
import { ContainerTheme } from "@/presentation/themes/provider";

import "./global.css";

SplashScreen.preventAutoHideAsync();

configureReanimatedLogger({
  strict: false,
});

function ThemedContent() {
  const { getThemeColorByVariable } = useTheme();
  const backgroundColor = getThemeColorByVariable("background");

  return (
    <GestureHandlerRootView style={{ backgroundColor, flex: 1 }}>
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor },
          headerShown: false,
        }}
      ></Stack>
    </GestureHandlerRootView>
  );
}

export default function RootLayout() {
  const [loaded] = useFonts({
    KanitThin: require("../assets/fonts/Kanit-Thin.ttf"),
    KanitRegular: require("../assets/fonts/Kanit-Regular.ttf"),
    KanitBold: require("../assets/fonts/Kanit-Bold.ttf"),
  });

  if (!loaded) {
    SplashScreen.hideAsync();
    return null;
  }

  return (
    <ContainerTheme>
      <ThemedContent />
    </ContainerTheme>
  );
}
