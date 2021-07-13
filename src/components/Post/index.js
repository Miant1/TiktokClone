import React, { useState } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import Video from 'react-native-video';
import styles from './styles';
import AntDesign from "react-native-vector-icons/AntDesign";

const Post = () => {
  const [pause, setPause] = useState(false);

  const onPlayPausePress = () => {
    setPause(!pause);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View>
          <Video
            source={{
              uri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
            }}
            resizeMode="cover"
            onError={e => console.log(e)}
            style={styles.video}
            repeat={true}
            paused={pause}
          />

          <View style={styles.UIContainer}>
            <View style={styles.like}>
              <AntDesign color={'#fff'} size={26} name={'heart'} />
              <Text style={styles.likeCounter}>100</Text>
            </View>

            <View style={styles.name}>
              <Text style={styles.userName}>@mikesoul</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;
