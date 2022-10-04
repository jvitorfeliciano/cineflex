import styled from "styled-components";
import teste from "../src/assets/teste2.png";
export default function Schedule() {
  return (
    <>
      <ScheduleContainer>
        <span>Selecione o Horário</span>
        <Date>
          <h3>Quinta-Feira- 24/06/2021</h3>
          <div>
            <button>15:00</button>
            <button>19:00</button>
          </div>
        </Date>
        <Date>
          <h3>Quinta-Feira- 24/06/2021</h3>
          <div>
            <button>15:00</button>
            <button>19:00</button>
          </div>
        </Date>
      </ScheduleContainer>
      <Footer>
        <figure>
          <img src={teste} />
        </figure>
        <span>Enola Holmes</span>
      </Footer>
    </>
  );
}

const ScheduleContainer = styled.main`
  margin-top: 67px;
  width: 100vw;
  span {
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
  }
`;

const Date = styled.section`
  height: 100px;
  margin-left: 23px;
  margin-bottom: 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.02em;
    color: #293845;
  }

  button {
    width: 83px;
    height: 43px;
    background: #e8833a;
    border: none;
    border-radius: 3px;
    margin-right: 8px;
    cursor: pointer;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
  }
`;

const Footer = styled.div`
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
