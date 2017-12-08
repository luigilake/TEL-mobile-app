import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#59a345',
    height: 22,
  },
  logo: {
    height: 100,
    width: 340,
    margin: 20,
    marginTop: 50,
    marginBottom: 50,
  },
  titleView: {
    margin: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  contactView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  icons: {
    height: 20,
    width: 20,
  },
});

export default styles;
