import { StyleSheet } from 'react-native';



const HEADER_MAX_HEIGHT = 380;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  topBar: {
    paddingTop: 13,
    backgroundColor: 'rgba(50, 49, 49, 0)',
    position: 'absolute',
    flexDirection: 'row',
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
    paddingBottom: 15,
  },
  mainImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    backgroundColor: '#333333',
  },
  solutionTitle: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20,
  },
  solutionContact: {
    fontSize: 30,
    color: 'white',
    marginLeft: 20,
    marginRight: 20,
  },
  details: {
    margin: 15,
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
    paddingTop: 10,
  },
  animated: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#59a345',
    overflow: 'hidden',
  },
  headerDiv: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTEL: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
  icons: {
    height: 30,
    width: 30,
    margin: 10,
  },
});

export default styles;
