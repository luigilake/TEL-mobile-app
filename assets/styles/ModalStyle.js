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
    margin: 10,
  },
  titleDiv: {
    backgroundColor: 'rgba(50, 49, 49, 0.4)',
    height: 380,
    width: 380,
    justifyContent: 'space-between',
  },
  mainImage: {
    flex: 1,
    minHeight: 380,
    backgroundColor: '#333333',
  },
  solutionTitle: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    margin: 5,
    marginLeft: 20,
  },
  solutionContact: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    margin: 5,
    marginBottom: 20,
    marginLeft: 20,
  }
});

export default styles;
