import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height - 47,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  UIContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  like: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 20,
    bottom: 50,
  },
  likeCounter: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
    paddingTop: 5,
  },
  name: {
    paddingLeft: 20,
    marginBottom: 70,
  },
  userName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  }
});

export default styles;
