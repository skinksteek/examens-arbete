import React, {useState, useEffect} from 'react';
import {fetchFunction} from '../api/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/HomeScreen';
import templates from '../utils/Constants';
import {Colors} from '../styles/Colors';
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
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarStyle: {
          borderTopLeftRadius: 21,
          borderTopRightRadius: 21,
          shadowOffset: {width: 10, height: 10},
          shadowColor: 'black',
          shadowRadius: 1,
          backgroundColor: Colors.primary,
          position: 'absolute',
          bottom: 0,
          padding: 10,
          height: 54,
        },
      }}>
      <Tab.Screen
        name="Hem"
        component={HomeScreen}
        options={{
          headerStyle: {
            borderBottomRightRadius: 21,
            borderBottomLeftRadius: 21,
            backgroundColor: Colors.primary,
          },
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="home" color={color} size={20} />
          ),
        }}
      />
      {pages.map((page, index) => (
        <Tab.Screen
          name={page.name}
          component={templates[page.properties.template]}
          key={index}
          options={{
            headerStyle: {
              borderBottomRightRadius: 21,
              borderBottomLeftRadius: 21,
              backgroundColor: Colors.primary,
            },
            tabBarIcon: ({color}) => (
              <FontAwesome5
                name={page.properties['sol.rn.icon']}
                color={color}
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
