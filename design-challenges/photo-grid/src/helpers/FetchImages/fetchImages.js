const url = "https://picsum.photos/";

function fetchImages(state) {
  let blur = state.blur;
  if (blur > 1 && blur < 10) {
    blur = 1;
  } else {
    blur = Math.floor(blur / 10);
  }
  let numberOfPhotos = state.size * state.size;
  let dimension = Math.floor(state.dimension / state.size);
  let newList = buildUrls(blur, numberOfPhotos, dimension);
  return newList;
}

function buildUrls(blur, numberOfPhotos, dimension) {
  let blurString = "";
  let combo = "";
  let urls = [];
  if (blur > 0) {
    blurString = "?blur=" + blur;
  }
  if (blurString !== "") {
    combo = "&";
  } else {
    combo = "?";
  }
  for (let i = 0; i < numberOfPhotos; i++) {
    urls.push(url + dimension + blurString + combo + "random=" + i);
  }
  return urls;
}

export default fetchImages;
