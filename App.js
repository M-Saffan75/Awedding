import React from 'react';
import Wedding from './Screens/Wedding';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#eee'} barStyle='dark-content' />

      <View>
        <Wedding />
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({})