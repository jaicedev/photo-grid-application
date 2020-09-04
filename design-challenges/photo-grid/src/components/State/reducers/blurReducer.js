import { UPDATE_BLUR } from "../actions/types";

const initialState = {
  blur: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_BLUR: {
      const blurAmount = action.payload;
      return {
        ...state,
        blurAmount,
      };
    }
    default:
      return state;
  }
}
