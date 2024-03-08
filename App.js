import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState([]);

  const getCoins = () => {
    return fetch('https://api.coinlore.net/api/tickers/?limit=100')
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCoins();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cryptocurrencies</Text>
      </View>
      <View style={styles.subTitle}>
        <View style={styles.subContainer}>
          <Text style={styles.subtitleText}>Name</Text>
          <FlatList
            contentContainerStyle={{ gap: 20 }}
            data={data}
            renderItem={({ item }) => <Text>{item.name}</Text>}
          />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.subtitleText}>Symbol</Text>
          <FlatList
            contentContainerStyle={{ gap: 20, alignItems: 'center' }}
            data={data}
            renderItem={({ item }) => <Text>{item.symbol}</Text>}
          />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.subtitleText}>Price(US$)</Text>
          <FlatList
            contentContainerStyle={{ gap: 20 }}
            data={data}
            renderItem={({ item }) => <Text>{item.price_usd}</Text>}
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
  subContainer: {
    padding: 5,
  },
});
