import { SET_DIMENSION } from "../actions";
const initialState = {
  photos: 1,
  dimension: 200,
  grayscale: 0,
  blur: 0,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "SET_PHOTOS":
    //   return action.payload.photoNum;
    case SET_DIMENSION:
      console.log(action.payload.dimension);
      return action.payload.dimension;
    //     case SET_GRAYSCALE:
    //       return {...state, action.payload.grayscale};
    //     case SET_BLUR:
    //       return {...state, action.payload.blur};
    default:
      return state;
  }
};

export default appReducer;
