import styled from "styled-components";
import Movie from "./Movie";

export default function Catalog() {
  return (
    <CatalogContainer>
      <span>Selecione o filme</span>
   <MovieList>
      <Movie/>
      <Movie/>
      <Movie/>
      <Movie/>
      <Movie/>
      <Movie/>
      <Movie/>
      <Movie/>
   </MovieList>
      
    </CatalogContainer>
  );
}

const CatalogContainer = styled.main`
  display: flex;
  margin-top: 67px;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background: #ffffff;
  span {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;

  }
`;

const MovieList = styled.section`
  display: flex;
  flex-wrap: wrap;
  width:100%;
  justify-content: space-around;
`;
