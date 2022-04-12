import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import PageItem from '../components/PageItem';
import fetchFunction from '../api';
import Colors from '../styles/Colors';

export const PageListingScreen = ({id}) => {
  const [page, setPage] = useState(null);
  useEffect(() => {
    fetchFunction(
      `https://linus.labb.soleilit.se/rest-api/1/1/${id}/headless`,
      'get',
    )
      .then(response => response.json())
      .then(data => {
        setPage(data.nodes);
      });
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
    <View style={styles.body}>
      <FlatList
        data={page}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.gray,
    alignItems: 'center',
    paddingTop: 10,
  },
});
export default PageListingScreen;
