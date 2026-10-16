
import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function Aluno() {
  const [nome, setNome] = useState('Ana');
  const [idade, setIdade] = useState('10');
  const [turma, setTurma] = useState('22');
  const [nota1, setNota1] = useState('10');
  const [nota2, setNota2] = useState('8');
  const [resultado, setResultado] = useState('');

  function calcularMedia() {
    const media = (Number(nota1) + Number(nota2)) / 2;

    if (media >= 7) {
      setResultado(`Média: ${media}\nAprovado`);
    } else {
      setResultado(`Média: ${media}\nReprovado`);
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>Nome:</Text>
      <TextInput value={nome} onChangeText={setNome} />

      <Text>Idade:</Text>
      <TextInput value={idade} onChangeText={setIdade} />

      <Text>Turma:</Text>
      <TextInput value={turma} onChangeText={setTurma} />

      <Text>Nota 1:</Text>
      <TextInput
        value={nota1}
        onChangeText={setNota1}
        keyboardType="numeric"
      />

      <Text>Nota 2:</Text>
      <TextInput
        value={nota2}
        onChangeText={setNota2}
        keyboardType="numeric"
      />

      <Button title="Calcular Média" onPress={calcularMedia} />

      <Text>{resultado}</Text>
    </View>
  );
}
