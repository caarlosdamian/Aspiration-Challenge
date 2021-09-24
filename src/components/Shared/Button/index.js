import styled from "styled-components";
import { mobile } from "../../../responsive";

export const Button = styled.button`
  width: ${({ width }) => width || "100px"};
  border: ${({ border }) => border || "none"};
  padding: ${({ padding }) => padding || "10px 15px"};
  background-color: ${({ backgroundColor }) => backgroundColor || "darkblue"};
  color: ${({ color }) => color || "white"};
  border-radius: 20px;
  font-size: ${({ fontSize }) => fontSize || "20px"};
  cursor: pointer;
  margin: ${({ margin }) => margin || "5px"} 0;
  display: ${({ display }) => display || ""};
  align-items: ${({ alignItems }) => alignItems || ""};
  justify-content: center;
  &:hover {
    opacity: 0.9;
  }
  ${mobile({
    padding: "10px 5px",
    width: "70px",
    fontSize: "16px",
    margin: "0px 5px",
  })}
`;

export default Button;
