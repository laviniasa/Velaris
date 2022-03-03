import * as React from 'react';
import { View, TextInput } from 'react-native';
import style from './style.js'

export default function Home({ navigation }) {
  return (
    <View style={style.body}>
      <View style={style.header}>

      </View>
      <View style={style.card}>
        <TextInput multiline
                    numberOfLines={10}
                    maxLength={300}
                    onChangeText={text => onChangeText(text)}
                    style={style.input}>
        </TextInput>
      </View>
      <View style={style.card}>
        
      </View>
      <View style={style.card}>
        
      </View>
      <View style={style.card}>
        
      </View>
      <View style={style.footer}>
        
      </View>
    </View>
  );
}

