import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
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
        <Text style={styles.headerText}>CRYPTO</Text>
      </View>
      <View style={styles.subTitle}>
        <Text style={styles.subtitleText}>Name</Text>
        <Text style={styles.subtitleText}>Symbol</Text>
        <Text style={styles.subtitleText}>Price</Text>
      </View>
      <View style={styles.dataContainer}>
        <FlatList
          contentContainerStyle={{ gap: 10 }}
          data={data}
          renderItem={({ item }) => (
            <ScrollView contentContainerStyle={styles.container}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  flex: 1,
                }}
              >
                <Image
                  style={{ height: 20, width: 20, marginRight: 5 }}
                  source={{
                    uri: `https://www.coinlore.com/img/${item.nameid}.webp`,
                  }}
                />
                <Text style={styles.text}>{item.name}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={[
                    styles.text,
                    {
                      fontWeight: '400',
                      textAlign: 'center',
                    },
                  ]}
                >
                  {item.symbol}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.text, { textAlign: 'right' }]}>
                  ${item.price_usd}
                </Text>
              </View>
            </ScrollView>
          )}
        />
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
    marginHorizontal: 5,
  },
  subtitleText: {
    color: 'grey',
    fontSize: 16,
    paddingBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    borderColor: 'gainsboro',
    borderWidth: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});
