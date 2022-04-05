import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../styles/global';
import {useNavigation} from '@react-navigation/native';
import fetchFunction from '../api';

export const ClickableArticle = ({route}) => {
  const navigation = useNavigation();

  let [article, setArticle] = useState([]);

  const {id} = route.params;

  useEffect(() => {
    fetchFunction(
      `https://linus.labb.soleilit.se/rest-api/1/1/${id}/headless`,
      'get',
    )
      .then(response => response.json())
      .then(data => setArticle(data.properties));
  });

  useEffect(() => {
    navigation.setOptions({title: 'Updated!'});
  });

  return (
    <View style={globalStyles.container}>
      <Text>{article.articleName}</Text>
    </View>
  );
};
export default ClickableArticle;
