export type ThemeColors = {
  primary: string;
  info: string;
  secondary: string;
  background: string;
  planMode: string;
  selection: string;
  thinking: string;
  success: string;
  error: string;
  surface: string;
  dialogSurface: string;
  thinkingBorder: string;
  dimSeparator: string;
}

export type Theme = {
  name: string;
  colors: ThemeColors
}

export const THEMES: Theme[] = [
  {
    name: "Nightfox",
    colors: {
      primary: "#81a1c1",
      info: "#5e81ac",
      secondary: "#88c0d0",
      background: "#192330",
      planMode: "#2e3440",
      selection: "#2b3b51",
      thinking: "#3b4b5b",
      success: "#a3be8c",
      error: "#bf616a",
      surface: "#212e3f",
      dialogSurface: "#253347",
      thinkingBorder: "#4c6a8a",
      dimSeparator: "#39506b",
    }
  },
  {
    name: "Dracula",
    colors: {
      primary: "#bd93f9",
      info: "#8be9fd",
      secondary: "#ff79c6",
      background: "#282a36",
      planMode: "#1e1f29",
      selection: "#44475a",
      thinking: "#3a3c4e",
      success: "#50fa7b",
      error: "#ff5555",
      surface: "#313341",
      dialogSurface: "#3a3c4e",
      thinkingBorder: "#6272a4",
      dimSeparator: "#4d5068",
    }
  },
  {
    name: "Tokyo Night",
    colors: {
      primary: "#7aa2f7",
      info: "#2ac3de",
      secondary: "#bb9af7",
      background: "#1a1b26",
      planMode: "#16161e",
      selection: "#283457",
      thinking: "#1f2335",
      success: "#9ece6a",
      error: "#f7768e",
      surface: "#1f2335",
      dialogSurface: "#24283b",
      thinkingBorder: "#3d59a1",
      dimSeparator: "#2c3463",
    }
  },
  {
    name: "Gruvbox Dark",
    colors: {
      primary: "#d79921",
      info: "#458588",
      secondary: "#689d6a",
      background: "#282828",
      planMode: "#1d2021",
      selection: "#3c3836",
      thinking: "#32302f",
      success: "#98971a",
      error: "#cc241d",
      surface: "#302f2f",
      dialogSurface: "#3c3836",
      thinkingBorder: "#a89984",
      dimSeparator: "#504945",
    }
  },
  {
    name: "Nord",
    colors: {
      primary: "#81a1c1",
      info: "#88c0d0",
      secondary: "#5e81ac",
      background: "#2e3440",
      planMode: "#242933",
      selection: "#3b4252",
      thinking: "#353b47",
      success: "#a3be8c",
      error: "#bf616a",
      surface: "#363c4a",
      dialogSurface: "#3b4252",
      thinkingBorder: "#4c566a",
      dimSeparator: "#434c5e",
    }
  },
  {
    name: "Catppuccin Mocha",
    colors: {
      primary: "#cba6f7",
      info: "#89dceb",
      secondary: "#f38ba8",
      background: "#1e1e2e",
      planMode: "#181825",
      selection: "#313244",
      thinking: "#292938",
      success: "#a6e3a1",
      error: "#f38ba8",
      surface: "#252535",
      dialogSurface: "#313244",
      thinkingBorder: "#6c7086",
      dimSeparator: "#45475a",
    }
  },
  {
    name: "One Dark Pro",
    colors: {
      primary: "#61afef",
      info: "#56b6c2",
      secondary: "#c678dd",
      background: "#282c34",
      planMode: "#21252b",
      selection: "#3e4451",
      thinking: "#333842",
      success: "#98c379",
      error: "#e06c75",
      surface: "#2c313a",
      dialogSurface: "#363c46",
      thinkingBorder: "#528bff",
      dimSeparator: "#4b5263",
    }
  },
  {
    name: "Monokai Pro",
    colors: {
      primary: "#ab9df2",
      info: "#78dce8",
      secondary: "#ff6188",
      background: "#2d2a2e",
      planMode: "#221f22",
      selection: "#403e41",
      thinking: "#363337",
      success: "#a9dc76",
      error: "#ff6188",
      surface: "#352f35",
      dialogSurface: "#403e41",
      thinkingBorder: "#727072",
      dimSeparator: "#5b595c",
    }
  },
  {
    name: "Palenight",
    colors: {
      primary: "#82aaff",
      info: "#89ddff",
      secondary: "#c792ea",
      background: "#292d3e",
      planMode: "#1b1e2b",
      selection: "#343a50",
      thinking: "#2e3347",
      success: "#c3e88d",
      error: "#f07178",
      surface: "#303445",
      dialogSurface: "#373c52",
      thinkingBorder: "#676e95",
      dimSeparator: "#4e5579",
    }
  },
  {
    name: "Solarized Dark",
    colors: {
      primary: "#268bd2",
      info: "#2aa198",
      secondary: "#6c71c4",
      background: "#002b36",
      planMode: "#00212b",
      selection: "#073642",
      thinking: "#03303d",
      success: "#859900",
      error: "#dc322f",
      surface: "#013640",
      dialogSurface: "#073642",
      thinkingBorder: "#586e75",
      dimSeparator: "#1a4a55",
    }
  },
  {
    name: "Ayu Dark",
    colors: {
      primary: "#39bae6",
      info: "#59c2ff",
      secondary: "#ffb454",
      background: "#0d1017",
      planMode: "#090d13",
      selection: "#1a2130",
      thinking: "#131720",
      success: "#7fd962",
      error: "#f26d78",
      surface: "#111722",
      dialogSurface: "#1a2130",
      thinkingBorder: "#3d5166",
      dimSeparator: "#253040",
    }
  },
  {
    name: "Synthwave '84",
    colors: {
      primary: "#f92aad",
      info: "#36f9f6",
      secondary: "#e2a0ff",
      background: "#262335",
      planMode: "#1a1826",
      selection: "#3b3558",
      thinking: "#2f2b45",
      success: "#72f1b8",
      error: "#fe4450",
      surface: "#2a2640",
      dialogSurface: "#343058",
      thinkingBorder: "#7b5ea7",
      dimSeparator: "#4e4475",
    }
  },
  {
    name: "Horizon Dark",
    colors: {
      primary: "#e95678",
      info: "#25b0bc",
      secondary: "#fab795",
      background: "#1c1e26",
      planMode: "#16181f",
      selection: "#2e303e",
      thinking: "#232530",
      success: "#09f7a0",
      error: "#e95678",
      surface: "#232630",
      dialogSurface: "#2e3040",
      thinkingBorder: "#6c6f93",
      dimSeparator: "#454863",
    }
  },
  {
    name: "Cobalt2",
    colors: {
      primary: "#ffc600",
      info: "#9effff",
      secondary: "#ff628c",
      background: "#193549",
      planMode: "#122638",
      selection: "#0d3a58",
      thinking: "#1a3f55",
      success: "#3ad900",
      error: "#ff628c",
      surface: "#1f3f5a",
      dialogSurface: "#0d3a58",
      thinkingBorder: "#0088ff",
      dimSeparator: "#1d4b68",
    }
  },
  {
    name: "Panda Syntax",
    colors: {
      primary: "#45a9f9",
      info: "#6fc1ff",
      secondary: "#ff75b5",
      background: "#292a2b",
      planMode: "#1e1e1f",
      selection: "#363738",
      thinking: "#2e2f30",
      success: "#19f9d8",
      error: "#ff2c6d",
      surface: "#303132",
      dialogSurface: "#3c3d3e",
      thinkingBorder: "#676b79",
      dimSeparator: "#4e5052",
    }
  },
  {
    name: "Shades of Purple",
    colors: {
      primary: "#cdb0ff",
      info: "#45a9f9",
      secondary: "#ff628c",
      background: "#1e1e3f",
      planMode: "#17172e",
      selection: "#34345a",
      thinking: "#272748",
      success: "#3ad900",
      error: "#ff628c",
      surface: "#252550",
      dialogSurface: "#2e2e60",
      thinkingBorder: "#7a5ccc",
      dimSeparator: "#44447a",
    }
  },
  {
    name: "Atom One Dark",
    colors: {
      primary: "#61afef",
      info: "#56b6c2",
      secondary: "#c678dd",
      background: "#1e2127",
      planMode: "#17191e",
      selection: "#2c313c",
      thinking: "#252931",
      success: "#98c379",
      error: "#e06c75",
      surface: "#252931",
      dialogSurface: "#2c313c",
      thinkingBorder: "#4b5263",
      dimSeparator: "#3b4048",
    }
  },
  {
    name: "Cyberpunk",
    colors: {
      primary: "#00fff5",
      info: "#007fff",
      secondary: "#ff007f",
      background: "#0d0d1a",
      planMode: "#060610",
      selection: "#1a1a33",
      thinking: "#111124",
      success: "#00ff99",
      error: "#ff0055",
      surface: "#121225",
      dialogSurface: "#1a1a35",
      thinkingBorder: "#3333aa",
      dimSeparator: "#22224d",
    }
  },
  {
    name: "Rosé Pine",
    colors: {
      primary: "#c4a7e7",
      info: "#9ccfd8",
      secondary: "#ebbcba",
      background: "#191724",
      planMode: "#13111e",
      selection: "#26233a",
      thinking: "#1f1d2e",
      success: "#31748f",
      error: "#eb6f92",
      surface: "#1f1d2e",
      dialogSurface: "#26233a",
      thinkingBorder: "#6e6a86",
      dimSeparator: "#403d52",
    }
  },
  {
    name: "Everforest Dark",
    colors: {
      primary: "#7fbbb3",
      info: "#83c092",
      secondary: "#d699b6",
      background: "#272e33",
      planMode: "#1d2326",
      selection: "#374145",
      thinking: "#2e383c",
      success: "#a7c080",
      error: "#e67e80",
      surface: "#2e383c",
      dialogSurface: "#374145",
      thinkingBorder: "#7a8478",
      dimSeparator: "#4f5b58",
    }
  },
  {
    name: "Material Dark",
    colors: {
      primary: "#82aaff",
      info: "#21c7a8",
      secondary: "#c792ea",
      background: "#212121",
      planMode: "#181818",
      selection: "#2d2d2d",
      thinking: "#272727",
      success: "#c3e88d",
      error: "#f07178",
      surface: "#292929",
      dialogSurface: "#333333",
      thinkingBorder: "#616161",
      dimSeparator: "#424242",
    }
  },
]


export const DEFAULT_THEME = THEMES[0];
