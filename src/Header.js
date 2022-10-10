import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <h1>CINEFLEX</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100vw;
  height: 67px;
  text-align: center;
  background: #c3cfd9;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #e8833a;
  }
`;
