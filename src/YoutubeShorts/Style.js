import {StyleSheet} from 'react-native';
import Theme from '../Utils/Theme';

export const styles = StyleSheet.create({
  main: {flex: 1},
  videoContainer: {
    height: Theme.hp('100%'),
    width: Theme.wp('100%'),
    alignSelf: 'center',
  },
  shortSwipe: {
    height: Theme.hp('100%'),
    width: Theme.wp('100%'),
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pauseIcon: {
    height: 50,
    width: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    position: 'absolute',
    justifyContent: 'space-between',
    top: 20,
    width: Theme.wp('100%'),
  },
  headerText: {color: 'white', fontSize: 20, fontWeight: '800'},
  headerIcons: {flexDirection: 'row', alignItems: 'center', gap: 20},
  profileView: {
    width: Theme.wp('100%'),
    position: 'absolute',
    bottom: 50,
    gap: 10,
    paddingHorizontal: 20,
  },
  profileRow: {flexDirection: 'row', alignItems: 'center', gap: 8},
  profileImg: {height: 40, width: 40, borderRadius: 100},
  profileText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '800',
    marginLeft: 10,
  },
  subscribeView: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 100,
  },
  subscribeText: {
    fontSize: 12,
    fontWeight: '500',
  },
  hashtagView: {flexDirection: 'row', alignItems: 'center', gap: 5},
  hashtagText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '800',
  },
  rightIcons: {position: 'absolute', right: 10, bottom: 80, gap: 30},
  iconPress: {gap: 3, alignItems: 'center'},
  iconText: {color: 'white'},
  remixIcon: {gap: 8, alignItems: 'center'},
  remixRow: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: -5,
  },
  remix1: {transform: [{rotate: '110deg'}]},
  remix2: {transform: [{rotate: '-70deg'}]},
  loader: {
    height: Theme.hp('100%'),
    width: Theme.wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});
