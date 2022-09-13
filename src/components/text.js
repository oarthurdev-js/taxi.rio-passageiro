import React from 'react';
import {
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function Input(props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TextInput
        placeholder={props.placeholder}
        style={styles.input}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
      />
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
    marginBottom: 31,
  },
});
