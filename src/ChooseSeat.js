import styled from "styled-components";
import Footer from "./Footer";
import Seats from "./Seats";
import GetInformation from "./Getinformation";
export default function ChooseSeat() {
  return (
    <>
      <ContainerValidation>
        <h1>Selecione o(s) assento(s) </h1>
        <ButtonBox>
          <Seats/>
          <Seats/>
          <Seats/>
          <Seats/>
          <Seats/>
          <Seats/>
          <Seats/>
          <Seats/>
          <Seats/>
          <Seats/>
          <Seats/>
          <Seats/>
          <Seats/>
          <Seats/>
          <Seats/>
          <Seats/>
          <Seats/>
          <Seats/>
          <Seats/>
          <Seats/>
          <Seats/>
          <Seats/>
          <Seats/>
          <Seats/>
        </ButtonBox>
        <LegendBox>
          <Legend status="selected">
            <div></div>
            <span>Selecionado</span>
          </Legend>
          <Legend status="available">
            <div></div>
            <span>Disponível</span>
          </Legend>
          <Legend status="unavailable">
            <div></div>
            <span>Indisponível</span>
          </Legend>
        </LegendBox>
        <GetInformation/>
      </ContainerValidation>
      <Footer />
    </>
  );
}

const ContainerValidation = styled.main`
  display: flex;
  margin-top: 67px;
  margin-bottom: 150px;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background: #ffffff;
  h1 {
    margin-top: 42px;
    margin-bottom: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    font-style: normal;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
  }
`;

const ButtonBox = styled.section`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 8px;
  flex-wrap: wrap;
`;

const LegendBox = styled.section`
  width: 260px;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
`;
const Legend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 25px;
    height: 25px;
    border-radius: 17px;
    background: ${(props) => {
      if (props.status === "selected") {
        return "#8DD7CF";
      } else if (props.status === "available") {
        return "#C3CFD9";
      } else if (props.status === "unavailable") {
        return "#FBE192";
      }
    }};
    border: ${(props) => {
      if (props.status === "selected") {
        return "1px solid #1AAE9E;";
      } else if (props.status === "available") {
        return "1px solid #7B8B99;";
      } else if (props.status === "unavailable") {
        return "1px solid #F7C52B;";
      }
    }};
  }
  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #4e5a65;
    margin-top: 9px;
  }
`;


