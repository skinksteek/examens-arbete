import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
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
      title={item.nodes.name}
      description={item.nodes.properties['sol.description.module']}
      published={item.nodes.properties.publishDate}
    />
  );
  return (
    <View>
      {news.map((article, index) => (
        <FlatList data={article} renderItem={renderItem} key={index} />
      ))}
    </View>
  );
};

export default List;
