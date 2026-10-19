
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ofertas = [
  { id: '1', nome: 'Leite Integral', tipo: 'Leve 3, pague 2', preco: 'R$ 10,98', foto: '🥛' },
  { id: '2', nome: 'Iogurte Natural', tipo: 'Leve 4, pague 3', preco: 'R$ 14,97', foto: '🍓' },
  { id: '3', nome: 'Queijo Mussarela', tipo: 'Acima de R$ 50, pague R$ 45', preco: 'R$ 45,00', foto: '🧀' },
  { id: '4', nome: 'Manteiga', tipo: 'Acima de R$ 15, pague R$ 12', preco: 'R$ 12,00', foto: '🧈' },
  { id: '5', nome: 'Requeijão', tipo: 'Desconto no cartão da loja', preco: 'R$ 6,99', foto: '🥣' },
  { id: '6', nome: 'Leite Condensado', tipo: 'Desconto no cartão da loja', preco: 'R$ 4,99', foto: '🍮' },
];

export default function Ofertas() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ofertas Especiais</Text>
      <Text style={styles.subtitulo}>Economize com a VittaLac!</Text>

      <FlatList
        data={ofertas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.foto}>
              <Text style={styles.emoji}>{item.foto}</Text>
            </View>

            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.tipo}>{item.tipo}</Text>
              <Text style={styles.preco}>{item.preco}</Text>
            </View>
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
    marginTop: 5,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  foto: {
    width: 75,
    height: 75,
    backgroundColor: '#DCE8C7',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  emoji: {
    fontSize: 35,
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#244B37',
  },
  tipo: {
    color: '#777777',
    fontSize: 12,
    marginTop: 5,
  },
  preco: {
    color: '#39734B',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 5,
  },
});
