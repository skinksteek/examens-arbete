import React, {useState} from 'react';
import {StyleSheet, Image, View, ImageBackground} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Colors from '../styles/Colors';

export const ImageModule = () => {
  const [error, setError] = useState(null);
  return (
    <ScrollView>
      <View style={styles.container}>
        {!error ? (
          <Image
            source={{
              uri: 'http://linus.labb.soleilit.se/images/18.484d9c7317ce4f0e1b6f33/1619692053482/exempel-28.jpg',
            }}
            onError={() => setError(true)}
          />
        ) : (
          <ImageBackground
            style={styles.backgroundImage}
            source={{
              uri: 'https://images.unsplash.com/photo-1539667468225-eebb663053e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyYWx8ZW58MHx8MHx8&w=1000&q=80',
            }}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: Colors.orange,
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.65,
  },
});

export default ImageModule;
