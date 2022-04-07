import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Item from './Item';
import fetchFunction from '../api';

export const List = ({maxNewsToShow, size, ListFooterComponent}) => {
  let [shownNews, setNews] = useState([]);

  useEffect(() => {
    fetchFunction(
      'https://linus.labb.soleilit.se/rest-api/1/1/3.484d9c7317ce4f0e1b69ed/headless',
      'get',
    )
      .then(response => response.json())
      .then(data => {
        if (maxNewsToShow) {
          setNews(data.nodes.slice(0, maxNewsToShow));
        } else {
          setNews(data.nodes);
        }
      });
  }, [maxNewsToShow]);
  const renderItem = ({item}) => (
    <Item
      title={item.name}
      description={item.properties['sol.description.module']}
      published={item.properties.publishDate}
      size={size}
      id={item.id}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={shownNews}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default List;
