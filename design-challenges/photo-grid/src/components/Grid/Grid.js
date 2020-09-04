import React, { useState } from "react";
import { GridContainer, GridRow, GridSquare } from "./styles/Grid";

function Grid(props) {
  const [active, setActive] = useState(false);

  const handleChange = (e) => {
    props.function(parseInt(e.target.getAttribute("value")));
    setActive(!active);
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
        <GridSquare onClick={handleChange} value="2" selector>
          <p value="2">•</p>
        </GridSquare>
        <GridSquare />
        <GridSquare />
        <GridSquare />
      </GridRow>
      <GridRow>
        <GridSquare />
        <GridSquare />
        <GridSquare onClick={handleChange} value="3" selector>
          <p value="3">•</p>
        </GridSquare>
        <GridSquare />
        <GridSquare />
      </GridRow>
      <GridRow>
        <GridSquare />
        <GridSquare />
        <GridSquare />
        <GridSquare onClick={handleChange} value="4" selector>
          <p value="4">•</p>
        </GridSquare>
        <GridSquare />
      </GridRow>
      <GridRow>
        <GridSquare />
        <GridSquare />
        <GridSquare />
        <GridSquare />
        <GridSquare onClick={handleChange} value="5" selector>
          <p value="5">•</p>
        </GridSquare>
      </GridRow>
    </GridContainer>
  );
}

export default Grid;
