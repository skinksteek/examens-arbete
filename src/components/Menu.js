import React, {useState, useEffect} from 'react';
import {fetchFunction} from '../api/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import templates from '../utils/Constants';
const Tab = createBottomTabNavigator();

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
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        {pages.map((page, index) => (
          <Tab.Screen
            name={page.name}
            component={templates[page.properties.template]}
            key={index}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Menu;
