import React from "react";
import { GridContainer, GridRow, GridSquare, GridInfo } from "./styles/Grid";

function Grid() {
  return (
    <div>
      <GridContainer>
        <GridRow>
          <GridSquare default selector>
            <GridInfo>•</GridInfo>
          </GridSquare>
          <GridSquare />
          <GridSquare />
          <GridSquare />
          <GridSquare />
        </GridRow>
        <GridRow>
          <GridSquare />
          <GridSquare selector>
            <GridInfo>•</GridInfo>
          </GridSquare>
          <GridSquare />
          <GridSquare />
          <GridSquare />
        </GridRow>
        <GridRow>
          <GridSquare />
          <GridSquare />
          <GridSquare selector>
            <GridInfo>•</GridInfo>
          </GridSquare>
          <GridSquare />
          <GridSquare />
        </GridRow>
        <GridRow>
          <GridSquare />
          <GridSquare />
          <GridSquare />
          <GridSquare selector>
            <GridInfo>•</GridInfo>
          </GridSquare>
          <GridSquare />
        </GridRow>
        <GridRow>
          <GridSquare />
          <GridSquare />
          <GridSquare />
          <GridSquare />
          <GridSquare selector>
            <GridInfo>•</GridInfo>
          </GridSquare>
        </GridRow>
      </GridContainer>
    </div>
  );
}

export default Grid;
