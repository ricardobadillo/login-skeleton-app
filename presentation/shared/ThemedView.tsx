import { View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props extends ViewProps {
  bgColor?: string;
  className?: string;
  margin?: boolean;
  safe?: boolean;
}

export default function ThemedView({
  bgColor,
  children,
  className,
  margin = false,
  safe = false,
  style,
}: Props) {
  const safeArea = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          marginHorizontal: margin ? 10 : 0,
          paddingTop: safe ? safeArea.top : 0,
        },
        style,
      ]}
      className={className}
    >
      {children}
    </View>
  );
}
