import { Link, LinkProps } from "expo-router";

import { useTheme } from "../themes/context";

interface Props extends LinkProps {}

export default function ThemedLink({ style, ...rest }: Props) {
  const { getThemeColorByVariable } = useTheme();
  const primaryColor = getThemeColorByVariable("primary");

  return <Link style={[{ color: primaryColor }, style]} {...rest} />;
}
