import React from 'react';
import {View, FlatList} from 'react-native';
import Item from './Item';
import news from '../assets/news.json';

export const List = () => {
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
