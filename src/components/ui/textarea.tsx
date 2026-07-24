import { cn } from "@/lib/utils";
import { colors } from "@/theme";
import * as React from "react";
import { Platform, TextInput, useColorScheme } from "react-native";

function Textarea({
  className,
  multiline = true,
  numberOfLines = Platform.select({ web: 2, native: 8 }),
  ...props
}: React.ComponentProps<typeof TextInput>) {
  const colorScheme = useColorScheme();
  const themeColors = colors[colorScheme === "dark" ? "dark" : "light"];

  return (
    <TextInput
      className={cn(
        "w-full min-h-24 bg-surface-container-low border-2 border-transparent text-on-surface rounded-[12px] px-4 py-3 text-base leading-5 transition-all",
        "dark:bg-background dark:border dark:border-outline-variant/30 dark:text-foreground",
        Platform.select({
          web: cn(
            "selection:bg-primary selection:text-primary-foreground outline-none transition-[color,background-color,border-color]",
            "focus-visible:border-primary focus-visible:bg-surface-container-lowest",
            "dark:focus-visible:border-primary dark:focus-visible:ring-1 dark:focus-visible:ring-primary/20 dark:focus-visible:bg-background",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          ),
          native: "placeholder:text-outline/40",
        }),
        props.editable === false && "opacity-50",
        className,
      )}
      placeholderTextColor={themeColors.outline + "80"}
      multiline={multiline}
      numberOfLines={numberOfLines}
      textAlignVertical="top"
      {...props}
    />
  );
}

export { Textarea };
