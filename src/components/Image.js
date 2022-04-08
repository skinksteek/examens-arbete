import React, {useState} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import Colors from '../styles/Colors';

export const ImageModule = () => {
  const [error, setError] = useState(null);
  return (
    <View>
      {!error ? (
        <Image
          source={{
            uri: 'http://linus.labb.soleilit.se/images/18.484d9c7317ce4f0e1b6f33/1619692053482/exempel-28.jpg',
          }}
          onError={() => setError(true)}
        />
      ) : (
        <View style={styles.bgContainer}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://images.unsplash.com/photo-1539667468225-eebb663053e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyYWx8ZW58MHx8MHx8&w=1000&q=80',
            }}
          />
          <Text style={styles.author}>Foto: Arkivbild</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bgContainer: {
    backgroundColor: Colors.orange,
  },
  image: {
    width: '100%',
    height: 500,
    opacity: 0.65,
  },
  author: {
    backgroundColor: Colors.white,
    fontSize: 12,
    paddingLeft: 15,
    paddingBottom: 5,
  },
});

export default ImageModule;
