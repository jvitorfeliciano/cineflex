import styled from "styled-components";

export default function Seats({ name, isAvailable }) {
  return (
    <SeatButton isAvailable={isAvailable} type="button">
      {name}
    </SeatButton>
  );
}

const SeatButton = styled.button`
  width: 26px;
  height: 26px;
  background: ${(props) => {
    if (props.isAvailable === true) {
      return "#c3cfd9";
    } else if (props.isAvailable === false) {
      return "#FBE192";
    }
  }};
  border: ${(props) => {
    if (props.isAvailable === true) {
      return "#c3cfd9";
    } else if (props.isAvailable === false) {
      return "#FBE192";
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
`;
