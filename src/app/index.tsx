
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Switch,
  Alert,
  ScrollView,
  StyleSheet
} from 'react-native';

export default function Index() {
  const [idade, setIdade] = useState('');
  const [renda, setRenda] = useState('');
  const [clt, setClt] = useState(false);
  const [divida, setDivida] = useState(false);

  function consultarCredito() {
    const idadeNum = Number(idade);
    const rendaNum = Number(renda.replace(',', '.'));

    if (
      idade.trim() === '' ||
      renda.trim() === '' ||
      !Number.isFinite(idadeNum) ||
      !Number.isFinite(rendaNum) ||
      idadeNum <= 0 ||
      !Number.isInteger(idadeNum) ||
      rendaNum <= 0
    ) {
      Alert.alert('Atenção', 'Informe uma idade e uma renda válidas.');
      return;
    }

    if (divida) {
      Alert.alert(
        'Crédito negado',
        'O correntista possui dívida e não tem direito ao crédito.'
      );
      return;
    }

    let percentual = 0;

    if (idadeNum <= 24) {
      percentual = 25;
    } else if (idadeNum <= 49) {
      percentual = 40;
    } else if (idadeNum <= 64) {
      percentual = 30;
    } else {
      percentual = 15;
    }

    if (!clt) {
      percentual = percentual / 2;
    }

    const credito = rendaNum * percentual / 100;

    Alert.alert(
      'Crédito aprovado!',
      `Renda anual: ${rendaNum.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })}\n\nPercentual aprovado: ${percentual}%\n\nValor máximo de crédito: ${credito.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })}`
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Consulta de Crédito</Text>

      <Text style={styles.subtitulo}>
        Caixa Econômica Federal
      </Text>

      <Text style={styles.label}>Idade do correntista</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a idade"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Renda anual (R$)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex.: 20000"
        value={renda}
        onChangeText={setRenda}
        keyboardType="decimal-pad"
      />

      <View style={styles.opcao}>
        <Text style={styles.label}>Possui vínculo CLT?</Text>
        <Switch
          value={clt}
          onValueChange={setClt}
        />
        <Text>{clt ? 'Sim' : 'Não'}</Text>
      </View>

      <View style={styles.opcao}>
        <Text style={styles.label}>Possui dívida?</Text>
        <Switch
          value={divida}
          onValueChange={setDivida}
        />
        <Text>{divida ? 'Sim' : 'Não'}</Text>
      </View>

      <View style={styles.botao}>
        <Button
          title="Consultar crédito"
          onPress={consultarCredito}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f2f4f7'
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#14532d'
  },
  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 8
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20
  },
  opcao: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20
  },
  botao: {
    marginTop: 10
  }
});
