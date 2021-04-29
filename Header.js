import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Container, Title, Button, Left, Right, Body, Icon } from 'native-base'



export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.header}>HI mariam</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:
  {
    marginTop: 4,
    height: 40,
    flex: 1,
    flexDirection:"row",
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
},
});
