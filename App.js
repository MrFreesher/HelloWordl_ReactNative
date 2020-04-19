/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  Button,
  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [mainText, setMainText] = useState('Hello World');

  changeText = () => {
    if (mainText == 'Hello World') {
      setMainText('End World');
    } else {
      setMainText('Hello World');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainText}>{mainText}</Text>
      <Button title="Click me" onPress={changeText} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',

    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },
  mainText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default App;
