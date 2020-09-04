import React from "react";
import {
  Container,
  SlideInput,
  ValueDisplay,
  ValueContainer,
} from "./styles/Slider";
import { InputLabel } from "../styles/UserInput";

class Slider extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Container>
        <InputLabel>{this.props.label}</InputLabel>
        <SlideInput
          type="range"
          min={0}
          max={this.props.max}
          value={0}
          onChange={this.updateCorrespondingState}
        />
        <ValueContainer>
          <ValueDisplay left>{this.props.min}</ValueDisplay>
          <ValueDisplay middle>1</ValueDisplay>
          <ValueDisplay>{this.props.max}</ValueDisplay>
        </ValueContainer>
      </Container>
    );
  }
}

export default Slider;
