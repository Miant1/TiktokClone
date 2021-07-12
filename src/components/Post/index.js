import React from 'react';
import { Text, View } from "react-native";
import Video from 'react-native-video';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
        }}
        resizeMode="cover"
        onError={e => console.log(e)}
        style={styles.video}
        repeat={true}
      />
      <View style={styles.UIContainer}>
        <View style={styles.like}>
          <Text style={{fontSize: 20, color: '#fff'}}>like</Text>
        </View>
        <View style={styles.name}>
          <Text style={styles.userName}>@mikesoul</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;
