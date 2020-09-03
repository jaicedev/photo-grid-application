import React, { useState } from "react";
import { SizeContainer, SizeSelector, SizeInput } from "./styles/Size";
import { InputLabel } from "../styles/UserInput";
import { setDimension } from "../../../State/actions";
import { useDispatch, useSelector } from "react-redux";

export function Size(props) {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(setDimension(value));
  };

  const handleSelect = (e) => {
    e.target.focus();
    e.target.select();
  };

  const dimension = useSelector((state) => state.dimension);
  const dispatch = useDispatch();

  return (
    <SizeContainer>
      <InputLabel>{props.label}</InputLabel>
      <SizeSelector>
        <SizeInput
          onChange={handleChange}
          onClick={handleSelect}
          placeholder={value}
          value={value}
        />
        <p>X</p>
        <SizeInput
          onChange={handleChange}
          onClick={handleSelect}
          value={value}
          placeholder={value}
        />
      </SizeSelector>
    </SizeContainer>
  );
}

export default Size;
