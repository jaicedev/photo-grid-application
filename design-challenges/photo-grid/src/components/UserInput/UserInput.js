import React from "react";
import { GenerationForm, Grayscale, ImageBlur } from "./styles/UserInput";
import Size from "./Size";
import Slider from "./Slider/";
import Button from "./Button";

class UserInput extends React.Component {
  render() {
    return (
      <GenerationForm>
        <Size label="Grid Dimensions" />
        <Grayscale>
          <Slider min="0" max="100" label="Grayscale %" />
        </Grayscale>
        <ImageBlur>
          <Slider min="0" max="10" label="Image Blur" />
        </ImageBlur>
        <Button text="Generate" />
      </GenerationForm>
    );
  }
}

export default UserInput;
