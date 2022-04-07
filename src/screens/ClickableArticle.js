import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../styles/global';
import {useNavigation} from '@react-navigation/native';
import {format} from 'date-fns';
import fetchFunction from '../api';
import {components} from '../utils/Constants';

export const ClickableArticle = ({route}) => {
  const navigation = useNavigation();
  const publishDate = new Date();
  const time = format(publishDate, 'MM/dd/yyyy');
  const [article, setArticle] = useState(null);

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
          setArticle(data);
          navigation.setOptions({title: `${data.properties.articleName}`});
        }
      });

    return () => {
      unmounted = true;
    };
  });

  return (
    <View style={globalStyles.container}>
      {article && (
        <>
          {article.contentNodes.map((node, index) => {
            const TheComponent = components[node.type];
            return <TheComponent {...node} key={index} />;
          })}
        </>
      )}
    </View>
  );
};
export default ClickableArticle;
