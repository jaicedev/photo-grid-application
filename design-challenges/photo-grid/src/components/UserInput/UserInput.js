import React from "react";
import { GenerationForm, Grayscale, ImageBlur } from "./styles/UserInput";
import Size from "./Size";
import Slider from "./Slider/";
import Button from "./Button";

class UserInput extends React.Component {
  submitHandler = (e) => {
    e.preventDefault();
    console.log("Hello");
  };

  render() {
    return (
      <GenerationForm onSubmit={this.submitHandler}>
        <Size size={this.props.getSize} label="Grid Dimensions ( Pixels )" />
        <Grayscale>
          <Slider
            typeDesc="UPDATE_GRAYSCALE"
            min="0"
            max="100"
            label="Grayscale ( % )"
            name="grayscale"
          />
        </Grayscale>
        <ImageBlur>
          <Slider
            typeDesc="UPDATE_BLUR"
            min="0"
            max="100"
            label="Image Blur ( % ) "
            name="blur"
          />
        </ImageBlur>
        <Button text="Generate" />
      </GenerationForm>
    );
  }
}

export default UserInput;
