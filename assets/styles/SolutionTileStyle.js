import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeeeee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    minHeight: 75,
    shadowColor: '#414141',
    shadowOffset: { width: 0, height: 3},
    shadowOpacity: 0.4,
    marginBottom: 5,
  },
  icon: {
    width: 40,
    height: 40,
  },
  image: {
    width: 90,
    height: 60,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  mainTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 1,
  },
  subTitle: {
    fontSize: 15,
    marginBottom: 10,
  },
  textBox: {
    width: 200,
  }
});

export default styles;
