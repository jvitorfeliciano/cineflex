import styled from "styled-components";
import Footer from "./Footer";
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
      <Footer/>
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


