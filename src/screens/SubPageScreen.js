import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../styles/Colors';
// import data from '../api/data.json';

// const subdata = data.contentNodes;

export const SubPageScreen = ({navigation}) => {
  return (
    <View style={styles.body}>
      {/* {subdata.map((content, index) => (
        <Text key={index}>{content.properties.textContent}</Text>
      ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
  },
});

export default SubPageScreen;
