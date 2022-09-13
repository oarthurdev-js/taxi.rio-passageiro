/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
} from 'react-native';
import ButtonNext from '../../components/buttonNext';

export default function Discounts({navigation}) {
  return (
    <SafeAreaView style={Styles.container}>
      <Image source={require('../../assets/logo.png')} style={Styles.logo} />
      <View style={Styles.form}>
        <View style={Styles.cardInformation}>
          <View style={Styles.itemLeft}>
            <Image
              source={require('../../assets/marker.png')}
              style={Styles.imageInserted}
            />
            <Text style={Styles.itemText}>Avenida Presidente Vargas, 3131</Text>
          </View>

          <View style={Styles.itemLeft}>
            <Image
              source={require('../../assets/destination.png')}
              style={Styles.imageInserted2}
            />
            <Text style={Styles.itemText}>R. Conde de Bonfim, 506</Text>
          </View>
          <View style={{marginTop: 20}} />
          <View style={Styles.lineStyle} />
          <View style={Styles.itemLeft}>
            <Image
              source={require('../../assets/ic_suspect_status.png')}
              style={Styles.clock}
            />
            <Text style={{fontWeight: 'bold', marginTop: -25}}>Bandeira 2</Text>
            <Image
              source={require('../../assets/ic_suspect_status.png')}
              style={Styles.clock}
            />
            <Text style={{fontWeight: 'bold', marginTop: -25}}>5,3km</Text>
            <Image
              source={require('../../assets/ic_suspect_status.png')}
              style={Styles.clock}
            />
            <Text style={{fontWeight: 'bold', marginTop: -25}}>10 min</Text>
          </View>
        </View>
        <Text>Selecione o desconto</Text>
        <ButtonNext
          text={'Pedir Táxi.Rio'}
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
  form: {
    backgroundColor: '#f9f9f9',
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 28,
    paddingLeft: 25,
    marginTop: 10,
  },
  cardInformation: {
    width: 338,
    height: 192,
    borderRadius: 30,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 30,
    marginLeft: 15,
  },
  itemText: {
    maxWidth: '80%',
    fontWeight: 'bold',
  },
  imageInserted: {
    width: 19,
    height: 25,
    marginRight: 15,
  },
  imageInserted2: {
    width: 19,
    height: 19,
    marginRight: 15,
  },
  lineStyle: {
    borderWidth: 0.4,
    borderColor: 'black',
    marginTop: 10,
    marginHorizontal: 15,
    opacity: 0.2,
  },
  clock: {
    width: 19,
    height: 19,
    marginRight: 10,
    marginTop: -45,
    marginLeft: 10,
  },
});
