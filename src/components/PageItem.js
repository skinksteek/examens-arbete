import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../styles/Colors';

export const PageItem = ({title, description, icon, id}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Subpage', {
          id: id,
        });
      }}>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>{title}</Text>
          <FontAwesome5
            name={icon}
            style={styles.icon}
            size={20}
            color={Colors.orange}
          />
        </View>
        <Text style={styles.desc}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.white,
    padding: 20,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 2,
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 4,
    elevation: 3,
    borderColor: Colors.orange,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.7,
    borderColor: Colors.orange,
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
  },
  icon: {
    alignSelf: 'flex-end',
  },
  desc: {
    paddingTop: 10,
    fontSize: 16,
  },
});

export default PageItem;
