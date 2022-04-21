import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import fetchFunction from '../api';
import Colors from '../styles/Colors';
import Blurb from '../components/Blurb';
import {ScrollView} from 'react-native';
import FAQ from '../components/FAQ';

export const EmptyScreen = ({route, id}) => {
  const navigation = useNavigation();
  const [empty, setEmptypage] = useState(null);
  const [blurb, setBlurb] = useState(null);
  const [showFAQ, setShowFAQ] = useState(null);

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

          setShowFAQ(data.properties['sol.rn.faq'] === 'Ja');

          const blurbTitle = data.properties['sol.rn.blurb.title'];
          const blurbDescription = data.properties['sol.rn.blurb.description'];
          const blurbUrl = data.properties['sol.rn.blurb.url'];
          const blurbImg = data.properties['sol.rn.blurb.img'];
          if (blurbTitle && blurbDescription && blurbUrl && blurbImg) {
            setBlurb({
              title: blurbTitle,
              description: blurbDescription,
              url: blurbUrl,
              img: blurbImg,
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
    <ScrollView style={{backgroundColor: Colors.gray}}>
      {blurb && (
        <Blurb
          title={blurb.title}
          description={blurb.description}
          url={blurb.url}
          img={blurb.img}
        />
      )}
      {showFAQ && <FAQ />}
    </ScrollView>
  );
};

export default EmptyScreen;
