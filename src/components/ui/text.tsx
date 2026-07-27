import { cn } from "@/lib/utils";
import { Slot } from "@rn-primitives/slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Platform, Text as RNText, StyleSheet, type Role } from "react-native";


const textVariants = cva(
  cn(
    "text-foreground text-base",
    Platform.select({
      web: "select-text",
    }),
  ),
  {
    variants: {
      variant: {
        default: "",
        headlineXl: "font-bold tracking-tight",
        headlineLg: "font-bold tracking-tight",
        headlineLgMobile: "font-bold tracking-tight",
        headlineMd: "font-semibold tracking-tight",
        titleLg: "font-semibold tracking-tight",
        sectionHeading: "font-semibold tracking-tight",
        bodyLg: "font-normal leading-relaxed",
        bodyMd: "font-normal leading-normal",
        bodySm: "font-normal leading-normal",
        labelMd: "font-semibold uppercase tracking-wider",
        labelSm: "font-medium",
        h1: cn(
          "text-center text-4xl font-extrabold tracking-tight",
          Platform.select({ web: "scroll-m-20 text-balance" }),
        ),
        h2: cn(
          "border-border border-b pb-2 text-3xl font-semibold tracking-tight",
          Platform.select({ web: "scroll-m-20 first:mt-0" }),
        ),
        h3: cn(
          "text-2xl font-semibold tracking-tight",
          Platform.select({ web: "scroll-m-20" }),
        ),
        h4: cn(
          "text-xl font-semibold tracking-tight",
          Platform.select({ web: "scroll-m-20" }),
        ),
        p: "mt-3 leading-7 sm:mt-6",
        blockquote: "mt-4 border-l-2 pl-3 italic sm:mt-6 sm:pl-6",
        code: cn(
          "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        ),
        lead: "text-muted-foreground text-xl",
        large: "text-lg font-semibold",
        small: "text-sm font-medium leading-none",
        muted: "text-muted-foreground text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type TextVariantProps = VariantProps<typeof textVariants>;
type TextVariant = NonNullable<TextVariantProps["variant"]>;

const ROLE: Partial<Record<TextVariant, Role>> = {
  h1: "heading",
  h2: "heading",
  h3: "heading",
  h4: "heading",
  headlineXl: "heading",
  headlineLg: "heading",
  headlineLgMobile: "heading",
  headlineMd: "heading",
  blockquote: Platform.select({ web: "blockquote" as Role }),
  code: Platform.select({ web: "code" as Role }),
};

const ARIA_LEVEL: Partial<Record<TextVariant, string>> = {
  h1: "1",
  h2: "2",
  h3: "3",
  h4: "4",
  headlineXl: "1",
  headlineLg: "2",
  headlineLgMobile: "2",
  headlineMd: "3",
};

const variantFontStyle = StyleSheet.create({
  headlineXl: { fontSize: 48, lineHeight: 56, letterSpacing: -0.96 },
  headlineLg: { fontSize: 32, lineHeight: 40, letterSpacing: -0.32 },
  headlineLgMobile: { fontSize: 24, lineHeight: 32 },
  headlineMd: { fontSize: 24, lineHeight: 32 },
  titleLg: { fontSize: 22, lineHeight: 28 },
  sectionHeading: { fontSize: 18, lineHeight: 24 },
  bodyLg: { fontSize: 18, lineHeight: 28 },
  bodyMd: { fontSize: 16, lineHeight: 24 },
  bodySm: { fontSize: 14, lineHeight: 20 },
  labelMd: { fontSize: 14, lineHeight: 16 },
  labelSm: { fontSize: 12, lineHeight: 14 },
});

const TextClassContext = React.createContext<string | undefined>(undefined);

function Text({
  className,
  asChild = false,
  variant = "default",
  style,
  ...props
}: React.ComponentProps<typeof RNText> &
  TextVariantProps & {
    asChild?: boolean;
  }) {
  const textClass = React.useContext(TextClassContext);
  const Component = asChild ? Slot : RNText;
  const fontStyle = variant && variant in variantFontStyle
    ? variantFontStyle[variant as keyof typeof variantFontStyle]
    : undefined;
  return (
    <Component
      className={cn(textVariants({ variant }), textClass, className)}
      role={variant ? ROLE[variant] : undefined}
      aria-level={variant ? ARIA_LEVEL[variant] : undefined}
      style={[fontStyle, style]}
      {...props}
    />
  );
}

export { Text, TextClassContext };
export type { TextVariantProps };

