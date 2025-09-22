import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MoodDetoxScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood Detox</Text>
      <Text style={styles.subtitle}>Cleanse and reset your emotional state</Text>
      <Text style={styles.description}>
        This screen will provide guided exercises to help you detox negative emotions and reset your mood through mindfulness and relaxation techniques.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#5fb3a3',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    lineHeight: 24,
  },
});