import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Juego de Negocios Mexicanos</Text>
      <Link href="/business" style={styles.link}>
        Comenzar
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    fontSize: 18,
    color: 'blue',
  },
});
