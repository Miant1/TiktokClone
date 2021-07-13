import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Video from 'react-native-video';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Post = (props) => {
  const [posts, setPosts] = useState(props.posts);
  const [pause, setPause] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  console.log(posts);

  const onPlayPausePress = () => {
    setPause(!pause);
  };

  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPosts({
      ...posts,
      likes: posts.likes + likesToAdd,
    });
    setIsLiked(!isLiked);
  };
  console.log(posts.videoPath);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        style={styles.pausePlayBtn}
        onPress={onPlayPausePress}>
        <View>
          <Video
            source={{
              uri: posts.videoUri
            }}
            resizeMode="cover"
            onError={e => console.log(e)}
            style={styles.video}
            repeat={true}
            paused={true}
          />

          <View style={styles.UIContainer}>
            <TouchableOpacity style={styles.like} onPress={onLikePress}>
              <AntDesign color={isLiked ? 'red' : '#fff'} size={26} name={'heart'} />
              <Text style={styles.likeCounter}>{posts.likes}</Text>
            </TouchableOpacity>

            <View style={styles.info}>
              <Text style={styles.desc}>{posts.desc}</Text>
              <Text style={styles.userName}>@{posts.username}</Text>
            </View>

          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;
