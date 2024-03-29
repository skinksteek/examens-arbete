import React, {useEffect, useState} from 'react';
import {Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {format} from 'date-fns';
import fetchFunction from '../api';
import {components} from '../utils/Constants';
import {Colors} from '../styles/Colors';
import {textStyling} from '../styles/global';

export const ClickableArticle = ({route}) => {
  const navigation = useNavigation();
  const [article, setArticle] = useState(null);
  const [time, setTime] = useState(null);
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
          const articleDate = new Date(data.properties.publishDate);
          const date = format(articleDate, 'MM/dd/yyyy');
          setTime(date);
          navigation.setOptions({title: `${data.properties.articleName}`});
        }
      });
    return () => {
      unmounted = true;
    };
  });

  return (
    <ScrollView style={{backgroundColor: Colors.white}}>
      {article && (
        <>
          {article.contentNodes.map((node, index) => {
            const TheComponent = components[node.type];
            if (node.type === 'image') {
              return (
                <components.image
                  {...node}
                  height={500}
                  width="100%"
                  scale="contain"
                  showAuthor={true}
                />
              );
            }
            return <TheComponent {...node} key={index} />;
          })}
        </>
      )}
      {time && <Text style={textStyling.publish}>Publicerad: {time}</Text>}
    </ScrollView>
  );
};

export default ClickableArticle;
