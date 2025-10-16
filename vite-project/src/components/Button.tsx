/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const ButtonStyled = styled.button`
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  opacity: 0.8;
  background: ${({ color }: { color: string }) =>
    color === "red" ? "#ff0000" :
    color === "blue" ? "#0000ff" :
    "#999"};
  &:hover {
    opacity: 1;
  }
`;

function Button({ color = "gray", label = "button" }) {
  return <ButtonStyled color={color}>{color}{label}</ButtonStyled>;
}

export default Button;