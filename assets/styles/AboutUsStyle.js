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
    margin: 15,
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
    marginRight: 10,
  },
  contactText: {
    fontSize: 20,
  },
  linkText: {
    fontSize: 20,
    color: '#116ee9',
  },
  closeIcon: {
    width: 35,
    height: 35,
  },
  closeButton: {
    position: 'absolute',
    marginTop: 30,
    marginLeft: 10,
  }
});

export default styles;
