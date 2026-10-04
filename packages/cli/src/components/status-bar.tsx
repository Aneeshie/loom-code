import { TextAttributes } from "@opentui/core";
import { useTheme } from "../providers/theme";

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
  const { colors } = useTheme();
  return (
    <box flexDirection="row" justifyContent="space-between" alignItems="center" width="100%">
      <box flexDirection="row" gap={1} alignItems="center">
        <box backgroundColor={colors.selection} paddingX={1}>
          <text fg={colors.primary} attributes={TextAttributes.BOLD}>
            ◈ {mode}
          </text>
        </box>
        <text fg={colors.secondary}>➔</text>
        <text fg={colors.info}>{model}</text>
        <text fg={colors.dimSeparator}>·</text>
        <text fg={colors.secondary}>{relay}</text>
      </box>
      <box flexDirection="row" gap={1} alignItems="center">
        <text fg={colors.secondary}>↵</text>
        <text fg={colors.dimSeparator}>send</text>
      </box>
    </box>
  );
}
