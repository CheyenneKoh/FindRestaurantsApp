import * as actions from "./actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case actions.RETRIEVE_RESTAURANTS:
      console.log(action.payload);
      return [...state].concat(action.payload);

    case actions.STAR_LOCATION:
      return state.map((location) =>
        location.id !== action.payload.id
          ? location
          : { ...location, starred: true }
      );

    case actions.UNSTAR_LOCATION:
      return state.map((location) =>
        location.id !== action.payload.id
          ? location
          : { ...location, starred: false }
      );

    default:
      return state;
  }
};
