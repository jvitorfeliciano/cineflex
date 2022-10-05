import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Movie({ img, title, id }) {
  return (
    <Link to={`/movie/${id}`}>
      <MovieImg>
        <img src={img} alt={title} />
      </MovieImg>
    </Link>
  );
}

const MovieImg = styled.figure`
  width: 145px;
  height: 209px;
  padding: 8px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin-bottom: 11px;
  img {
    width: 100%;
    height: 100%;
  }
`;
