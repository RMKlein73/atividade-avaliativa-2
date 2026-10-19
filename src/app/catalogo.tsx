
import { View, Text, FlatList, StyleSheet } from 'react-native';

const produtos = [
  { id: '1', nome: 'Leite Integral', preco: 5.49, unidade: '1 litro' },
  { id: '2', nome: 'Leite Desnatado', preco: 5.29, unidade: '1 litro' },
  { id: '3', nome: 'Queijo Mussarela', preco: 39.90, unidade: '1 kg' },
  { id: '4', nome: 'Queijo Prato', preco: 42.90, unidade: '1 kg' },
  { id: '5', nome: 'Iogurte Natural', preco: 4.99, unidade: '170 g' },
  { id: '6', nome: 'Manteiga', preco: 12.90, unidade: '200 g' },
  { id: '7', nome: 'Requeijão', preco: 8.49, unidade: '200 g' },
  { id: '8', nome: 'Creme de Leite', preco: 3.99, unidade: '200 g' },
  { id: '9', nome: 'Leite Condensado', preco: 6.49, unidade: '395 g' },
  { id: '10', nome: 'Bebida Láctea', preco: 3.49, unidade: '900 ml' },
];

export default function Catalogo() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nossos Produtos</Text>
      <Text style={styles.subtitulo}>Conheça nosso catálogo</Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.unidade}>{item.unidade}</Text>
            </View>

            <Text style={styles.preco}>
              R$ {item.preco.toFixed(2).replace('.', ',')}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7F3E8',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#244B37',
    marginTop: 20,
  },
  subtitulo: {
    color: '#777777',
    marginBottom: 20,
    marginTop: 5,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
  },
  info: {
    flex: 1,
    marginRight: 8,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#244B37',
  },
  unidade: {
    color: '#777777',
    marginTop: 5,
  },
  preco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#39734B',
  },
});
