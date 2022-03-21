import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import { useSelector, useDispatch } from "react-redux";
import { retrieveRestaurants } from "../redux/actions";

function RestaurantsScreen({ navigation }) {
  const restaurants = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveRestaurants(dispatch));
  }, []);

  return (
    <Screen style={styles.screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={restaurants}
        keyExtractor={(restaurant) => restaurant.id.toString()}
        renderItem={({ item }) => (
          <Card restaurant={item} navigation={navigation} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 8,
    backgroundColor: colors.light,
  },
});

export default RestaurantsScreen;
