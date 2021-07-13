import React from 'react';
import {FlatList, Text, View} from 'react-native';
import SliderItem from '../../components/SliderItem';
import PostsData from '../../PostsData/postsData';

const Discover = () => {
  return (
    <View>
      <FlatList
        style={{width: '100%', height: '30%'}}
        data={PostsData}
        renderItem={({item}) => <SliderItem img={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Discover;
