import { UPDATE_DIMENSION } from "../actions/types";

const initialState = {
  dimension: 100,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_DIMENSION: {
      const dimension = action.payload;
      return {
        ...state,
        dimension,
      };
    }
    default:
      return state;
  }
}
