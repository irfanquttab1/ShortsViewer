import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './Style';
import Theme from '../Utils/Theme';

import {MemoizedVideo} from '../Memorized/Memorized';

const YoutubeShorts = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderItem = ({item, index}) => (
    <MemoizedVideo
      item={item}
      index={index}
      selectedIndex={selectedIndex}
      setSelectedIndex={setSelectedIndex}
    />
  );

  return (
    <View style={styles.main}>
      <FlatList
        data={[
          require('../assets/video1.mp4'),
          require('../assets/video2.mp4'),
          require('../assets/video3.mp4'),
          require('../assets/video4.mp4'),
          require('../assets/video5.mp4'),
          require('../assets/video6.mp4'),
          require('../assets/video7.mp4'),
          require('../assets/video8.mp4'),
        ]}
        onScroll={e => {
          setSelectedIndex(
            e.nativeEvent.contentOffset.y.toFixed(0) / Theme.hp('100%'),
          );
        }}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default YoutubeShorts;
