import React from "react";
import { SizeContainer, SizeSelector, SizeInput } from "./styles/Size";

import { InputLabel } from "../styles/UserInput";

export class Size extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSelect = (e) => {
    e.target.focus();
    e.target.select();
  };

  render() {
    return (
      <SizeContainer>
        <InputLabel>{this.props.label}</InputLabel>
        <SizeSelector>
          <SizeInput
            onChange={this.handleChange}
            onClick={this.handleSelect}
            placeholder={this.state.value}
            value={this.state.value}
          />
          <p>X</p>
          <SizeInput
            onChange={this.handleChange}
            onClick={this.handleSelect}
            value={this.state.value}
            placeholder={this.state.value}
          />
        </SizeSelector>
      </SizeContainer>
    );
  }
}

export default Size;
