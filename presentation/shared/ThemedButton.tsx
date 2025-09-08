import { Pressable, PressableProps, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "../themes/context";

interface Props extends PressableProps {
  className?: string;
  children: string;
  icon?: keyof typeof Ionicons.glyphMap;
  textClassName?: string;
}

export default function ThemedButton({
  className,
  children,
  icon,
  textClassName,
  ...rest
}: Props) {
  const { getThemeColorByVariable } = useTheme();
  const primaryColor = getThemeColorByVariable("primary");

  return (
    <Pressable
      className={`bg-primary flex-row items-center justify-center active:bg-accent ${className}`}
      style={({ pressed }) => [
        { backgroundColor: pressed ? primaryColor + "90" : primaryColor },
      ]}
      {...rest}
    >
      <Text className={`text-fontButton ${textClassName}`}>{children}</Text>
      {icon && (
        <Ionicons
          color="white"
          name={icon}
          size={18}
          style={{ marginHorizontal: 5 }}
        />
      )}
    </Pressable>
  );
}
