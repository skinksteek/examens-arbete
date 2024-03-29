import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card, Title, Paragraph} from 'react-native-paper';
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
      <Card style={styles.container}>
        <Card.Content style={styles.heading}>
          <Title>{title}</Title>
          <FontAwesome5
            name={icon}
            style={styles.icon}
            size={20}
            color={Colors.orange}
          />
        </Card.Content>
        <Paragraph style={styles.desc}>{description}</Paragraph>
      </Card>
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
    marginLeft: 15,
  },
});

export default PageItem;
