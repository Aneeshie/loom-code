import { InputRenderable, ScrollBoxRenderable, TextAttributes } from "@opentui/core";
import { useCallback, useRef, useState } from "react";
import { useKeyboardLayer } from "../providers/keyboard-layer";
import { useKeyboard } from "@opentui/react";
import { useTheme } from "../providers/theme";

const MAX_VISIBLE_ITEMS = 6


type DialogSearchItemsProps<T> = {
  items: T[];
  onSelect: (item: T) => void;
  onHighlight?: (item: T) => void;
  filterFn: (item: T, query: string) => boolean;
  renderItem: (item: T, isSelected: boolean) => React.ReactNode;
  getKey: (item: T) => string;
  placeHolder?: string;
  emptyText?: string;
};


export function DialogSearchList<T>({ items, onSelect, onHighlight, filterFn, renderItem, getKey, placeHolder = "Search...", emptyText="No results" }: DialogSearchItemsProps<T>) {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<InputRenderable>(null);
  const scrollRef = useRef<ScrollBoxRenderable>(null);
  const { isTopLayer } = useKeyboardLayer()
  const { colors } = useTheme()

  const handleContentChange = useCallback(() => {
    const text = inputRef.current?.value ?? "";
    setSearchValue(text)
    setSelectedIndex(0)

    const scrollbox = scrollRef.current
    if (scrollbox) {
      scrollbox.scrollTo(0)
    }
  }, []);

  const filtered = searchValue ? items.filter((item) => filterFn(item, searchValue)) : items;

  // Each item is height=1 with gap=1 between items, so total height = items + (items-1) gaps
  const visibleCount = Math.min(filtered.length, MAX_VISIBLE_ITEMS);
  const visibleHeight = visibleCount > 0 ? visibleCount * 2 - 1 : 0;

  useKeyboard((key) => {
    if (!isTopLayer("dialog")) return;

    if (key.name === "return" || key.name === "enter") {
      const item = filtered[selectedIndex];
      if (item) {
        onSelect(item)
      }
    } else if (key.name === "up") {
      setSelectedIndex((i) => {
        const newIndex = Math.max(i - 1, 0);
        const sb = scrollRef.current;
        if (sb) {
          const renderedRow = newIndex * 2;
          if (renderedRow < sb.scrollTop) {
            sb.scrollTo(renderedRow);
          }
        }
        const item = filtered[newIndex];
        if (item && onHighlight) onHighlight(item);
        return newIndex;
      })
    } else if (key.name === "down") {
      setSelectedIndex((i) => {
        const newIndex = Math.min(i + 1, filtered.length - 1);
        const sb = scrollRef.current;
        if (sb) {
          const viewPortHeight = sb.viewport.height;
          const renderedRow = newIndex * 2;
          const visibleEnd = sb.scrollTop + viewPortHeight;
          if (renderedRow >= visibleEnd) {
            sb.scrollTo(renderedRow - viewPortHeight + 1);
          }
        }
        const item = filtered[newIndex];
        if (item && onHighlight) onHighlight(item);
        return newIndex;
      })
    }
  });

  return (
    <box flexDirection="column" gap={1}>
      <input
        ref={inputRef}
        onContentChange={handleContentChange}
        placeholder={placeHolder}
        keyAliasMap={{ up: "", down: "" }}
      />
      {filtered.length === 0 ? <text attributes={TextAttributes.DIM}>{emptyText}</text> : (
        <scrollbox ref={scrollRef} height={visibleHeight}>
          <box flexDirection="column" gap={1}>
            {filtered.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <box
                  key={getKey(item)}
                  flexDirection="row"
                  height={1}
                  overflow="hidden"
                  backgroundColor={isSelected ? colors.selection : undefined}
                  onMouseMove={() => {
                    setSelectedIndex(index);
                    if (onHighlight) onHighlight(item);
                  }}
                  onMouseDown={() => onSelect(item)}
                >
                  {renderItem(item, isSelected)}
                </box>
              )
            })}
          </box>
        </scrollbox>
      )}
    </box>

  )

}
