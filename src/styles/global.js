import {StyleSheet} from 'react-native';
import {Colors} from './Colors';

export const globalStyling = StyleSheet.create({
  default_view: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.gray,
  },
  default_scroll: {
    backgroundColor: Colors.gray,
  },
  centered: {
    flex: 1,
    padding: 20,
  },
  flex: {
    flex: 1,
  },
});

export const textStyling = StyleSheet.create({
  headerL: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 5,
    textAlign: 'center',
    color: Colors.fontColor,
  },
  headerM: {
    fontWeight: 'bold',
    fontSize: 25,
    margin: 5,
    textAlign: 'center',
    color: Colors.fontColor,
  },
  title: {
    fontWeight: '500',
    fontSize: 25,
    padding: 10,
    color: Colors.fontColor,
  },
  desc: {
    fontSize: 16,
    fontWeight: '500',
    padding: 10,
    color: Colors.fontColor,
  },
  publish: {
    fontSize: 13,
    fontWeight: '400',
    marginTop: 5,
    marginLeft: 15,
    color: Colors.fontColor,
  },
  simpletext: {
    color: Colors.fontColor,
    flex: 1,
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingTop: 5,
  },
});
