import 'react-native-gesture-handler';
import React, {useLayoutEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';


export default function SecondScreen({ navigation }) {
    return (
      <View style={style.container}>
        <Text>Second Screen</Text>
       </View>
    );
  }

  const style = StyleSheet.create({
    container: {
      padding: 10,
    }
  });