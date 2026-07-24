import { colors, icons } from "@/theme";
import { useState } from "react";
import { ScrollView, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Import our custom UI components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  // State for components showcase
  const [activeTab, setActiveTab] = useState("metric");
  const [inputText, setInputText] = useState("");

  // Resolve theme colors dynamically (eliminates hardcoded hex values)
  const currentTheme = colors[isDark ? "dark" : "light"];

  // Icon definitions (using Lucide React Native components directly from theme)
  const SearchIcon = icons.search;
  const CalcIcon = icons.calculator;
  const ToolsIcon = icons.converter;
  const SettingsIcon = icons.settings;
  const AlertIcon = icons.alert;

  return (
    <View className="flex-1 bg-background">
      <SafeAreaView
        className="flex-1"
        edges={["top", "left", "right", "bottom"]}
      >
        <ScrollView className="flex-1 px-container-padding py-6">
          {/* ── HEADER SECTION ─── */}
          <View className="flex-row justify-between items-center mb-8 mt-2">
            <View>
              <Text className="font-sans text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight">
                C3 Toolkit
              </Text>
              <Text className="font-sans text-body-sm text-on-surface-variant mt-1"></Text>
            </View>

            {/* Theme indicator — read-only (follows OS setting) */}
            <View className="flex-row items-center gap-1.5 rounded-lg border border-outline-variant/30 px-3 py-1.5">
              <Text className="font-sans text-xs font-semibold text-on-surface-variant">
                {isDark ? "🌙 DARK" : "☀️ LIGHT"}
              </Text>
            </View>
          </View>

          {/* ── BENTO-STYLE UTILITY CARDS ── */}
          <Text className="font-sans text-label-md text-primary dark:text-primary-fixed uppercase tracking-wider mb-3">
            Mockup Bento Grid Cards
          </Text>
          <View className="flex-col md:flex-row gap-6 mb-8">
            {/* Unit Converter Card Mockup */}
            <View className="flex-1">
              <Card className="relative overflow-hidden h-full">
                <View className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
                <CardHeader className="flex-row items-center gap-4">
                  {/* Icon container styles */}
                  <View className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container dark:bg-background dark:border dark:border-outline-variant/30 flex items-center justify-center shadow-sm">
                    <ToolsIcon
                      size={24}
                      color={
                        isDark
                          ? currentTheme.primaryContainer
                          : currentTheme.onPrimaryContainer
                      }
                    />
                  </View>
                  <View className="flex-1">
                    <CardTitle>Unit Converter</CardTitle>
                    <CardDescription>
                      Seamlessly convert length, weight, and volumes.
                    </CardDescription>
                  </View>
                </CardHeader>
                <CardContent>
                  <Text className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                    Fully styled using large component corners (24px radius),
                    surface-container backgrounds, and semantic shadows.
                  </Text>
                </CardContent>
                <CardFooter className="pt-2 mt-auto">
                  <Button
                    variant="outline"
                    className="flex-row items-center gap-2"
                  >
                    <Text className="font-sans text-sm font-semibold">
                      Open Tool
                    </Text>
                  </Button>
                </CardFooter>
              </Card>
            </View>

            {/* BMI Calculator Card Mockup */}
            <View className="flex-1">
              <Card className="relative overflow-hidden h-full">
                <View className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full pointer-events-none" />
                <CardHeader className="flex-row items-center gap-4">
                  {/* Icon container styles */}
                  <View className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container dark:bg-background dark:border dark:border-outline-variant/30 flex items-center justify-center shadow-sm">
                    <CalcIcon
                      size={24}
                      color={
                        isDark
                          ? currentTheme.secondaryFixed
                          : currentTheme.onSecondaryContainer
                      }
                    />
                  </View>
                  <View className="flex-1">
                    <CardTitle>BMI Calculator</CardTitle>
                    <CardDescription>
                      Determine body mass metrics instantly.
                    </CardDescription>
                  </View>
                </CardHeader>
                <CardContent>
                  <Text className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                    Dark mode defaults to surface elevation layers without heavy
                    drop shadows to prevent ink-bleed.
                  </Text>
                </CardContent>
                <CardFooter className="pt-2 mt-auto">
                  <Button
                    variant="default"
                    className="flex-row items-center gap-2"
                  >
                    <Text className="font-sans text-sm font-semibold text-primary-foreground">
                      Calculate BMI
                    </Text>
                  </Button>
                </CardFooter>
              </Card>
            </View>
          </View>

          {/* ── FORM ELEMENTS SHOWCASE ─── */}
          <Text className="font-sans text-label-md text-primary dark:text-primary-fixed uppercase tracking-wider mb-3">
            Form & Input Components
          </Text>
          <Card className="mb-8">
            <CardContent className="gap-6 py-6">
              {/* Input text field with icon */}
              <View className="flex-col gap-2">
                <Text className="font-sans text-section-heading text-on-surface">
                  Search Utilities
                </Text>
                <View className="relative justify-center">
                  <View className="absolute left-4 z-10 pointer-events-none">
                    <SearchIcon size={18} color={currentTheme.outline} />
                  </View>
                  <Input
                    className="pl-12"
                    placeholder="Search utilities..."
                    value={inputText}
                    onChangeText={setInputText}
                  />
                </View>
              </View>

              {/* Segmented controls (TabsList / TabsTrigger) */}
              <View className="flex-col gap-2">
                <Text className="font-sans text-section-heading text-on-surface">
                  Unit Scale
                </Text>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList>
                    <TabsTrigger value="metric">
                      <Text className="font-sans text-sm">Metric</Text>
                    </TabsTrigger>
                    <TabsTrigger value="imperial">
                      <Text className="font-sans text-sm">Imperial</Text>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </View>

              {/* Select Dropdown Component */}
              <View className="flex-col gap-2">
                <Text className="font-sans text-section-heading text-on-surface">
                  Measurement Category
                </Text>
                <Select
                  defaultValue={{ value: "length", label: "Length / Distance" }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="length" label="Length / Distance" />
                      <SelectItem value="weight" label="Weight / Mass" />
                      <SelectItem value="temp" label="Temperature" />
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </View>
            </CardContent>
          </Card>

          {/* ── CHIPS & STATUS CHIPS (Badge) ─── */}
          <Text className="font-sans text-label-md text-primary dark:text-primary-fixed uppercase tracking-wider mb-3">
            Chips & Status Badges
          </Text>
          <Card className="mb-8">
            <CardContent className="flex-row flex-wrap gap-3 py-6">
              {/* Active Chip */}
              <Badge variant="default">
                <Text className="font-sans text-xs font-semibold">
                  Active Chip
                </Text>
              </Badge>

              {/* Secondary/Info Chip */}
              <Badge variant="secondary">
                <Text className="font-sans text-xs font-semibold">
                  Secondary
                </Text>
              </Badge>

              {/* Inactive Outline Chip */}
              <Badge variant="outline">
                <Text className="font-sans text-xs font-semibold">
                  Inactive
                </Text>
              </Badge>

              {/* Status/Warning Chip */}
              <Badge
                variant="destructive"
                className="flex-row items-center gap-1.5"
              >
                <AlertIcon size={12} color={currentTheme.error} />
                <Text className="font-sans text-xs font-semibold">
                  Alert Status
                </Text>
              </Badge>
            </CardContent>
          </Card>

          {/* ── BUTTON VARIANTS ─── */}
          <Text className="font-sans text-label-md text-primary dark:text-primary-fixed uppercase tracking-wider mb-3">
            Button Style Palette
          </Text>
          <Card className="mb-12">
            <CardContent className="gap-4 py-6">
              <Button variant="default">
                <Text className="font-sans text-base font-semibold text-primary-foreground">
                  Primary Action
                </Text>
              </Button>
              <Button variant="secondary">
                <Text className="font-sans text-base font-semibold text-secondary-foreground dark:text-on-secondary-container">
                  Secondary Action
                </Text>
              </Button>
              <Button variant="outline">
                <Text className="font-sans text-base font-semibold text-on-surface">
                  Outline Action
                </Text>
              </Button>
              <Button variant="ghost" className="flex-row gap-2">
                <SettingsIcon size={18} color={currentTheme.primary} />
                <Text className="font-sans text-base font-semibold text-primary dark:text-primary-fixed">
                  Settings Configuration
                </Text>
              </Button>
            </CardContent>
          </Card>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
