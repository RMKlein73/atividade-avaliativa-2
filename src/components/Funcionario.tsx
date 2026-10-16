
import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  nome: string;
  idade: number;
  setor: string;
};

export default function Funcionario(props: Props) {
  return (
    <View style={{ padding: 15 }}>
      <Text>Nome: {props.nome}</Text>
      <Text>Idade: {props.idade}</Text>
      <Text>Setor: {props.setor}</Text>
    </View>
  );
}
