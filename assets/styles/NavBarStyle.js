import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#66bb4f',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 65,
    shadowColor: '#414141',
    shadowOffset: { width: 0, height: 3},
    shadowOpacity: 0.4,
  },
  titleOrganizer: {
    flexDirection: 'row',
    width: 200,
  },
  imageOrganizer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 65,
  },
  navbarTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  selectedTab: {
    color: 'white',
    fontSize: 30,
    fontStyle: 'italic'
  },
  search: {
    color: 'white',
    fontSize: 30,
  },
  icon: {
    width: 25,
    height: 25,
  },
  textInput: {
    height: 30,
    width: 170,
    color: 'white',
    fontSize: 25
  },
});

export default styles;
