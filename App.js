import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import DrawerNavigator from './DrawerNavigator';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <DrawerNavigator />
      <StatusBar style="auto" />
    </View>
  );
}
