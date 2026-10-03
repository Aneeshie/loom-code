
import { TextAttributes } from "@opentui/core";

export function Header() {
  return (
    <box justifyContent="center" alignItems="center" gap={1}>
      <box flexDirection="row" justifyContent="center" gap={1} alignItems="center">
        <ascii-font font="tiny" text="Loom" color="#ff5a2f" />
        <ascii-font font="tiny" text="Code" color="#e28743" />
      </box>
    </box>
  );
}
