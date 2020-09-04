import React, { Component } from "react";
import { Container, ButtonContainer, Generate } from "./styles/ImageContainer";
import fetchImages from "../../helpers/FetchImages";
import styled from "styled-components";

const ImageRowContainer = styled.li`
  width: 100%;
`;
const RowImage = styled.img`
  width: 100%;
`;

class ImageContainer extends Component {
  state = {
    imageLinks: [],
  };

  handleImages = () => {
    let urlList = fetchImages(this.props.state);
    this.setState(
      {
        imageLinks: urlList,
      },
      () => console.log(this.state.imageLinks)
    );
  };

  render() {
    return (
      <>
        <ButtonContainer>
          <Generate onClick={this.handleImages}>Generate</Generate>
        </ButtonContainer>
        <Container>
          {this.state.imageLinks.map((image) => (
            <ImageRowContainer>
              <RowImage src={image}></RowImage>
            </ImageRowContainer>
          ))}
        </Container>
      </>
    );
  }
}

export default ImageContainer;
