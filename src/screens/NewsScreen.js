import React from 'react';
// import getFetch from '../api/';
import {View, Text, StyleSheet, Button} from 'react-native';

export const NewsScreen = ({navigation}) => {
  //   const [isLoading, setLoading] = useState(true);
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     const news = getFetch();
  //     setData(news);
  //   }, []);
  return (
    <View style={styles.body}>
      <Text>News Screen</Text>
      {/* {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({news}) => (
            <Text>
              {news.title}, {news.description}
            </Text>
          )}
        />
      )} */}

      <Button title="Gå tillbaka" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

export default NewsScreen;
