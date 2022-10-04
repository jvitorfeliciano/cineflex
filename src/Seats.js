import styled from "styled-components";

export default function Seats() {
  return <SeatButton type="button">01</SeatButton>;
}

const SeatButton = styled.button`
  width: 26px;
  height: 26px;
  background: #c3cfd9;
  border: 1px solid #808f9d;
  border-radius: 12px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.04em;
  margin: 0 8px 18px 0px;
`;
