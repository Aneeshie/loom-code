import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { Header } from "./components/header";
import { InputBar } from "./components/input-bar";

function App() {
  return (
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
        <InputBar />
      </box>
      <box flexDirection="row" gap={2}>
        <text fg="#5c382f">[Tab] Switch Mode</text>
        <text fg="#3a221c">·</text>
        <text fg="#5c382f">[/] Commands</text>
        <text fg="#3a221c">·</text>
        <text fg="#5c382f">[Ctrl+C] Abort</text>
      </box>
    </box>
  );
}

const renderer = await createCliRenderer();
createRoot(renderer).render(<App />);
