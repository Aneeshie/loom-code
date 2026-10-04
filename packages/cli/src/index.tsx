import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { Header } from "./components/header";
import { InputBar } from "./components/input-bar";
import { ToastProvider } from "./providers/toast";
import { KeyboardLayerProvider } from "./providers/keyboard-layer";
import { DialogProvider } from "./providers/dialog";

function App() {
  return (
    <KeyboardLayerProvider>
      <DialogProvider>
        <ToastProvider>
          <box
            alignItems="center"
            justifyContent="center"
            backgroundColor="#0a0607"
            width="100%"
            height="100%"
            gap={2}
          >
            <Header />
            <box width="100%" maxWidth={80} paddingX={2}>
              <InputBar onSubmit={() => {}}/>
            </box>
            <box flexDirection="row" gap={2}>
              <text fg="#5c382f">[Tab] Switch Mode</text>
              <text fg="#3a221c">·</text>
              <text fg="#5c382f">[/] Commands</text>
              <text fg="#3a221c">·</text>
              <text fg="#5c382f">[Ctrl+C] Abort</text>
            </box>
          </box>
        </ToastProvider>
      </DialogProvider>
    </KeyboardLayerProvider>
  );
}

const renderer = await createCliRenderer({
  targetFps: 60,
  exitOnCtrlC: false,
});
createRoot(renderer).render(<App />);
