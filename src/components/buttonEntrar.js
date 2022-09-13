import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Image} from 'react-native';

export default function ButtonLogin(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.textInside}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '90%',
    backgroundColor: '#ffcd5e',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    marginTop: 23,
  },
  textInside: {
    color: '#002638',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
