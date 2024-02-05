import styled, { css } from "styled-components";

export const TabsContainer = styled.ul`
  background-color: #e6002d;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Tab = styled.li`
  ${(props) => {
    if (props.$activePlayer === props.children) {
      return css`
        background-color: #b40028;
        color: white;
      `;
    }
    return css`
      background-color: #e6002d;
      color: white;
    `;
  }}
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
`;
