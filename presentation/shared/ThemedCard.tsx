import { View, ViewProps } from "react-native";

interface Props extends ViewProps {
  className?: string;
}

export default function ThemedCard({ className, children }: Props) {
  return (
    <View className={`bg-primary p-2 rounded-xl shadow-black/5 ${className}`}>
      {children}
    </View>
  );
}
