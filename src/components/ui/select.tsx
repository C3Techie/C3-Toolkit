import { Icon } from "@/components/ui/icon";
import { NativeOnlyAnimatedView } from "@/components/ui/native-only-animated-view";
import { TextClassContext } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import * as SelectPrimitive from "@rn-primitives/select";
import { Check, ChevronDown } from "lucide-react-native";
import * as React from "react";
import { Platform, StyleSheet } from "react-native";
import { FadeIn, FadeOut, ReduceMotion } from "react-native-reanimated";
import { FullWindowOverlay as RNFullWindowOverlay } from "react-native-screens";

type Option = SelectPrimitive.Option;

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

function SelectValue({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value> & {
  className?: string;
}) {
  const { value } = SelectPrimitive.useRootContext();
  return (
    <SelectPrimitive.Value
      className={cn(
        "text-on-surface dark:text-foreground line-clamp-1 flex flex-row items-center gap-2 text-base font-body-lg",
        !value && "text-outline/50",
        className,
      )}
      {...props}
    />
  );
}

function SelectTrigger({
  className,
  children,
  size = "default",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  children?: React.ReactNode;
  size?: "default" | "sm";
}) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        "w-full h-12 bg-surface-container-low border-2 border-transparent text-on-surface rounded-[12px] px-4 py-2 flex flex-row items-center justify-between gap-2 transition-all",
        "dark:bg-background dark:border dark:border-outline-variant/30 dark:text-foreground",
        Platform.select({
          web: "focus-visible:border-primary focus-visible:bg-surface-container-lowest dark:focus-visible:border-primary dark:focus-visible:bg-background aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive outline-none transition-[color,background-color,border-color] disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0",
        }),
        props.disabled && "opacity-50",
        size === "sm" && "h-9 py-1 rounded-lg",
        className,
      )}
      {...props}
    >
      <>{children}</>
      <Icon
        as={ChevronDown}
        aria-hidden={true}
        className="text-outline/65 size-5"
      />
    </SelectPrimitive.Trigger>
  );
}

const FullWindowOverlay =
  Platform.OS === "ios" ? RNFullWindowOverlay : React.Fragment;

function SelectContent({
  className,
  children,
  position = "popper",
  portalHost,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content> & {
  portalHost?: string;
}) {
  return (
    <SelectPrimitive.Portal hostName={portalHost}>
      <FullWindowOverlay>
        <SelectPrimitive.Overlay
          style={Platform.select({ native: StyleSheet.absoluteFill })}
          asChild={Platform.OS !== "web"}
        >
          <NativeOnlyAnimatedView
            className="z-50"
            entering={FadeIn.reduceMotion(ReduceMotion.System)}
            exiting={FadeOut.reduceMotion(ReduceMotion.System)}
            as="Pressable"
          >
            <TextClassContext.Provider value="text-popover-foreground">
              <SelectPrimitive.Content
                className={cn(
                  "bg-surface-container-lowest border border-outline-variant/30 relative z-50 min-w-[8rem] rounded-[16px] shadow-level-2 dark:bg-surface-container dark:border-outline-variant/20 dark:shadow-none",
                  Platform.select({
                    web: cn(
                      "animate-in fade-in-0 zoom-in-95 origin-(--radix-select-content-transform-origin) max-h-52 overflow-y-auto overflow-x-hidden",
                      props.side === "bottom" && "slide-in-from-top-2",
                      props.side === "top" && "slide-in-from-bottom-2",
                    ),
                    native: "p-1",
                  }),
                  position === "popper" &&
                    Platform.select({
                      web: cn(
                        props.side === "bottom" && "translate-y-1",
                        props.side === "top" && "-translate-y-1",
                      ),
                    }),
                  className,
                )}
                position={position}
                {...props}
              >
                <SelectScrollUpButton />
                <SelectPrimitive.Viewport
                  className={cn(
                    "p-1.5",
                    position === "popper" &&
                      cn(
                        "w-full",
                        Platform.select({
                          web: "h-[var(--radix-select-trigger-height)] min-w-[var(--radix-select-trigger-width)]",
                        }),
                      ),
                  )}
                >
                  {children}
                </SelectPrimitive.Viewport>
                <SelectScrollDownButton />
              </SelectPrimitive.Content>
            </TextClassContext.Provider>
          </NativeOnlyAnimatedView>
        </SelectPrimitive.Overlay>
      </FullWindowOverlay>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      className={cn(
        "text-on-surface-variant px-3 py-2 text-sm font-semibold",
        className,
      )}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "active:bg-accent dark:active:bg-surface-container-high group relative flex w-full flex-row items-center gap-2 rounded-lg py-2.5 pl-3 pr-8",
        Platform.select({
          web: "focus:bg-accent focus:text-accent-foreground dark:focus:bg-surface-container-high dark:focus:text-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 cursor-default outline-none data-[disabled]:pointer-events-none [&_svg]:pointer-events-none",
        }),
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemIndicator className="absolute right-3 top-1/2 -translate-y-1/2">
        <Icon as={Check} className="text-primary size-5" />
      </SelectPrimitive.ItemIndicator>
      <SelectPrimitive.ItemText className="text-on-surface dark:text-foreground text-base" />
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      className={cn("bg-outline-variant/30 h-px my-1", className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      className={cn("flex items-center justify-center py-1", className)}
      {...props}
    />
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      className={cn("flex items-center justify-center py-1", className)}
      {...props}
    />
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue
};
export type { Option };

