import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { useTheme } from "@/presentation/themes/context";

export default function ChangeThemeScreen() {
  const { theme, handleThemeSwitch, systemEnabled } = useTheme();

  return (
    <ThemedView className="bg-background flex-1 gap-y-8 items-center justify-center">
      <ThemedView className="flex flex-row gap-x-2">
        <ThemedButton
          onPress={() => handleThemeSwitch("system")}
          className={`
            border-input duration-300 p-2 rounded-xl transition-colors
            ${systemEnabled ? "bg-primary" : ""}
          `}
          disabled={theme === "system"}
          textClassName="text-xl"
        >
          System
        </ThemedButton>

        <ThemedButton
          onPress={() => handleThemeSwitch("light")}
          className={`
            border-input duration-300 p-2 rounded-xl transition-colors
            disabled:bg-gray-400 disabled:text-white
            ${theme === "light" && !systemEnabled ? "bg-primary" : ""}
          `}
          disabled={theme === "light"}
          textClassName="text-xl"
        >
          Light
        </ThemedButton>

        <ThemedButton
          onPress={() => handleThemeSwitch("dark")}
          className={`
            border-input duration-300 p-2 rounded-xl transition-colors
            disabled:bg-gray-400 disabled:text-white
            ${theme === "dark" && !systemEnabled ? "bg-primary" : ""}
          `}
          disabled={theme === "dark"}
          textClassName="text-xl"
        >
          Dark
        </ThemedButton>

        <ThemedButton
          onPress={() => handleThemeSwitch("deep-ocean")}
          className={`
            border-input duration-300 p-2 rounded-xl transition-colors
            disabled:bg-gray-400 disabled:text-white
            ${theme === "deep-ocean" && !systemEnabled ? "bg-primary" : ""}
          `}
          disabled={theme === "deep-ocean"}
          textClassName="text-xl"
        >
          Deep Ocean
        </ThemedButton>
      </ThemedView>
    </ThemedView>
  );
}
