import { View, Text, StyleSheet } from 'react-native';

export default function BusinessScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu Negocio</Text>
      {/* Aquí es donde comenzaremos a agregar la lógica del juego */}
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
});
