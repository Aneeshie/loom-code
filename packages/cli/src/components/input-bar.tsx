import { resolveCoreSlot, TextareaRenderable } from "@opentui/core";
import { CommandPalette } from "./command-menu";
import { StatusBar } from "./status-bar";
import { useCallback, useEffect, useRef } from "react";
import { useRenderer } from "@opentui/react";
import { useCommandMenu } from "./command-menu/use-command-menu";
import type { Command } from "./command-menu/types";
import { useToast } from "../providers/toast";
import { useKeyboardLayer } from "../providers/keyboard-layer";
import { useDialog } from "../providers/dialog";
import { useTheme } from "../providers/theme";

type Props = {
  disabled?: boolean;
  onSubmit: (text: string) => void;
};

export function InputBar({ disabled = false, onSubmit }: Props) {

  const textAreaRef = useRef<TextareaRenderable>(null);
  const onSubmitRef = useRef<() => void>(() => { });
  const renderer = useRenderer();
  const toast = useToast();
  const dialog = useDialog();
  const { isTopLayer, setResponder} = useKeyboardLayer();
  const { colors } = useTheme();

  const {
    showCommandMenu,
    commandQuery,
    selectedIndex,
    scrollRef,
    handleContentChange,
    resolveCommand,
    setSelectedIndex,
  } = useCommandMenu()

   const handleTextAreaContentChange = useCallback(() => {
    const textarea = textAreaRef.current
    if (!textarea) return;

    handleContentChange(textarea.plainText)
  }, [])

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    const textarea = textAreaRef.current
    if (!textarea) return

    const text = textarea.plainText.trim();
    if (text.length === 0) return

    onSubmit(text);
    textarea.setText("");
  }, [disabled,onSubmit])

  const handleCommand = useCallback((command: Command| undefined) => {
    const textArea = textAreaRef.current
    if (!textArea || !command) return;

    textArea.setText("");
    if (command.action) {
      command.action({
        exit: () => {
          renderer.destroy()
        },
        toast,
        dialog,
      })
    } else {
      textArea.insertText(command.value + " ");
    }
  }, [renderer, toast])


  const handleCommandExecute = useCallback((index: number) => {
     const command = resolveCommand(index);
     handleCommand(command)
   }, [resolveCommand, handleCommand])

  // wire up textarea submit handle once so it always reads the new state.
  useEffect(() => {
    const textarea = textAreaRef.current
    if (!textarea) return

    textarea.onSubmit = () => {
      onSubmitRef.current();
    }
  }, [])

  onSubmitRef.current = () => {
    if (disabled) return

    if (showCommandMenu) {
      const command = resolveCommand(selectedIndex)
      handleCommand(command)
      return;
    }

    handleSubmit();
  }

  //Register the base layer responder for ctrl + c
  useEffect(() => {
    setResponder("base", () => {
      if (disabled) return false;

      const textarea = textAreaRef.current;
      if (textarea && textarea.plainText.length > 0) {
        textarea.setText("");
        return true
      }

      return false;
    })

    return () => {
      setResponder("base", null);
    }
  }, [disabled, setResponder])


  return (
    <box width="100%">
      <box
        border
        borderStyle="rounded"
        borderColor={colors.primary}
        focusedBorderColor={colors.secondary}
        backgroundColor={colors.surface}
        width="100%"
        paddingX={2}
        paddingY={1}
        gap={1}
      >
        {showCommandMenu &&
          <box position="absolute" bottom={"100%"} left={0} width={"100%"} backgroundColor={colors.surface} zIndex={10}>
            <CommandPalette
              query={commandQuery}
              selectedIndex={selectedIndex}
              scrollRef={scrollRef}
              onSelect={setSelectedIndex}
              onExecute={handleCommandExecute}
            />
          </box>
        }
        <textarea
          focused={!disabled && (isTopLayer("base") || isTopLayer("command"))}
          width="100%"
          minHeight={2}
          placeholder={`Ask anything... "Fix a bug in prod"`}
          placeholderColor={colors.dimSeparator}
          textColor={colors.primary}
          backgroundColor="transparent"
          onContentChange={handleTextAreaContentChange}
          ref={textAreaRef}
        />

        <StatusBar />
      </box>
    </box>
  );
}
