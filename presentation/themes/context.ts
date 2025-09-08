import { createContext, useContext } from "react";

import { Appearance } from "react-native";

import { ThemesVariants } from "./index";

export type ThemesVariables =
  | "background"
  | "foreground"
  | "font-primary"
  | "color-primary-button"
  | "primary"
  | "primary-foreground"
  | "secondary"
  | "secondary-foreground"
  | "accent"
  | "accent-foreground"
  | "muted"
  | "muted-foreground"
  | "input";

export type SystemThemesVariants = "dark" | "light" | undefined;

type ThemeContextProps = {
  theme: ThemesVariants;
  systemTheme: SystemThemesVariants;
  systemEnabled: boolean;
  handleThemeSwitch: (newTheme: ThemesVariants) => void;
  getThemeColorByVariable: (colorKey: ThemesVariables) => string;
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "system",
  systemTheme: Appearance.getColorScheme() === "light" ? "light" : "dark",
  systemEnabled: true,
} as ThemeContextProps);

export function useTheme() {
  return useContext(ThemeContext);
}
