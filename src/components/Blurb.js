import React from 'react';
import {StyleSheet, Dimensions, Linking} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import Colors from '../styles/Colors';
import Button from './Button';
import ImageModule from './Image';

const {width, height} = Dimensions.get('window');

export const Blurb = ({title, description, url, img}) => {
  return (
    <Card style={styles.container}>
      <ImageModule
        image={img}
        height={height / 5}
        width="100%"
        style={styles.image}
        scale="contain"
      />
      <Card.Content>
        <Title style={styles.title}>{title}</Title>
        <Paragraph style={styles.description}>{description}</Paragraph>
      </Card.Content>
      <Button
        text="Läs mer"
        onPress={() => {
          Linking.openURL(`${url}`);
        }}
        bordered
        size="small"
        type="filled"
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignSelf: 'center',
    width: width / 1.5,
    backgroundColor: Colors.gray,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: Colors.orange,
    padding: 10,
  },

  img: {
    resizeMode: 'center',
    height: 100,
    width: 200,
  },

  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.black,
  },
  description: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: '400',
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Blurb;
