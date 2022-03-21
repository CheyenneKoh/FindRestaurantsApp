import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MapScreen from "../screens/MapScreen";
import LocationDetailsScreen from "../screens/LocationDetailsScreen";

const Stack = createStackNavigator();

const MapNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Map"
      options={{ headerShown: false }}
      component={MapScreen}
    />
    <Stack.Screen name="LocationDetails" component={LocationDetailsScreen} />
  </Stack.Navigator>
);

export default MapNavigator;
