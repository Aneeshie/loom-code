import { TextAttributes } from "@opentui/core";

type Props = {
  mode?: string;
  model?: string;
  relay?: string;
};

export function StatusBar({
  mode = "BUILD",
  model = "sonnet-5-5",
  relay = "jezero-relay",
}: Props) {
  return (
    <box flexDirection="row" justifyContent="space-between" alignItems="center" width="100%">
      <box flexDirection="row" gap={1} alignItems="center">
        <box backgroundColor="#38140e" paddingX={1}>
          <text fg="#ff7844" attributes={TextAttributes.BOLD}>
            ◈ {mode}
          </text>
        </box>
        <text fg="#7d4e41">➔</text>
        <text fg="#e8b298">{model}</text>
        <text fg="#5c382f">·</text>
        <text fg="#9e6859">{relay}</text>
      </box>
      <box flexDirection="row" gap={1} alignItems="center">
        <text fg="#7d4e41">↵</text>
        <text fg="#6b453b">send</text>
      </box>
    </box>
  );
}
