import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Screen from "../components/Screen";

function MapScreen({ route, navigation }) {
  const restaurants = useSelector((state) => state);
  let markers = [];

  if (route.params && route.params.id) {
    markers.push(restaurants.find((res) => res.id === route.params.id));
  } else {
    markers = [...restaurants];
  }

  let mapRef = null;

  const fitMarkers = () => {
    const coordinates = markers.map((marker) => marker.coordinate);

    mapRef.fitToCoordinates(coordinates, {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      animated: false,
    });
  };

  return (
    <Screen style={styles.screen}>
      <MapView
        style={styles.map}
        ref={(ref) => (mapRef = ref)}
        onLayout={() => fitMarkers()}
      >
        {markers.map((marker) => {
          return (
            <Marker
              coordinate={marker.coordinate}
              key={marker.id}
              onPress={() => navigation.navigate("LocationDetails", marker.id)}
            />
          );
        })}
      </MapView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    flex: 1,
  },
});

export default MapScreen;
