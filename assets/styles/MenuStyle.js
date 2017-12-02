import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  topBar: {
    backgroundColor: '#59a345',
    height: 22,
    width: 300,
  },
  logo: {
    width: 240,
    height: 100,
    marginLeft: 5,
    marginBottom: 20,
  },
  tileContainer: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  }
});

export default styles;
