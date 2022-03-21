import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantsScreen from "../screens/RestaurantsScreen";
import RestaurantDetailsScreen from "../screens/RestaurantDetailsScreen";

const Stack = createStackNavigator();

const RestaurantsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="RestaurantList"
      options={{ headerShown: false }}
      component={RestaurantsScreen}
    />
    <Stack.Screen
      name="RestaurantDetails"
      component={RestaurantDetailsScreen}
    />
  </Stack.Navigator>
);

export default RestaurantsNavigator;
