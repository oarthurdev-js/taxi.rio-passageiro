/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

import MapView from 'react-native-maps';

import ButtonLogin from '../../components/buttonEntrar';
import Destination from '../../components/inputActual';
import Plus from '../../components/circle';
import ButtonNext from '../../components/buttonNext';

export default function HomePage({navigation}) {
  return (
    <SafeAreaView style={Styles.container}>
      <Image source={require('../../assets/logo.png')} style={Styles.logo} />
      <View style={Styles.mapForm}>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      <View style={Styles.recForm}>
        <Destination placeholder={'De onde você quer sair?'} />
        <Destination
          source={require('../../assets/destination.png')}
          placeholder={'Para onde você quer ir?'}
        />
        <ButtonNext
          text={'Avançar'}
          onPress={() => navigation.navigate('Discounts')}
        />
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002638',
  },
  image: {
    alignItems: 'flex-end',
  },
  logo: {
    width: 48,
    height: 41,
    marginTop: 24,
    marginRight: 15,
    alignSelf: 'flex-end',
  },
  mapForm: {
    backgroundColor: 'grey',
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 28,
    paddingLeft: 25,
    marginTop: 10,
  },
  recForm: {
    backgroundColor: '#fff',
    flex: 0.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 28,
    paddingLeft: 25,
    marginTop: -20,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomText: {
    fontSize: 12,
    fontWeight: '300',
    width: '90%',
    marginTop: 30,
    textAlign: 'center',
  },
  bottomTextAccess: {
    fontSize: 12,
    fontWeight: '300',
    width: '90%',
    marginTop: 43,
    textAlign: 'center',
  },
  waitingText: {
    fontWeight: 'bold',
    color: '#808080',
    textAlign: 'center',
    width: '90%',
  },
});
