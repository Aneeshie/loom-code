import { ScrollBoxRenderable} from "@opentui/core";
import { useMemo, useRef, useState, type RefObject } from "react";
import type { Command } from "./types";
import { getFilteredCommands } from "./filter-commands";
import { useKeyboard } from "@opentui/react";
import { useKeyboardLayer } from "../../providers/keyboard-layer";


type UseCommandMenuProps = {
  showCommandMenu: boolean;
  commandQuery: string;
  selectedIndex: number;
  scrollRef: RefObject<ScrollBoxRenderable| null>;
  handleContentChange: (text: string) => void;
  resolveCommand: (index: number) => Command | undefined;
  setSelectedIndex: (index: number) => void
};


export function useCommandMenu(): UseCommandMenuProps {
  const [textValue, setTextValue] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [showCommandMenu, setShowCommandMenu] = useState(false)
  const scrollRef = useRef<ScrollBoxRenderable>(null);
  const {push, pop, isTopLayer} = useKeyboardLayer()

  const commandQuery = showCommandMenu && textValue.startsWith("/") ? textValue.slice(1) : "";

  const filteredCommand = useMemo(() => getFilteredCommands(commandQuery), [commandQuery])

  const handleContentChange = (text: string) => {
    setTextValue(text)
    setSelectedIndex(0)

    const scrollbox = scrollRef.current;
    if (scrollbox) {
      scrollbox.scrollTo(0)
    }

    const prefix = text.startsWith("/") ? text.slice(1) : null;
    if (prefix !== null && !prefix.includes(" ")) {
      setShowCommandMenu(true);
      //TODO: magic commands here gotta improve this later.
      push("command", () => {
        setShowCommandMenu(false)
        pop("command")
        return true;
      })
    } else {
      setShowCommandMenu(false);
      pop("command")
    }
  };

  // resolve a command at an index (returns the command, caller handles execution)
  const resolveCommand = (index: number): Command | undefined => {
    const command = filteredCommand[index];
    if (command) {
      setShowCommandMenu(false)
      //TODO: magic commands here gotta improve this later.
      pop("command")
    }
    return command;
  }

  // arrow keys the hard part :/
  useKeyboard((event) => {
    if (!showCommandMenu || !isTopLayer("command")) false

    if (event.name === "escape") {
      event.preventDefault();
      setShowCommandMenu(false);
      //TODO: magic commands here gotta improve this later.
      pop("command")

    } else if (event.name === "up") {
      event.preventDefault()
      setSelectedIndex((i: number) => {
        const newIndex = Math.max(0, i - 1);
        // keep the highlighted item visible when arrow past
        const scrollbar = scrollRef.current;
        if (scrollbar && newIndex < scrollbar.scrollTop) {
          scrollbar.scrollTo(newIndex);
        }
        return newIndex
      })
    } else if (event.name === 'down') {
      event.preventDefault()
      setSelectedIndex((i: number) => {
        if (filteredCommand.length === 0) {
          return 0;
        }

        const newIndex = Math.min(filteredCommand.length - 1, i + 1)
        const scrollbar = scrollRef.current;
        if (scrollbar) {
          const viewPortHeight = scrollbar.viewport.height
          const visibleEnd = scrollbar.scrollTop + viewPortHeight - 1
          if (newIndex > visibleEnd) {
            scrollbar.scrollTo(newIndex - viewPortHeight + 1)
          }
        }
        return newIndex
      })
    }
  })

  return {
    showCommandMenu,
    commandQuery,
    selectedIndex,
    scrollRef,
    handleContentChange,
    resolveCommand,
    setSelectedIndex
  }
}
