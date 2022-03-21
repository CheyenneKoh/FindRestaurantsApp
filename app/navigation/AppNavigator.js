import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import RestaurantsNavigator from "./RestaurantsNavigator";
import MapNavigator from "./MapNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}
  >
    <Tab.Screen
      name="RestaurantsNavigator"
      component={RestaurantsNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="restaurant" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="MapNavigator"
      component={MapNavigator}
      options={{
        unmountOnBlur: true,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="map-marker-circle"
            color={color}
            size={size}
          />
        ),
      }}
      listeners={({ navigation }) => ({
        blur: () => navigation.setParams({ screen: undefined }),
      })}
    />
  </Tab.Navigator>
);

export default AppNavigator;
