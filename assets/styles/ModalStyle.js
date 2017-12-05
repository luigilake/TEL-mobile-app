import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  topBar: {
    backgroundColor: '#59a345',
    height: 22,
  },
  closeIcon: {
    height: 40,
    width: 40,
    margin: 5,
  },
  closeView: {
    alignItems: 'flex-end',
    position: 'absolute',
    marginTop: 22,
  },
  mainImage: {
    width: 400,
    height: 400,
    minHeight: 200,
    backgroundColor: '#333333',
  }
});

export default styles;
