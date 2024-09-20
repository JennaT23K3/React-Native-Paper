import 'react-native-gesture-handler';
import React, {useLayoutEffect} from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Button, StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen({ navigation }) {

    useLayoutEffect(()=>{
        navigation.setOptions({
          headerRight: ()=> (
            <Ionicons name="arrow-forward"
            size={24}
            onPress={() => navigation.navigate('Second')}
            />
          )
        })
      })

    return (
      <View style={style.container}>
        <Text>Home Screen</Text>
      </View>
    );
  }

  const style = StyleSheet.create({
    container: {
      padding: 10,
    }
  });