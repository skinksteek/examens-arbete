import React, {useState, useEffect} from 'react';
import {fetchFunction} from '../api/index';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import {templates} from '../utils/Constants';
import Colors from '../styles/Colors';

const Drawer = createDrawerNavigator();

export const Menu = () => {
  let [pages, setPages] = useState([]);
  useEffect(() => {
    fetchFunction(
      'https://linus.labb.soleilit.se/rest-api/1/1/19.451c9ebc17dd75869517a3ed/headless',
      'get',
    )
      .then(response => response.json())
      .then(data => setPages(data.nodes));
  }, []);

  return (
    <Drawer.Navigator
      initialRouteName="Hem"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.orange,
        },
        drawerActiveBackgroundColor: Colors.orange,
        drawerActiveTintColor: Colors.black,
      }}>
      <Drawer.Screen name="Hem" component={HomeScreen} />
      {pages.map((page, index) => (
        <Drawer.Screen
          children={() => {
            const TheComponent = templates[page.properties.template];
            return (
              <TheComponent id={page.properties['jcr:uuid']} key={index} />
            );
          }}
          name={page.name}
          key={index}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default Menu;
