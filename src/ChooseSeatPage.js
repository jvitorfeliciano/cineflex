import styled from "styled-components";
import Seats from "./Seats";
import loading from "../src/assets/loading.gif";
import GetInformation from "./Getinformation";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import WarningScreen from "./WarningScreen";
export default function ChooseSeat({ infosPurchase, setObjInfosPurchase }) {
  const { idSessao } = useParams();
  const [seats, setSeats] = useState(null);
  const [activeWarningScreen, setActiveWarningScreen] = useState('');
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );
    promise.then((res) => {
      console.log(res.data);
      setSeats(res.data);
      infosPurchase.date = res.data.day.date;
      infosPurchase.hour = res.data.name;
      console.log(infosPurchase);
    });
    promise.catch((res) => console.log(res.response.data));
  }, []);

  if (seats === null) {
    return (
      <Loading>
        <img src={loading} />
      </Loading>
    );
  }
  return (
    <>
      {activeWarningScreen ==="seatIsChosen" && (
        <WarningScreen activeWarningScreen={activeWarningScreen} setActiveWarningScreen={setActiveWarningScreen} />
      )}
       {activeWarningScreen ==="noSeatChosen" && (
        <WarningScreen activeWarningScreen={activeWarningScreen} setActiveWarningScreen={setActiveWarningScreen} />
      )}
      <ContainerValidation>
        <h1>Selecione o(s) assento(s) </h1>
        <ButtonBox>
          {seats.seats.map((obj, index) => {
            //quando usar chaves na arrow function e vc quiser retornar algo, é obrigado usar return
            return (
              <Seats
                key={index}
                informations={obj}
                infosPurchase={infosPurchase}
                setActiveWarningScreen={setActiveWarningScreen}
              />
            );
          })}
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
        <GetInformation
          infosPurchase={infosPurchase}
          setObjInfosPurchase={setObjInfosPurchase}
          setActiveWarningScreen={setActiveWarningScreen}
        />
      </ContainerValidation>
      <FooterContainer>
        <figure>
          <img src={seats.movie.posterURL} />
        </figure>
        <span>
          {seats.movie.title}
          <br></br>
          {seats.day.weekday} - {seats.day.date}- {seats.name}
        </span>
      </FooterContainer>
    </>
  );
}

const ContainerValidation = styled.main`
  display: flex;
  margin-top: 67px;
  margin-bottom: 300px;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background: #ffffff;
  h1 {
    margin-top: 42px;
    margin-bottom: 23px;
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
        return "#0E7D71";
      } else if (props.status === "available") {
        return "#C3CFD9";
      } else if (props.status === "unavailable") {
        return "#FBE192";
      }
    }};
    border: ${(props) => {
      if (props.status === "selected") {
        return "1px solid #0E7D71";
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

const Loading = styled.section`
  width: 100vw;
  height: 100vh;
  margin-top: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background: #ffffff;
`;
const FooterContainer = styled.footer`
  width: 100vw;
  height: 117px;
  background: #dfe6ed;
  border: 1px solid #9eadba;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
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
