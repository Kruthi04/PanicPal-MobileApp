import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import PanicSupportScreen from './PanicSupportScreen';
import JournalScreen from './JournalScreen';
import MoodDetoxScreen from './MoodDetoxScreen';

const Drawer = createDrawerNavigator();



// Custom drawer content with icons
function CustomDrawerContent({ navigation, state }) {
  const routes = [
    { name: 'Home', icon: 'home-outline', component: 'Home' },
    { name: 'Panic Support', icon: 'heart-outline', component: 'PanicSupport' },
    { name: 'Journal', icon: 'book-outline', component: 'Journal' },
    { name: 'Mood Detox', icon: 'water-outline', component: 'MoodDetox' },
  ];

  return (
    <View style={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerTitle}>PanicPal</Text>
      </View>
      {routes.map((route, index) => {
        const isActive = state.index === index;
        return (
          <View
            key={route.name}
            style={[
              styles.drawerItem,
              isActive && styles.activeDrawerItem
            ]}
            onTouchEnd={() => navigation.navigate(route.component)}
          >
            <Ionicons 
              name={route.icon} 
              size={20} 
              color={isActive ? 'white' : '#5fb3a3'} 
              style={styles.drawerIcon}
            />
            <Text style={[
              styles.drawerLabel,
              isActive && styles.activeDrawerLabel
            ]}>
              {route.name}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#5fb3a3',
          },
          headerTintColor: '#fff',
          headerTitle: 'PanicPal',
          drawerStyle: {
            backgroundColor: '#f8f9fa',
            width: 280,
          },
        }}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'PanicPal',
          }}
        />
        <Drawer.Screen 
          name="PanicSupport" 
          component={PanicSupportScreen}
          options={{
            title: 'Panic Support',
          }}
        />
        <Drawer.Screen 
          name="Journal" 
          component={JournalScreen}
          options={{
            title: 'Daily Journal',
          }}
        />
        <Drawer.Screen 
          name="MoodDetox" 
          component={MoodDetoxScreen}
          options={{
            title: 'Mood Detox',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  drawerContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 50,
  },
  drawerHeader: {
    backgroundColor: '#5fb3a3',
    padding: 20,
    marginBottom: 20,
  },
  drawerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 10,
    borderRadius: 25,
    marginBottom: 5,
  },
  activeDrawerItem: {
    backgroundColor: '#5fb3a3',
  },
  drawerIcon: {
    marginRight: 15,
    width: 25,
    textAlign: 'center',
  },
  drawerLabel: {
    fontSize: 16,
    color: '#2c3e50',
    fontWeight: '500',
  },
  activeDrawerLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
});