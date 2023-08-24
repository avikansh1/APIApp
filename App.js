import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import APIApp from './screens/APIApp';
import APIApp1 from './screens/APIApp1';

export default function App() {
  return (
<>

  
  <APIApp1/>
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
