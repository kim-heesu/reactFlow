/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

type ButtonProps = {
    color: string;
    label: string;
    onclick?: () => void;
}

const StyleButton = styled.button`
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

function Button(props:ButtonProps) {
  return <StyleButton color={props.color}>{props.color}{props.label}</StyleButton>;
}

export default Button;