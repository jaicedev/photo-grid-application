export const SET_PHOTOS = "SET_PHOTOS";
export const SET_DIMENSION = "SET_DIMENSION";
export const SET_GRAYSCALE = "SET_GRAYSCALE";
export const SET_BLUR = "SET_BLUR";

export const setPhotos = (photoNum) => {
  return {
    type: SET_PHOTOS,
    payload: photoNum,
  };
};
export const setDimension = (dimension) => {
  return {
    type: SET_DIMENSION,
    payload: dimension,
  };
};
export const setGrayscale = (grayscale) => {
  return {
    type: SET_GRAYSCALE,
    payload: grayscale,
  };
};
export const setBlur = (blur) => {
  return {
    type: SET_BLUR,
    payload: blur,
  };
};
