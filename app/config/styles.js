import { Platform } from "react-native";

import colors from "./colors";

//Defining the default styles for text
export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
