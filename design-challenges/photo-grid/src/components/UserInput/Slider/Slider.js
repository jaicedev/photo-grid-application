import React from "react";
import {
  Container,
  SlideInput,
  ValueDisplay,
  ValueContainer,
} from "./styles/Slider";
import { InputLabel } from "../styles/UserInput";

export default class Slider extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <Container>
        <InputLabel>{this.props.label}</InputLabel>
        <SlideInput
          type="range"
          min={0}
          max={this.props.max}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <ValueContainer>
          <ValueDisplay left>{this.props.min}</ValueDisplay>
          <ValueDisplay middle>{this.state.value}</ValueDisplay>
          <ValueDisplay>{this.props.max}</ValueDisplay>
        </ValueContainer>
      </Container>
    );
  }
}
