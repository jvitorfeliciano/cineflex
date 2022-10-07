import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Confirm({objInfosPurchase}) {
  console.log(objInfosPurchase)
  const navigate = useNavigate()  // permite navegar facilmente entre as pages, só utilizar navigate("aqui vai o caminho da page")

  function goHome(){
    navigate("/")
    objInfosPurchase = {}
    console.log(objInfosPurchase)
  }
  if(objInfosPurchase.seatsName===undefined){
    return (<GoHome onClick={goHome}>Voltar para home</GoHome>)// para voltar no início do site caso o  usuário aperte f5, senão quebraria o código, pois quando aperta f5 a array seatsName se torna undefined
  }

  return (
    <ContainerConfirm>
      <span>Pedido feito com sucesso!</span>
      <section>
        <h2>Filme e sessão</h2>
        <div>{objInfosPurchase.movie}</div>
        <div>{objInfosPurchase.date} {objInfosPurchase.hour}</div>
      </section>
      <section>
        <h2>Ingressos</h2>
        {objInfosPurchase.seatsName.map(((element,index) => ( <div key={index}>Assento {element}</div>)))} 
      </section>
      <section>
        <h2>Comprador</h2>
        <div>nome:{objInfosPurchase.buyerName}</div>
        <div>CPF:{objInfosPurchase.buyerCpf}</div>
      </section>
      <button onClick={goHome} type="button">Voltar para home</button>
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
const GoHome = styled.button`
    margin-top: 80px;

`