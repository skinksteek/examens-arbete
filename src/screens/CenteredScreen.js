import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import fetchFunction from '../api';
import {components} from '../utils/Constants';
import {ScrollView} from 'react-native';
import {globalStyling} from '../styles/global';

export const CenteredScreen = ({route, id}) => {
  const navigation = useNavigation();
  const [centered, setCentered] = useState(null);

  useEffect(() => {
    let unmounted = false;
    const centeredId = route ? route.params.id : id;
    fetchFunction(
      `https://linus.labb.soleilit.se/rest-api/1/1/${centeredId}/headless`,
      'get',
    )
      .then(response => response.json())
      .then(data => {
        if (!unmounted) {
          setCentered(data);
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
    <ScrollView style={globalStyling.default_scroll}>
      {centered && (
        <>
          {centered.contentNodes.map((node, index) => {
            const TheComponent = components[node.type];
            if (node.type === 'image') {
              return (
                <components.image
                  {...node}
                  height={300}
                  width="100%"
                  scale="contain"
                  showAuthor={true}
                  key={index}
                />
              );
            }
            return <TheComponent {...node} />;
          })}
        </>
      )}
    </ScrollView>
  );
};

export default CenteredScreen;
