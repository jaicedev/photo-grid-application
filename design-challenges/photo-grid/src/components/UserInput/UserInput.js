import React from "react";
import { GenerationForm, Grayscale, ImageBlur } from "./styles/UserInput";
import Size from "./Size";
import Slider from "./Slider/";

class UserInput extends React.Component {
  render() {
    return (
      <GenerationForm>
        <Size
          function={this.props.onDimensionChange}
          label="Grid Dimensions ( Pixels )"
        />
        <Grayscale>
          <Slider
            typeDesc="UPDATE_GRAYSCALE"
            min="0"
            max="100"
            label="Grayscale ( % )"
            name="grayscale"
            function={this.props.onGrayscaleChange}
          />
        </Grayscale>
        <ImageBlur>
          <Slider
            typeDesc="UPDATE_BLUR"
            min="0"
            max="100"
            label="Image Blur ( % ) "
            name="blur"
            function={this.props.onBlurChange}
          />
        </ImageBlur>
      </GenerationForm>
    );
  }
}

export default UserInput;
