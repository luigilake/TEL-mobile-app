import { StyleSheet } from 'react-native';



const HEADER_MAX_HEIGHT = 380;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  topBar: {
    paddingTop: 18,
    backgroundColor: 'rgba(50, 49, 49, 0)',
    position: 'absolute'
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
    justifyContent: 'flex-end',

  },
  mainImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  solutionTitle: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  solutionContact: {
    fontSize: 30,
    color: 'white',
    marginLeft: 20,
  },
  details: {
    margin: 10,
    marginBottom: 0,
  },
  overViewTitle: {
    fontWeight: 'bold',
    color: '#d69b19',
    fontSize: 25,
    marginBottom: 10,
  },
  text: {
    fontSize: 20
  },
  scrollView: {
    flex: 1,
    marginTop: HEADER_MAX_HEIGHT,
  },
  animated: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#59a345',
    overflow: 'hidden',
  }
});

export default styles;
