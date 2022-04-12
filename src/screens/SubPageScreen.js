import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import fetchFunction from '../api';
import Colors from '../styles/Colors';

export const SubPageScreen = ({route}) => {
  const navigation = useNavigation();
  const [subpage, setSubpage] = useState(null);
  const {id} = route.params;

  useEffect(() => {
    let unmounted = false;
    fetchFunction(
      `https://linus.labb.soleilit.se/rest-api/1/1/${id}/headless`,
      'get',
    )
      .then(response => response.json())
      .then(data => {
        if (!unmounted) {
          setSubpage(data);
          navigation.setOptions({title: `${data.properties.displayName}`});
        }
      })
      .catch(err => {
        console.log(err);
      });
    return () => {
      unmounted = true;
    };
  });
  return (
    <View style={styles.body}>
      <Text>SubPage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.gray,
    alignItems: 'center',
  },
});

export default SubPageScreen;
