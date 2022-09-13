import React from 'react';
import {
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  View,
  Image,
} from 'react-native';

export default function Destination(props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.imageLeft}>
        <Image
          source={require('../assets/destination.png')}
          style={{width: 25, height: 25}}
        />
        <TextInput
          placeholder={props.placeholder}
          style={styles.input}
          onChangeText={props.onChangeText}
          secureTextEntry={props.secureTextEntry}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#e9e9e9',
    marginTop: 7,
    width: '90%',
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'black',
  },
  imageLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
