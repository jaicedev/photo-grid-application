import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Generate = styled.button`
  background-color: #66bfbf;
  color: white;
  font-size: 1.3rem;
  border-style: none;
  padding: 0.5rem;
  width: 20%;
  margin: 1rem 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    background: #056674;
    cursor: pointer;
  }
`;

export class Button extends React.Component {
  render() {
    return (
      <Container>
        <Generate>{this.props.text}</Generate>
      </Container>
    );
  }
}

export default Button;
