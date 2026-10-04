import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { Header } from "./components/header";
import { InputBar } from "./components/input-bar";
import { ToastProvider } from "./providers/toast";
import { KeyboardLayerProvider } from "./providers/keyboard-layer";
import { DialogProvider } from "./providers/dialog";
import { ThemeProvider, useTheme } from "./providers/theme";

function ThemedRoot() {
  const { colors } = useTheme()

  return (
    <box
      alignItems="center"
      justifyContent="center"
      backgroundColor={colors.background}
      width="100%"
      height="100%"
      gap={2}
    >
      <Header />
      <box width="100%" maxWidth={80} paddingX={2}>
        <InputBar onSubmit={() => {}}/>
      </box>
      <box flexDirection="row" gap={2}>
        <text fg={colors.dimSeparator}>[Tab] Switch Mode</text>
        <text fg={colors.dimSeparator}>·</text>
        <text fg={colors.dimSeparator}>[/] Commands</text>
        <text fg={colors.dimSeparator}>·</text>
        <text fg={colors.dimSeparator}>[Ctrl+C] Abort</text>
      </box>
    </box>
  )
}

function App() {
  return (
    <ThemeProvider>
      <KeyboardLayerProvider>
        <DialogProvider>
          <ToastProvider>
            <ThemedRoot />
          </ToastProvider>
        </DialogProvider>
      </KeyboardLayerProvider>
    </ThemeProvider>
  );
}

const renderer = await createCliRenderer({
  targetFps: 60,
  exitOnCtrlC: false,
});
createRoot(renderer).render(<App />);
