import * as actions from "./actionTypes";
import axios from "axios";

const API_URL = "https://mocki.io/v1/2f64db8b-54ef-4157-8a9f-31a97056b3b1";

export const retrieveRestaurants = () => {
  try {
    return async (dispatch) => {
      const response = await axios.get(API_URL);
      dispatch({
        type: actions.RETRIEVE_RESTAURANTS,
        payload: response.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const starLocation = (id) => (dispatch) => {
  dispatch({
    type: actions.STAR_LOCATION,
    payload: {
      id,
    },
  });
};

export const unstarLocation = (id) => (dispatch) => {
  dispatch({
    type: actions.UNSTAR_LOCATION,
    payload: {
      id,
    },
  });
};
