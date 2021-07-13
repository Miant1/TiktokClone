import React from 'react';
import { Dimensions, FlatList, View } from "react-native";
import PostsData from '../../PostsData/postsData';
import Post from '../../components/Post';


const Home = () => {
  return (
    <View>
      <FlatList
        data={PostsData}
        renderItem={({item}) => <Post posts={item} />}

        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 90}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default Home;
