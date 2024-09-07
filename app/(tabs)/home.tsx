import { RootState } from '@/store';
import { addMoney } from '@/store/moneySlice';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Root from '../+html';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const money = useSelector((store: RootState) => store.money.money);
  const salary = useSelector((store: RootState) => store.money.salary);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Juego de Negocios Mexicanos</Text>
      <Text style={styles.title}>${money}</Text>
      <Button title='Add money' onPress={()=>dispatch(addMoney(salary))}>
        
      </Button>
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
