import React, { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';

export default function Pessoa() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  const mostrarNomeCompleto = () => {
    Alert.alert("Nome Completo", `${nome} ${sobrenome}`);
  };

  return (
    <View style={styles.card}>
      <TextInput
        style={styles.input}
        placeholder="Digite o Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o Sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
      />
      <Button title="Exibir Nome" onPress={mostrarNomeCompleto} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
});