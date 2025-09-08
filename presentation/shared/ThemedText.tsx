import { Text, TextProps } from "react-native";

type TextType = "normal" | "h1" | "h2" | "semi-bold";

interface Props extends TextProps {
  className?: string;
  type?: TextType;
}

export default function ThemedText({
  className,
  type = "normal",
  ...rest
}: Props) {
  const typeStyles = {
    h1: "text-3xl",
    h2: "text-xl",
    normal: "font-normal",
    "semi-bold": "font-semibold",
  };

  return (
    <Text
      className={`
        text-primary
        ${typeStyles[type]}
        ${className || ""}
      `.trim()}
      {...rest}
    />
  );
}
