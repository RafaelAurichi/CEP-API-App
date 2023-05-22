import React, { useState } from 'react'
import {View, Text, StyleSheet, Button, TextInput} from 'react-native'
import api from './src/services/api'


export default function App(){
  const [cep, setCep] = useState("")
  const [endereco, setEndereco] = useState()


  const consultaCep = async (cep) => {
    const response = await api.get('/' + cep + '/json/');
    setEndereco(response.data)
  }

  return<>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={cep}
        onChangeText={(texto) => setCep(texto)}
        underlineColorAndroid="transparent"
        keyboardType='numeric'
      />


      <Button style={styles.botao} title="Consultar" onPress={() => consultaCep(cep)} />

      <View style={styles.resultado}>
        <Text style={styles.texto}>CEP: {endereco?.cep}</Text>
        <Text style={styles.texto}>Endereço: {endereco?.logradouro}</Text>
        <Text style={styles.texto}>Bairro: {endereco?.bairro}</Text>
        <Text style={styles.texto}>Cidade: {endereco?.localidade}</Text>
        <Text style={styles.texto}>Estado: {endereco?.uf}</Text>
      </View>
    </View>
  </>
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: '50%',
    alignItems: 'center',
  },

  input:{
    width: 280,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 10,
  },

  resultado: {
    flex: 1,
    marginTop: 20,
    margin: 20,
  },

  texto:{
    marginTop: 15,
    fontSize: 20
  },
});