import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, StyleSheet, StatusBar} from 'react-native';
import Item from './Item';
import fetchFunction from '../api';

export const List = () => {
  let [news, setNews] = useState([]);
  useEffect(() => {
    fetchFunction(
      'https://linus.labb.soleilit.se/rest-api/1/1/3.484d9c7317ce4f0e1b69ed/headless',
      'get',
    )
      .then(response => response.json())
      .then(data => setNews(data.nodes));
  }, []);
  const renderItem = ({item}) => (
    <Item
      title={item.name}
      description={item.properties['sol.description.module']}
      published={item.properties.publishDate}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default List;
