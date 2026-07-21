import React from 'react';
import { View, Text, ScrollView, Image, useColorScheme, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LOGO_LIGHT = require('../../assets/images/c3_toolkit_logo_light.png');
const LOGO_DARK  = require('../../assets/images/c3_toolkit_logo_dark.png');

export default function HomeScreen() {
  const isDark = useColorScheme() === 'dark';

  return (
    <View className="flex-1 bg-background">
      <SafeAreaView className="flex-1" edges={['top', 'left', 'right']}>
        <ScrollView className="flex-1 px-6 py-4">

          {/* Header */}
          <View className="mb-8 mt-4">
            <Text className="font-bold text-3xl text-on-surface dark:text-primary tracking-tight">
              C3 Toolkit
            </Text>
            <Text className="text-sm text-on-surface-variant/80 mt-1">
              Everyday tools in one place.
            </Text>
          </View>

          {/* ── Logo test ────────────────────────────────────────────────── */}
          {/* This section is temporary — confirms logos render on web.      */}
          <View className="mb-6 p-4 bg-surface-container-low rounded-2xl border border-outline-variant/20">
            <Text className="text-xs text-on-surface-variant font-semibold uppercase tracking-widest mb-4">
              Logo render test
            </Text>

            <View style={styles.logoRow}>
              {/* Light logo */}
              <View style={styles.logoBox}>
                <Image
                  source={LOGO_LIGHT}
                  style={styles.logo}
                  resizeMode="contain"
                />
                <Text className="text-xs text-on-surface-variant mt-2 text-center">
                  Light
                </Text>
              </View>

              {/* Dark logo */}
              <View style={[styles.logoBox, styles.logoBoxDark]}>
                <Image
                  source={LOGO_DARK}
                  style={styles.logo}
                  resizeMode="contain"
                />
                <Text className="text-xs text-on-surface-variant mt-2 text-center">
                  Dark
                </Text>
              </View>
            </View>

            <Text className="text-xs text-on-surface-variant/60 mt-3">
              Active theme: <Text className="font-semibold">{isDark ? 'Dark' : 'Light'}</Text>
            </Text>
          </View>
          {/* ── End logo test ─────────────────────────────────────────────── */}

          {/* Get Started card */}
          <View className="bg-surface-container-low border border-outline-variant/20 p-6 rounded-2xl shadow-sm">
            <Text className="font-bold text-lg text-on-surface">Get Started</Text>
            <Text className="text-sm text-on-surface-variant mt-2 leading-relaxed">
              Your design tokens, custom typography, spacing systems, and animated splash screen transition are fully active.
            </Text>
            <Text className="text-sm text-on-surface-variant mt-4 leading-relaxed">
              To build a new tool, create a directory under{' '}
              <Text className="font-mono text-primary font-semibold">src/features/</Text>{' '}
              and route it in{' '}
              <Text className="font-mono text-primary font-semibold">src/app/</Text>.
            </Text>
          </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  logoRow: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: '#f7f9fb',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.08)',
  },
  logoBoxDark: {
    backgroundColor: '#1e293b',
    borderColor: 'rgba(255,255,255,0.08)',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
});
