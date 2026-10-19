
import { View, Text, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>👋</Text>

      <Text style={styles.titulo}>
        Hello World!
      </Text>

      <Text style={styles.subtitulo}>
        Meu primeiro aplicativo
      </Text>

      <View style={styles.linha} />

      <Text style={styles.rodape}>
        Feito com React Native 💜
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17152B',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  emoji: {
    fontSize: 60,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 16,
    color: '#C4B5FD',
    textAlign: 'center',
  },

  linha: {
    width: 80,
    height: 4,
    backgroundColor: '#A78BFA',
    borderRadius: 10,
    marginVertical: 25,
  },

  rodape: {
    fontSize: 14,
    color: '#A5A1B8',
  },
});
