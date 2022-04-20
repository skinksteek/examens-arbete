import React, {useEffect, useState} from 'react';
import fetchFunction from '../api';
import {List} from 'react-native-paper';
import {ScrollView} from 'react-native';
import FAQItem from './FAQItem';

export const FAQ = () => {
  let [questions, setQuestions] = useState(null);

  useEffect(() => {
    let unmounted = false;
    fetchFunction(
      'https://linus.labb.soleilit.se/rest-api/1/1/4.484d9c7317ce4f0e1b68b4/headless',
      'get',
    )
      .then(response => response.json())
      .then(data => {
        if (!unmounted) {
          setQuestions(data);
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
    <ScrollView>
      {questions && (
        <>
          <List.Section title="Frågor och svar">
            {questions.nodes.map((node, index) => (
              <FAQItem id={node.id} question={node.name} key={index} />
            ))}
          </List.Section>
        </>
      )}
    </ScrollView>
  );
};

export default FAQ;
