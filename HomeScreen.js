import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.backgroundImage}>
      <View style={styles.container}>
      
      {/* Circle button in the center */}
      <TouchableOpacity style={styles.circleButton}>
        <View />
      </TouchableOpacity>
      <Text style={styles.readyText}>Ready to help</Text>
      
      {/* Main heading */}
      <Text style={styles.mainHeading}>
        Your calm companion, <Text style={styles.highlightText}>any time</Text>
      </Text>
      
      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Breathe. Ground. Journal. Detox your mood—guided by a kind voice.
      </Text>
      
      {/* Start Panic Support button */}
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Start Panic Support</Text>
      </TouchableOpacity>
      
      {/* Ready to help text */}
      <Text style={styles.readyToHelpText}>Ready To Help</Text>
      
      {/* Guidance text */}
      <Text style={styles.guidanceText}>
        I'll guide you through breathing and grounding exercises
      </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#e8f4f8',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(248, 249, 250, 0.85)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  circleButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#5fb3a3',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  readyText: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 40,
  },
  mainHeading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 40,
  },
  highlightText: {
    color: '#5fb3a3',
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  startButton: {
    backgroundColor: '#5fb3a3',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  startButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  readyToHelpText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 10,
  },
  guidanceText: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});