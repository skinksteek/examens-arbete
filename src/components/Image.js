import React, {useState} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import Colors from '../styles/Colors';

export const ImageModule = ({
  image,
  height = 50,
  width = 50,
  scale,
  showAuthor,
}) => {
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
        <View>
          <Image
            style={{height: height, width: width, resizeMode: scale}}
            source={{
              uri:
                image ||
                'https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2016/06/02/auto/800/c581cc58e0e310144b2aa6c0ec08e796.png?mod=v1_93512d3fc561643f9a0039a8f1934bf2',
            }}
          />
          {showAuthor && <Text style={styles.author}>Foto: Arkivbild</Text>}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  author: {
    backgroundColor: Colors.gray,
    fontSize: 12,
    paddingLeft: 15,
    paddingBottom: 5,
  },
});

export default ImageModule;
