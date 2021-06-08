import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  & :first-child {
    height: 42px;
    width: 42px;
    margin: 24px 12px 24px 32px;
    cursor: pointer;

    &:hover + .logo-full {
      margin-left: 0;
      opacity: 1;
    }
  }

  & :nth-child(2) {
    opacity: 0;
    margin-left: -20px;
    height: 30px;
    transition: all 500ms ease;
  }
`;
