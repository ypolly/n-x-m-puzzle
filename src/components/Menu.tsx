import React, { useState } from "react";
import Button from "../elements/StyledButton";
import StyledMenu from "../elements/StyledMenu";
import StyledInput from "../elements/StyledInput";
import StyledInputLabel from "../elements/StyledInputLabel";

type MenuProps = {
  onStartClick: () => void;
  setCols: (n: number) => void;
  setRows: (n: number) => void;
};

const Menu = ({ onStartClick, setCols, setRows }: MenuProps) => {
  const [colsStyledInput, setColsStyledInput] = useState(5);
  const [rowsStyledInput, setRowsStyledInput] = useState(3);
  const [started, setStated] = useState(false);

  const onStyledInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setNumber: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const StyledInputValue = event.target.value;
    if (!isNaN(Number(StyledInputValue)) || StyledInputValue === "") {
      setStated(false);
      setNumber(parseInt(StyledInputValue));
    }
  };

  const onButtonClick = () => {
    setCols(colsStyledInput);
    setRows(rowsStyledInput);
    setStated(true);
    onStartClick();
  };

  return (
    <StyledMenu>
      <StyledInputLabel>
        Columns
        <StyledInput
          max={10}
          min={1}
          onChange={(e) => onStyledInputChange(e, setColsStyledInput)}
          placeholder="5"
          type="number"
        />
      </StyledInputLabel>
      <StyledInputLabel>
        Rows
        <StyledInput
          max={10}
          min={1}
          onChange={(e) => onStyledInputChange(e, setRowsStyledInput)}
          placeholder="3"
          type="number"
        />
      </StyledInputLabel>
      <Button disabled={started} onClick={() => onButtonClick()}>
        {started ? "Started!" : "Start"}
      </Button>
    </StyledMenu>
  );
};

export default Menu;
