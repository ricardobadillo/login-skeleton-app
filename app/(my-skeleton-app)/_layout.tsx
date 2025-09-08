import { useEffect } from "react";

import { ActivityIndicator, View } from "react-native";

import { Redirect, Slot } from "expo-router";

import { useAuthStore } from "@/presentation/auth/store/useAuthStore";

export default function SkeletonAppLayout() {
  const { status, checkStatus } = useAuthStore();

  useEffect(() => {
    checkStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === "checking") {
    return (
      <View
        style={{
          alignContent: "center",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  if (status === "unauthenticated") {
    return <Redirect href="/auth/login" />;
  }

  return <Slot />;
}
