import styled from "styled-components";

export default function WarningScreen({
  setActiveWarningScreen,
  activeWarningScreen,
}) {
  return (
    <>
      <WarningScreenContainer
        onClick={() => setActiveWarningScreen("none")}
      ></WarningScreenContainer>
      <Warn>
        {activeWarningScreen === "seatIsChosen" && (
          <span>Escolha um assento disponível</span>
        )}
        {activeWarningScreen === "noSeatChosen" && (
          <span>Escolha um assento</span>
        )}
        <button onClick={() => setActiveWarningScreen("none")}>OK</button>
      </Warn>
    </>
  );
}

const WarningScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.6;
  z-index: 4;
`;
const Warn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 150px;
  background: #ffffff;
  opacity: 1;
  font-size: 18px;
  font-family: "Roboto";
  position: fixed;
  z-index: 5;
  top: 20%;
  right: 10%;
  font-weight: 400;
  border-radius: 3px;
  letter-spacing: 1px;
  button {
    width: 70px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-weight: bold;
    font-family: "Roboto";
    background: #89d4f7;
    border-radius: 5px;
    font-size: 16px;
    color: #ffffff;
  }
`;
