import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import Item from './Item';
import fetchFunction from '../api';

export const List = () => {
  let [news, setNews] = useState([]);
  useEffect(() => {
    fetchFunction(
      'https://linus.labb.soleilit.se/rest-api/1/1/19.451c9ebc17dd75869517a3ed/headless',
      'get',
    )
      .then(response => response.json())
      .then(data => setNews(data.nodes));
  }, []);
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      description={item.description}
      published={item.published}
    />
  );
  return (
    <View>
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={article => article.id}
      />
    </View>
  );
};

export default List;
