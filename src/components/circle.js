import React from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  Text,
} from 'react-native';

export default function Plus() {
  return (
    <View style={{paddingTop: 2}}>
      <TouchableHighlight
        style={styles.circle}
        underlayColor="#000"
        onPress={() => alert('Yaay!')}>
        <Text style={styles.textInsideCircle}>+</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  TouchableOpacityStyle: {
    //Here is the trick
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  circle: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: 40,
    height: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInsideCircle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
