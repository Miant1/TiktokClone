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
  },
  name: {
    paddingLeft: 10,
    marginBottom: 50,
  },
  userName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  }
});

export default styles;
