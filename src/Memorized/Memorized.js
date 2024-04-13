import React, {memo, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Image, Share} from 'react-native';
import Video from 'react-native-video';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {styles} from '../YoutubeShorts/Style';

export const MemoizedVideo = memo(
  ({item, index, selectedIndex, setSelectedIndex}) => {
    const videoRef = useRef(null);
    const [likes, setLikes] = useState(120);
    const [dislikes, setDislikes] = useState(0);
    const [subscribed, setSubscribed] = useState(false);

    const onEnd = () => {
      videoRef.current.seek(0);
    };

    const handleLike = () => {
      setLikes(likes > 120 && likes < 122 ? likes - 1 : likes + 1);
    };

    const handleDislike = () => {
      setDislikes(dislikes > 0 ? dislikes - 1 : dislikes + 1);
    };

    const handleShare = async () => {
      try {
        const result = await Share.share({
          message: 'Check out this video!',
          url: 'video_url_here',
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            console.log('Shared via:', result.activityType);
          } else {
            console.log('Shared');
          }
        } else if (result.action === Share.dismissedAction) {
          console.log('Dismissed');
        }
      } catch (error) {
        console.log('Error sharing:', error.message);
      }
    };

    const handleSubscribe = () => {
      setSubscribed(!subscribed);
    };

    return (
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          paused={selectedIndex === index ? false : true}
          source={item}
          style={styles.videoContainer}
          resizeMode="cover"
          onEnd={onEnd}
        />

        <TouchableOpacity
          style={styles.shortSwipe}
          onPress={() => {
            if (selectedIndex === -1) {
              setSelectedIndex(index);
            } else {
              setSelectedIndex(-1);
            }
          }}>
          {selectedIndex === -1 && (
            <View style={styles.pauseIcon}>
              <Foundation name="pause" size={35} color={'white'} />
            </View>
          )}
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.headerText}>Shorts</Text>
          <View style={styles.headerIcons}>
            <Feather name="search" size={25} color={'white'} />
            <Entypo name="dots-three-vertical" size={25} color={'white'} />
          </View>
        </View>
        <View style={styles.profileView}>
          <View style={styles.profileRow}>
            <Image
              source={require('../assets/irfanquttab.jpeg')}
              style={styles.profileImg}
            />
            <Text style={styles.profileText}>@irfanquttab</Text>
            <TouchableOpacity
              style={[
                styles.subscribeView,
                {backgroundColor: subscribed ? '#DFDFDFDF' : 'white'},
              ]}
              onPress={handleSubscribe}>
              <Text
                style={[
                  styles.subscribeText,
                  {color: subscribed ? 'white' : 'black'},
                ]}>
                {subscribed ? 'Unsubscribe' : 'Subscribe'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.hashtagView}>
            <Text style={styles.hashtagText}>#ReactNative</Text>
            <Text style={styles.hashtagText}>#YoutubeShorts</Text>
          </View>
        </View>
        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconPress} onPress={handleLike}>
            <AntDesign
              name="like1"
              size={30}
              color={likes > 120 && likes < 122 ? '#1DA1F2' : 'white'}
            />
            <Text style={styles.iconText}>{likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconPress} onPress={handleDislike}>
            <AntDesign
              name="dislike1"
              size={30}
              color={dislikes > 0 ? '#1DA1F2' : 'white'}
            />
            <Text style={styles.iconText}>{dislikes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconPress}>
            <MaterialCommunityIcons
              name="message-processing"
              size={30}
              color={'white'}
            />
            <Text style={styles.iconText}>20</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconPress} onPress={handleShare}>
            <Fontisto name="share-a" size={25} color={'white'} />
            <Text style={styles.iconText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.remixIcon}>
            <View style={styles.remixRow}>
              <Fontisto
                name="share-a"
                size={25}
                color={'white'}
                style={styles.remix1}
              />
              <Fontisto
                name="share-a"
                size={25}
                color={'white'}
                style={styles.remix2}
              />
            </View>
            <Text style={styles.iconText}>Remix</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.index === nextProps.index &&
      prevProps.selectedIndex === nextProps.selectedIndex &&
      prevProps.item === nextProps.item
    );
  },
);
