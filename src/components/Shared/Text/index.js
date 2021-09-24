import styled from "styled-components";

export const Mode = styled.span`
  font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
`;

export const Text = styled.text`
  font-weight: bold;
  font-size: ${({ size }) => size || "18px"};
  color: ${({ color }) => color || "crimson"};
  text-transform: ${(header) => (header ? "capitalize" : "")};
`;

export default Text;
