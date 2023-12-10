import styled from "styled-components";

const StyledBoard = styled.div<{ cols: number }>`
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
  text-align: center;
`;

export default StyledBoard;
