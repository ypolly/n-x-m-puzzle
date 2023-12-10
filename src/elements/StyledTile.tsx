import styled from "styled-components";

type StyledTileProps = {
  size: number;
  $isHidden: boolean;
  $isCorrect: boolean;
};

const StyledTile = styled.div<StyledTileProps>`
  align-items: center;
  background-color: ${(props) => (props.$isCorrect ? "#155063" : "#add8e6")};
  border-radius: 10%;
  border: 1px solid #000000;
  cursor: pointer;
  display: flex;
  font-weight: 700;
  height: ${(props) => props.size}px;
  justify-content: center;
  transition: transform 0.5s ease;
  width: ${(props) => props.size}px;
  ${(props) => props.$isHidden && "visibility: hidden"};
`;

export default StyledTile;
