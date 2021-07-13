import React, { useState } from "react";
import {Image, Text, View} from 'react-native';
import styles from './styles';

const SliderItem = (props) => {

  const [image, setImage] = useState(props.img);
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: image.imageUri,
        }}
      />
    </View>

  );
};

export default SliderItem;
