import { Platform, Pressable, Switch, View } from "react-native";

import ThemedText from "./ThemedText";

interface Props {
  className?: string;
  text?: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === "android";

export default function ThemedSwitch({
  className,
  text,
  value,
  onValueChange,
}: Props) {
  return (
    <Pressable
      className={`flex flex-row items-center justify-between mx-2 active:opacity-80 ${className}`}
      onPress={() => onValueChange(!value)}
    >
      {text ? <ThemedText type="h2">{text}</ThemedText> : <View />}
      <Switch
        onValueChange={onValueChange}
        thumbColor={isAndroid ? "bg-primary" : ""}
        trackColor={{ false: "grey", true: "bg-primary" }}
        value={value}
      />
    </Pressable>
  );
}
