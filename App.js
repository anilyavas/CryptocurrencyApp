import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

const dummyCurrency = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$16,735.96',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price: '$506.64',
  },
  {
    name: 'XRP',
    symbol: 'XRP',
    price: '$0.521819',
  },
  {
    name: 'Tether',
    symbol: 'USDT',
    price: '$1.00',
  },
];
export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cryptocurrencies</Text>
      </View>
      <View style={styles.subTitle}>
        <View style={styles.subContainer}>
          <Text style={styles.subtitleText}>Name</Text>
          <FlatList
            contentContainerStyle={{ gap: 10 }}
            data={dummyCurrency}
            renderItem={({ item }) => <Text>{item.name}</Text>}
          />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.subtitleText}>Symbol</Text>
          <FlatList
            contentContainerStyle={{ gap: 10, alignItems: 'center' }}
            data={dummyCurrency}
            renderItem={({ item }) => <Text>{item.symbol}</Text>}
          />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.subtitleText}>Price(US$)</Text>
          <FlatList
            contentContainerStyle={{ gap: 10 }}
            data={dummyCurrency}
            renderItem={({ item }) => <Text>{item.price}</Text>}
          />
        </View>
      </View>

      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  subtitleText: {
    color: 'grey',
    fontSize: 16,
    paddingBottom: 10,
  },
});
