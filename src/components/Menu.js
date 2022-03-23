import React, {useState, useEffect} from 'react';
import {fetchFunction} from '../api/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
    <Tab.Navigator>
      <Tab.Screen
        name="Hem"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="home" color="black" size={20} />
          ),
        }}
      />
      {pages.map((page, index) => (
        <Tab.Screen
          name={page.name}
          component={templates[page.properties.template]}
          key={index}
          options={{
            tabBarIcon: () => (
              <FontAwesome5
                name={page.properties['sol.rn.icon']}
                color="black"
                size={20}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Menu;
