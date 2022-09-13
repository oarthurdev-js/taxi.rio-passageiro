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

export default function Login({navigation}) {
  return (
    <SafeAreaView style={Styles.container}>
      <ImageBackground
        source={require('../../assets/login_background.png')}
        resizeMethod="cover"
        style={Styles.image}>
        <Image source={require('../../assets/logo.png')} style={Styles.logo} />
      </ImageBackground>
      <View style={Styles.recForm}>
        <Text style={Styles.textStyle}>E-mail</Text>
        <Input />
        <Text style={Styles.textStyle}>Telefone</Text>
        <Input placeholder={'(xx)xxxxx-xxxx'} />
        <ButtonLogin
          text={'Entrar'}
          onPress={() => navigation.navigate('Verification')}
        />
        <Text style={Styles.bottomText}>
          Caso não tenha uma conta, use os campos acima para criá-la e
          cuidaremos do resto.
        </Text>
        <Text style={Styles.bottomTextAccess}>Não consegue acessar?</Text>
        <Text style={Styles.contactAccess}>
          Entre em contato com o Taxi.Rio.
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
    marginTop: 43,
    textAlign: 'center',
  },
  bottomTextAccess: {
    fontSize: 12,
    fontWeight: '300',
    width: '90%',
    marginTop: 43,
    textAlign: 'center',
  },
  contactAccess: {
    fontWeight: 'bold',
    color: '#D09000',
    textAlign: 'center',
    width: '90%',
  },
});
