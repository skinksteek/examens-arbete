import React from 'react';
import {View, Text, StyleSheet, Dimensions, Linking} from 'react-native';
import Colors from '../styles/Colors';
import Button from './Button';
import ImageModule from './Image';

const {width, height} = Dimensions.get('window');
export const Blurb = ({title, description, url, img}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <ImageModule
          image={img}
          height={height / 5}
          width="100%"
          style={styles.image}
          scale="contain"
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.buttonsContainer}>
          <Button
            text="Läs mer"
            onPress={() => {
              Linking.openURL(`${url}`);
            }}
            bordered
            size="small"
            type="filled"
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height / 1.3,
    backgroundColor: Colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 250,
    height: 350,
    backgroundColor: Colors.white,
    borderColor: Colors.orange,
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 10,
    shadowColor: Colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
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
