import { COMMANDS } from "./commands";
import type { Command } from "./types";

export function getFilteredCommands(query: string): Command[] {
  const normalized = query.trim().replace(/^\//, "").toLowerCase();
  if (normalized.length === 0) return COMMANDS;
  return COMMANDS.filter(
    (cmd) =>
      cmd.name.toLowerCase().startsWith(normalized) ||
      cmd.value.toLowerCase().startsWith(`/${normalized}`) ||
      cmd.description.toLowerCase().includes(normalized)
  );
}
