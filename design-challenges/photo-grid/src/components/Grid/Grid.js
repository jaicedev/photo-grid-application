import React from "react";
import { GridContainer, GridRow, GridSquare } from "./styles/Grid";

function Grid(props) {
  const handleChange = (e) => {
    props.function(parseInt(e.target.getAttribute("value")));
  };

  return (
    <GridContainer>
      <GridRow>
        <GridSquare onClick={handleChange} value="1" default selector>
          <p value="1">•</p>
        </GridSquare>
        <GridSquare />
        <GridSquare />
        <GridSquare />
        <GridSquare />
      </GridRow>
      <GridRow>
        <GridSquare />
        <GridSquare onClick={handleChange} value="4" selector>
          <p value="4">•</p>
        </GridSquare>
        <GridSquare />
        <GridSquare />
        <GridSquare />
      </GridRow>
      <GridRow>
        <GridSquare />
        <GridSquare />
        <GridSquare onClick={handleChange} value="9" selector>
          <p value="9">•</p>
        </GridSquare>
        <GridSquare />
        <GridSquare />
      </GridRow>
      <GridRow>
        <GridSquare />
        <GridSquare />
        <GridSquare />
        <GridSquare onClick={handleChange} value="16" selector>
          <p value="16">•</p>
        </GridSquare>
        <GridSquare />
      </GridRow>
      <GridRow>
        <GridSquare />
        <GridSquare />
        <GridSquare />
        <GridSquare />
        <GridSquare onClick={handleChange} value="25" selector>
          <p value="25">•</p>
        </GridSquare>
      </GridRow>
    </GridContainer>
  );
}

export default Grid;
