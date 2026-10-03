import { StatusBar } from "./status-bar";

type Props = {
  disabled?: boolean;
  onSubmit?: () => void;
};

export function InputBar({ disabled = false, onSubmit }: Props) {
  return (
    <box width="100%">
      <box
        border
        borderStyle="rounded"
        borderColor="#a63f26"
        focusedBorderColor="#ff6239"
        backgroundColor="#160e10"
        width="100%"
        paddingX={2}
        paddingY={1}
        gap={1}
      >
        <textarea
          focused={!disabled}
          width="100%"
          minHeight={2}
          placeholder={`Ask anything... "Fix a bug in prod"`}
          placeholderColor="#734e44"
          textColor="#fdeee9"
          backgroundColor="transparent"
          onSubmit={onSubmit}
        />

        <StatusBar />
      </box>
    </box>
  );
}
