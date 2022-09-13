/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import Input from '../../components/text';
import ButtonLogin from '../../components/buttonEntrar';

export default function Verification({navigation}) {
  return (
    <SafeAreaView style={Styles.container}>
      <ImageBackground
        source={require('../../assets/login_background.png')}
        resizeMethod="cover"
        style={Styles.image}>
        <Image source={require('../../assets/logo.png')} style={Styles.logo} />
      </ImageBackground>
      <View style={Styles.recForm}>
        <Text style={[Styles.bottomText, {marginBottom: 44}]}>
          Foi enviado um SMS para o número de celular informado. Por favor,
          digite-o abaixo.
        </Text>
        <Input />
        <ButtonLogin
          text={'Verificar'}
          onPress={() => navigation.navigate('Finish')}
        />
        <Text style={Styles.waitingText}>
          Enviar novamente (disponível em 30 s)
        </Text>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 152,
    height: 130,
    marginTop: 24,
  },
  recForm: {
    backgroundColor: '#fff',
    flex: 3,
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
