import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import { useSelector, useDispatch } from "react-redux";
import { starLocation, unstarLocation } from "../redux/actions";

function LocationDetailsScreen({ route }) {
  const restaurants = useSelector((state) => state);
  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === route.params
  );

  const dispatch = useDispatch();

  const star = () => dispatch(starLocation(restaurant.id));
  const unstar = () => dispatch(unstarLocation(restaurant.id));

  return (
    <Screen>
      <Image
        style={styles.image}
        fadeDuration={1000}
        source={{
          width: 200,
          height: 300,
          uri: restaurant.image,
        }}
      />
      <View style={[styles.header, styles.paddingProps]}>
        <View>
          <AppText style={styles.name} numberOfLines={1}>
            {restaurant.name}
          </AppText>
          <AppText style={styles.cuisine} numberOfLines={2}>
            {restaurant.cuisine}
          </AppText>
        </View>
        {restaurant.starred && (
          <TouchableOpacity activeOpacity={0.5} onPress={() => unstar()}>
            <AntDesign name="star" size={24} color="yellow" />
          </TouchableOpacity>
        )}
        {!restaurant.starred && (
          <TouchableOpacity activeOpacity={0.5} onPress={() => star()}>
            <AntDesign name="staro" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
      <AppText style={[styles.description, styles.paddingProps]}>
        {restaurant.description}
      </AppText>
      <View style={styles.paddingProps}>
        <View style={styles.labelValue}>
          <AppText style={styles.label}>Address: </AppText>
          <AppText style={styles.value}>{restaurant.address}</AppText>
        </View>
        <View style={styles.labelValue}>
          <AppText style={styles.label}>Longitude: </AppText>
          <AppText style={styles.value}>
            {restaurant.coordinate.longitude}
          </AppText>
        </View>
        <View style={styles.labelValue}>
          <AppText style={styles.label}>Latitude: </AppText>
          <AppText style={styles.value}>
            {restaurant.coordinate.latitude}
          </AppText>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  paddingProps: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cuisine: {
    color: colors.secondary,
    fontSize: 20,
    marginVertical: 1,
  },
  description: {
    color: colors.medium,
    marginVertical: 10,
  },
  labelValue: {
    flexDirection: "row",
    marginBottom: 5,
  },
  label: {
    color: colors.medium,
    fontWeight: "bold",
  },
  value: {
    color: colors.medium,
  },
});

export default LocationDetailsScreen;
