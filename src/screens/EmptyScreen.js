import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import fetchFunction from '../api';
import Colors from '../styles/Colors';
import Blurb from '../components/Blurb';

export const EmptyScreen = ({route, id}) => {
  const navigation = useNavigation();
  const [empty, setEmptypage] = useState(null);
  const [blurb, setBlurb] = useState(null);

  useEffect(() => {
    let unmounted = false;
    const subPageId = route ? route.params.id : id;
    fetchFunction(
      `https://linus.labb.soleilit.se/rest-api/1/1/${subPageId}/headless`,
      'get',
    )
      .then(response => response.json())
      .then(data => {
        if (!unmounted) {
          setEmptypage(data);

          const blurbTitle = data.properties['sol.rn.blurb.title'];
          const blurbDescription = data.properties['sol.rn.blurb.description'];
          const blurbUrl = data.properties['sol.rn.blurb.url'];
          if (blurbTitle && blurbDescription && blurbUrl) {
            setBlurb({
              title: blurbTitle,
              description: blurbDescription,
              url: blurbUrl,
            });
          }
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
    <ScrollView style={styles.body}>
      {blurb && (
        <Blurb
          title={blurb.title}
          description={blurb.description}
          url={blurb.url}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.gray,
  },
});
export default EmptyScreen;
