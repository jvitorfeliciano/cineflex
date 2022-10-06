import styled from "styled-components";
import Movie from "./Movie";
import loading from "../src/assets/loading.gif";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Catalog() {
  const [movieVector, setMovieVector] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );
    promise.then((res) => setMovieVector(res.data));
    promise.catch((res) => console.log(res.response.data));
  }, []);

  return (
    <>
      {movieVector.length === 0 && (
        <Loading>
          <img src={loading} />
        </Loading>
      )}
      {movieVector.length != 0 && (
        <CatalogContainer>
          <h2>Selecione o filme</h2>
          <MovieList>
            {movieVector.map((obj) => (
              <Movie key={obj.id} img={obj.posterURL} title={obj.title} id={obj.id} />
            ))}
          </MovieList>
        </CatalogContainer>
      )}
    </>
  );
}

const CatalogContainer = styled.main`
  display: flex;
  width:100vw;
  margin-top: 67px;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background: #ffffff;
  h2 {
    margin-top: 42px;
    margin-bottom: 35px;
    background-color: #ffffff;
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
  width: 100%;
  justify-content: space-around;
`;
 const Loading = styled.section`
  width:100vw;
  height:100vh;
  margin-top: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background: #ffffff;
 `
 