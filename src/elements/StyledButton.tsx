import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.disabled ? "#CCCCCC" : "#F8DE7E")};
  border-radius: 4px;
  border: none;
  color: #000000;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 14px;
  padding: 10px;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: ${(props) => (props.disabled ? "#CCCCCC" : "#E8BF27")};
  }
`;

export default Button;
