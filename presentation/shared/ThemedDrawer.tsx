import React from "react";

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { useAuthStore } from "../auth/store/useAuthStore";
import { useTheme } from "../themes/context";

export default function ThemedDrawer(props: DrawerContentComponentProps) {
  const { logout } = useAuthStore();
  const { getThemeColorByVariable } = useTheme();
  const backgroundColor = getThemeColorByVariable("background");
  const primaryColor = getThemeColorByVariable("primary");

  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "space-between",
      }}
      {...props}
      scrollEnabled={false}
      style={{ backgroundColor }}
    >
      <View>
        <DrawerItemList {...props} />
      </View>

      <DrawerItem
        icon={() => (
          <Ionicons name="log-out-outline" color={primaryColor} size={24} />
        )}
        label="Cerrar sesión"
        labelStyle={{ color: primaryColor }}
        onPress={logout}
      />
    </DrawerContentScrollView>
  );
}
