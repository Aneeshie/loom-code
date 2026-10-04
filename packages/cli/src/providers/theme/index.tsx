
import { homedir } from "os";
import { join } from "path";
import { DEFAULT_THEME, THEMES, type Theme, type ThemeColors } from "../../theme";
import fs, { mkdirSync } from "fs";
import { createContext, useCallback, useContext, useState } from "react";

const CONFIG_DIR = join(homedir(), ".loomcode");
const THEME_PREFERENCES_PATH = join(CONFIG_DIR, "preferences.json");

type ThemePreferences = {
  themeName: string;
};

function getInitialTheme(): Theme {
  try {
    const preferences = JSON.parse(fs.readFileSync(THEME_PREFERENCES_PATH, "utf-8")) as Partial<ThemePreferences>;
    const savedTheme = THEMES.find((theme) => theme.name === preferences.themeName);
    return savedTheme ?? DEFAULT_THEME!;
  } catch {
    return DEFAULT_THEME!;
  }
}

function persistTheme(theme: Theme): void {
  try {
    mkdirSync(CONFIG_DIR, { recursive: true });
    fs.writeFileSync(THEME_PREFERENCES_PATH, JSON.stringify({ themeName: theme.name } satisfies ThemePreferences), "utf-8");
  } catch {
    // ignore write failures so theme switching still works for this session
  }

}

type ThemeContextValue = {
  colors: ThemeColors;
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme(): ThemeContextValue {
  const value = useContext(ThemeContext)
  if (!value) throw new Error("useTheme must be used within a ThemeProvider");
  return value;
}

type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(getInitialTheme());

  const setTheme = useCallback((theme: Theme) => {
    setCurrentTheme(theme);
    persistTheme(theme);
  }, [])

  const value: ThemeContextValue = {
    colors: currentTheme.colors,
    currentTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
