import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import PageItem from '../components/PageItem';
import fetchFunction from '../api';
import {globalStyling} from '../styles/global';

export const PageListingScreen = ({id}) => {
  const [page, setPage] = useState(null);
  useEffect(() => {
    let unmounted = false;
    fetchFunction(
      `https://linus.labb.soleilit.se/rest-api/1/1/${id}/headless`,
      'get',
    )
      .then(response => response.json())
      .then(data => {
        if (!unmounted) {
          setPage(data.nodes);
        }
      });
    return () => {
      unmounted = true;
    };
  });
  const renderItem = ({item}) => (
    <PageItem
      title={item.name}
      description={item.properties['sol.description.module']}
      icon={item.properties['sol.rn.icon']}
      id={item.properties['jcr:uuid']}
    />
  );

  return (
    <View style={globalStyling.centered}>
      <FlatList
        data={page}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};
export default PageListingScreen;
