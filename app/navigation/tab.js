import React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {theme, icons} from '../constants';
import {Home} from '../screens';

const {COLORS} = theme;
const Tab = createBottomTabNavigator();
const tabOptions = {
  showLabel: false,
  style: {
    height: '10%',
  },
};

const CameraBoutton = () => {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        backgroundColor: COLORS.primary,
        borderRadius: 50 / 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={icons.camera}
        resizeMode="contain"
        style={{width: 23, height: 23}}
      />
    </View>
  );
};
const Tabs = () => {
  return (
    <Tab.Navigator
      //   tabBarOptions={tabOptions}
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;
          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={icons.flash}
                  resizeMode="contain"
                  style={{tintColor: tintColor, width: 25, height: 25}}
                />
              );
            case 'Box':
              return (
                <Image
                  source={icons.cube}
                  resizeMode="contain"
                  style={{tintColor: tintColor, width: 25, height: 25}}
                />
              );
            case 'Camera':
              return <CameraBoutton />;
            case 'Search':
              return (
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{tintColor: tintColor, width: 25, height: 25}}
                />
              );
            case 'Favourite':
              return (
                <Image
                  source={icons.heart}
                  resizeMode="contain"
                  style={{tintColor: tintColor, width: 25, height: 25}}
                />
              );
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Box" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Camera"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Favourite"
        component={Home}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
