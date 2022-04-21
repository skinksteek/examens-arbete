import React, {useEffect, useState} from 'react';
import fetchFunction from '../api';
import {List} from 'react-native-paper';
import Colors from '../styles/Colors';

export const FAQItem = ({question, id}) => {
  let [getAnswer, setGetAnswer] = useState([]);

  const [expanded, setExpanded] = useState(false);
  const handlePress = () => setExpanded(!expanded);

  useEffect(() => {
    let unmounted = false;
    fetchFunction(
      `https://linus.labb.soleilit.se/rest-api/1/1/${id}/headless`,
      'get',
    )
      .then(response => response.json())
      .then(data => {
        if (!unmounted) {
          setGetAnswer(data);
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
    <List.Accordion
      id={id}
      title={question}
      left={props => <List.Icon {...props} icon="message-question" />}
      expanded={expanded}
      theme={{colors: {primary: Colors.fontColor}}}
      onPress={handlePress}>
      {getAnswer?.contentNodes && (
        <>
          {getAnswer.contentNodes.map((node, index) => (
            <List.Item title={node.properties.textContent} key={index} />
          ))}
        </>
      )}
    </List.Accordion>
  );
};

export default FAQItem;
