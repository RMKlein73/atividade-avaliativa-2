
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>RafaLac.</Text>
      <Text style={styles.subtitulo}>Distribuidora de Laticínios</Text>

      <View style={styles.destaque}>
        <Text style={styles.emoji}>🥛</Text>
        <Text style={styles.mensagem}>Leites Caseiros da melhor Qualidade!</Text>
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/catalogo')}
      >
        <Text style={styles.textoBotao}>Nossos Produtos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoOferta}
        onPress={() => router.push('/ofertas')}
      >
        <Text style={styles.textoOferta}>Ver Promoções</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#F7F3E8',
  },
  logo: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#244B37',
    textAlign: 'center',
  },
  subtitulo: {
    textAlign: 'center',
    color: '#666666',
    marginBottom: 30,
  },
  destaque: {
    backgroundColor: '#DCE8C7',
    padding: 25,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 25,
  },
  emoji: {
    fontSize: 55,
  },
  mensagem: {
    color: '#244B37',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
  },
  botao: {
    backgroundColor: '#244B37',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoOferta: {
    backgroundColor: '#EBCF73',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  textoOferta: {
    color: '#244B37',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
