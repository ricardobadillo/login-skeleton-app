import { View } from "react-native";

import ThemedText from "@/presentation/shared/ThemedText";

export default function HomeScreen() {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <ThemedText className="text-black" style={{ fontFamily: "KanitBold" }}>
        HomeScreen
      </ThemedText>
      <ThemedText className="text-black" style={{ fontFamily: "KanitRegular" }}>
        HomeScreen
      </ThemedText>
      <ThemedText className="text-black" style={{ fontFamily: "KanitThin" }}>
        HomeScreen
      </ThemedText>
    </View>
  );
}
