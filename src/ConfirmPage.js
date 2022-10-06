import styled from "styled-components";

export default function Confirm() {
  return (
    <ContainerConfirm>
      <span>Pedido feito com sucesso!</span>
      <section>
        <h2>Filme e sessão</h2>
        <div>Enola Holmes</div>
        <div>24/06/2021 15:00</div>
      </section>
      <section>
        <h2>Ingressos</h2>
        <div>Assento 15</div>
        <div>Assento 16</div>
      </section>
      <section>
        <h2>Comprador</h2>
        <div>nome: João da Silva Sauro</div>
        <div>CPF: 24/06/2021 15:00</div>
      </section>
      <button type="button">Voltar para home</button>
    </ContainerConfirm>
  );
}

const ContainerConfirm = styled.div`
  display: flex;
  margin-top: 67px;
  margin-bottom: 150px;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background: #ffffff;
  span {
    text-align: center;
    width: 180px;
    justify-content: center;
    margin-top: 25px;
    margin-bottom: 50px;
    background-color: #ffffff;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #247a6b;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  section {
    width: 327px;
    margin-bottom: 40px;
    h2 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.04em;
      color: #293845;
      margin-bottom: 16px;
    }
    div {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 26px;
      letter-spacing: 0.04em;
      color: #293845;
    }
  }
  button {
    width: 225px;
    height: 42px;
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
    margin-top: 20px;
  }
`;
