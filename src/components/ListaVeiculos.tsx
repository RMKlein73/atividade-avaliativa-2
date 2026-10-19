
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

const veiculos = [
  { id: '1', nome: 'Civic', marca: 'Honda', ano: 2022 },
  { id: '2', nome: 'Corolla', marca: 'Toyota', ano: 2023 },
  { id: '3', nome: 'Onix', marca: 'Chevrolet', ano: 2021 },
  { id: '4', nome: 'Gol', marca: 'Volkswagen', ano: 2020 },
  { id: '5', nome: 'HB20', marca: 'Hyundai', ano: 2024 },
];

export default function ListaVeiculos() {
  return (
    <View style={styles.container}>
      <FlatList
        data={veiculos}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.veiculo}>
            <Text style={styles.nome}>
              {index + 1}. {item.nome}
            </Text>
            <Text>Marca: {item.marca}</Text>
            <Text>Ano: {item.ano}</Text>
          </View>
        )}
        ListHeaderComponent={
          <Text style={styles.cabecalho}>
            Lista de Veículos
          </Text>
        }
        ListFooterComponent={
          <Text style={styles.rodape}>
            Fim da lista de veículos
          </Text>
        }
        ItemSeparatorComponent={() => (
          <View style={styles.separador} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  cabecalho: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  veiculo: {
    padding: 15,
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  separador: {
    height: 1,
    backgroundColor: '#CCCCCC',
    marginVertical: 10,
  },
  rodape: {
    textAlign: 'center',
    padding: 20,
    color: '#666666',
  },
});
