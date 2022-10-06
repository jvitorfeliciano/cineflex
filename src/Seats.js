import { useState } from "react";
import styled from "styled-components";

let seatsBoughtVector = []; // armazena o id do assento comprado, tem quer ser declarado aqui, se não toda vez que o componente Seats for renderizado, a array será esvaziada(teste realizado por mim);
export default function Seats({ informations }) {
  const {id, name, isAvailable} = informations // destructuring do objeto informations
 const [seatStatus, setSeatStatus]= useState(isAvailable ) // cada vez que o botão é chamado no map é criado um state pra cada botão;


 function handleSeat(seatid){
  console.log(seatid)
  if(seatStatus===false){
    alert('Esse assento não está disponível')
    return
  }
  else if(seatStatus==true){
    setSeatStatus('selected')
    seatsBoughtVector=[...seatsBoughtVector, seatid]
    console.log(seatsBoughtVector)
  }
  else if(seatStatus=='selected'){
    setSeatStatus(true)
    const aux = seatsBoughtVector.filter(element => element !== seatid)
    seatsBoughtVector=[...aux]
    console.log(seatsBoughtVector)
  }
 }

  return (
    <SeatButton onClick={()=>handleSeat(id)} seatStatus={seatStatus} type="button">
      {name}
    </SeatButton>
  );
}

const SeatButton = styled.button`
  width: 26px;
  height: 26px;
  background: ${(props) => {
    if (props.seatStatus === true) {
      return "#c3cfd9";
    } else if (props.seatStatus === false) {
      return "#FBE192";
    }
    else if (props.seatStatus === 'selected') {
      return "#0E7D71";
    }
  }};
  border: ${(props) => {
    if (props.seatStatus === true) {
      return "#c3cfd9";
    } else if (props.seatStatus === false) {
      return "#FBE192";
    }
    else if (props.seatStatus === 'selected') {
      return "#0E7D71";
    }
  }};
  border-radius: 12px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.04em;
  margin: 0 8px 18px 0px;
  cursor:pointer;
`;
