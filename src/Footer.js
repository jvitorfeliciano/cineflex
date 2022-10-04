import styled from "styled-components";
import teste from "../src/assets/teste2.png";

export default function Footer(){
 return(
    <FooterContainer>
        <figure>
          <img src={teste} />
        </figure>
        <span>Enola Holmes</span>
      </FooterContainer>
 )

}

const FooterContainer = styled.footer`
  width: 100vw;
  height: 117px;
  background: #dfe6ed;
  border: 1px solid #9eadba;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  figure {
    margin-left: 10px;
    width: 64px;
    height: 89px;
    padding: 8px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  span {
    margin-left: 14px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
  }
`;