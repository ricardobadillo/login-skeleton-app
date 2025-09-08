import { Drawer } from "expo-router/drawer";

import { Ionicons } from "@expo/vector-icons";

import ThemedDrawer from "@/presentation/shared/ThemedDrawer";
import { useTheme } from "@/presentation/themes/context";

export default function DrawerLayout() {
  const { getThemeColorByVariable } = useTheme();
  const backgroundColor = getThemeColorByVariable("background");
  const primaryColor = getThemeColorByVariable("primary");

  return (
    <Drawer
      drawerContent={ThemedDrawer}
      screenOptions={{
        drawerActiveTintColor: primaryColor,
        drawerInactiveTintColor: primaryColor,
        drawerItemStyle: { marginBottom: 5 },
        headerTintColor: primaryColor,
        headerShadowVisible: false,
        headerStyle: { backgroundColor },
        overlayColor: "rgba(0,0,0,0.5)",
        sceneStyle: { backgroundColor },
        title: "",
      }}
    >
      <Drawer.Screen
        name="home/index"
        options={{
          drawerIcon: () => (
            <Ionicons name="home-outline" color={primaryColor} size={24} />
          ),
          drawerLabel: "Home",
        }}
      />

      <Drawer.Screen
        name="change-theme/index"
        options={{
          drawerIcon: () => (
            <Ionicons
              name="color-palette-outline"
              color={primaryColor}
              size={24}
            />
          ),
          drawerLabel: "Cambiar tema",
        }}
      />
    </Drawer>
  );
}
