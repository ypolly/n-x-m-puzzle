import styled from "styled-components";

const StyledInput = styled.input`
  border-radius: 4px;
  border: 1px solid #CCCCCC;
  font-size: 14px;
  outline: none;
  padding: 10px;
  transition: border-color 0.3s ease;
  &:focus {
    border-color: #2196f3;
`;

export default StyledInput;
