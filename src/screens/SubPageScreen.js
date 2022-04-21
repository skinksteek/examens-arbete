import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import fetchFunction from '../api';
import {components} from '../utils/Constants';
import {globalStyling} from '../styles/global';

export const SubPageScreen = ({route, id}) => {
  const navigation = useNavigation();
  const [subpage, setSubpage] = useState(null);

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
    <ScrollView style={globalStyling.scroll}>
      {subpage && (
        <>
          {subpage.contentNodes.map((node, index) => {
            const TheComponent = components[node.type];
            if (node.type === 'image') {
              return (
                <components.image
                  {...node}
                  height={200}
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
    </ScrollView>
  );
};

export default SubPageScreen;
