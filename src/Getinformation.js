import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function GetInformation({ infosPurchase, setObjInfosPurchase }) {
  const [form, setForm] = useState({ name: "", cpf: "" });
  const navigate = useNavigate()
  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }

  function submit(e) {
    e.preventDefault();
    if (
      infosPurchase.seatsId === undefined ||
      infosPurchase.seatsId.length === 0
    ) {
      alert("Escolha os assentos");
      return;
    }
    const body = { ids: infosPurchase.seatsId, name: form.name, cpf: form.cpf };
    const URL =
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";

    const promise = axios.post(URL, body);
    promise.then((res) => {  // se a requisição der certo, então farei tudo o que segue:
      infosPurchase.buyerName = form.name
      infosPurchase.buyerCpf = form.cpf
      console.log(infosPurchase)
      setObjInfosPurchase(infosPurchase)
      navigate("/sucesso")
      console.log(res.data)});
    promise.catch((err) => console.log(err.response.data));
  }

  return (
    <PersonalInformation>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="name">Nome do comprador:</label>
          <br></br>
          <input
            onChange={handleForm}
            value={form.name}
            name="name"
            required
            id="name"
            placeholder="Digite seu nome..."
          />
          <br></br>
          <label htmlFor="CPF">CPF do comprador:</label>
          <br></br>
          <input
            onChange={handleForm}
            value={form.cpf}
            name="cpf"
            required
            id="cpf"
            placeholder="DIgite seu CPF..."
          />
        </div>
        <SendData type="submit">Reservar assento (s)</SendData>
      </form>
    </PersonalInformation>
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
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const SendData = styled.button`
  width: 225px;
  height: 42px;
  margin-top: 51px;
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
