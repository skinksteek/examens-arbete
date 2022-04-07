import React, {useState, useEffect} from 'react';
import {fetchFunction} from '../api/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/HomeScreen';
import {templates} from '../utils/Constants';
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
        tabBarActiveTintColor: Colors.orange,
        tabBarStyle: {
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
          borderTopLeftRadius: 21,
          borderTopRightRadius: 21,
          backgroundColor: Colors.white,
          position: 'absolute',
          bottom: 0,
          padding: 10,
          width: '100%',
          height: 60,
          zIndex: 0,
        },
      }}>
      <Tab.Screen
        name="Hem"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors.orange,
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
              backgroundColor: Colors.orange,
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
