import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { useTheme } from "../themes/context";

interface Props extends TextInputProps {
  alternativeIcon?: boolean;
  className?: string;
  icon?: keyof typeof Ionicons.glyphMap;
}
export default function ThemedTextInput({
  alternativeIcon,
  className,
  icon,
  ...rest
}: Props) {
  const [isActive, setIsActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<TextInput>(null);
  const { getThemeColorByVariable } = useTheme();
  const primaryColor = getThemeColorByVariable("primary");

  return (
    <View
      className="
        border
        flex-row
        items-center
        justify-between
        p-2
        rounded-md
      "
      onTouchStart={() => inputRef.current?.focus()}
      style={{ borderColor: isActive ? primaryColor : "#cccccc" }}
    >
      {icon && (
        <Ionicons
          color={primaryColor}
          name={icon}
          size={24}
          style={{ marginRight: 10 }}
        />
      )}

      <TextInput
        className="flex-1 text-primary"
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        placeholderTextColor="grey"
        ref={inputRef}
        style={{
          flex: 1,
          marginRight: 10,
        }}
        secureTextEntry={!showPassword}
        {...rest}
      />

      {alternativeIcon && (
        <TouchableOpacity onPressIn={(e) => e.stopPropagation()}>
          <Ionicons
            color={primaryColor}
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            onPress={() => setShowPassword(!showPassword)}
            size={24}
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
