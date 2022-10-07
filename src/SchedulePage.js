import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import loading from "../src/assets/loading.gif";

export default function Schedule({infosPurchase}) {
  const [calender, setCalender] = useState(null);
  const { idFilme } = useParams();
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
    );
    promise.then((res) => {
      console.log(res.data);
      setCalender(res.data);
      infosPurchase.movie = res.data.title
      console.log(infosPurchase)
    });

    promise.catch((res) => {
      console.log(res.response.data);
    });
  }, []);

  if (calender === null) {
    return (
      <Loading>
        <img src={loading} />
      </Loading>
    );
  }
  return (
    <>
      <ScheduleContainer>
        <span>Selecione o Horário</span>

        {calender.days.map((obj, index) => {
          return (
            <Date key={index}>
              <h3>{obj.weekday} - {obj.date}</h3>
              <div>
                {obj.showtimes.map((hour, index) => { // map para pegar os horários que estãoem array na propridade showtimes
                  return (
                    <Link key={index} to={`/assentos/${hour.id}`}>
                         <button >{hour.name}</button>
                    </Link>
                  )
                })}
              </div>
            </Date>
          );
        })}
      </ScheduleContainer>
      <FooterContainer>
        <figure>
          <img src={calender.posterURL} />
        </figure>
        <span>{calender.title}</span>
      </FooterContainer>
    </>
  );
}

const ScheduleContainer = styled.main`
  margin-top: 67px;
  margin-bottom: 130px;
  width: 100vw;
  span {
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    font-family: "Roboto";
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
  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.02em;
    color: #293845;
    margin-bottom: 25px;
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
