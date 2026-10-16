import React, { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';

export default function CalculadoraMultiplicacao() {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [val3, setVal3] = useState('');

  const calcularMultiplicacao = () => {
    const v1 = parseFloat(val1) || 0;
    const v2 = parseFloat(val2) || 0;
    const v3 = parseFloat(val3) || 0;
    const resultado = v1 * v2 * v3;

    Alert.alert(
      "Resultado da Multiplicação",
      `Valores: ${v1}, ${v2}, ${v3}\nMultiplicação: ${resultado}`
    );
  };

  return (
    <View style={styles.card}>
      <TextInput
        style={styles.input}
        placeholder="Valor 1"
        keyboardType="numeric"
        value={val1}
        onChangeText={setVal1}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor 2"
        keyboardType="numeric"
        value={val2}
        onChangeText={setVal2}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor 3"
        keyboardType="numeric"
        value={val3}
        onChangeText={setVal3}
      />
      <Button title="Multiplicar" onPress={calcularMultiplicacao} />
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