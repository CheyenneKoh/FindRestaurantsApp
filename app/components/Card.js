import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";
import AppButton from "./AppButton";
import { useDispatch } from "react-redux";
import { starLocation, unstarLocation } from "../redux/actions";

function Card({ restaurant, navigation }) {
  const dispatch = useDispatch();

  const star = () => dispatch(starLocation(restaurant.id));
  const unstar = () => dispatch(unstarLocation(restaurant.id));

  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        fadeDuration={1000}
        source={{
          width: 200,
          height: 300,
          uri: restaurant.image,
        }}
      />

      <View style={styles.detailsContainer}>
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

      <View style={styles.buttonsContainer}>
        <AppButton
          title="View Details"
          onPress={() =>
            navigation.navigate("RestaurantDetails", restaurant.id)
          }
        />
        <AppButton
          title="View On Map"
          onPress={() =>
            navigation.navigate("MapNavigator", {
              screen: "Map",
              params: {
                id: restaurant.id,
              },
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 5,
  },
  detailsContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  name: {
    marginBottom: 1,
    fontWeight: "bold",
  },
  cuisine: {
    color: colors.secondary,
  },
  buttonsContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Card;
