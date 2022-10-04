import styled from "styled-components";

export default function GetInformation() {
  return (
    <>
      <PersonalInformation>
        <div>
          <label>Nome do comprador:</label>
          <br></br>
          <input placeholder="Digite seu nome..." />
          <br></br>
          <label>CPF do comprador:</label>
          <br></br>
          <input placeholder="DIgite seu CPF..." />
        </div>
      </PersonalInformation>
      <SendData>Reservar assento (s)</SendData>
    </>
  );
}

const PersonalInformation = styled.section`
  width: 100vw;
  height: 165px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    margin-bottom: 15px;
    width: 327px;
    height: 51px;
    left: 24px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    padding-left: 18px;
    font-family: "Roboto";
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #afafaf;
  }
  label {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #293845;
  }
`;

const SendData = styled.button`
  width: 225px;
  height: 42px;
  margin-top: 35px;
  background: #e8833a;
  border-radius: 3px;
  border: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.04em;
  color: #ffffff;
`;