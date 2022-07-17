import { Col, Row } from "antd";
import React from "react";
import Movie from "./Movie";
import { MediaItem } from "../types";
import useRouteHelper from "../hooks/useRouteHelper";

type MovieListProp = { movies: MediaItem[] };

const MovieList: React.FC<MovieListProp> = ({ movies }) => {
  const { mediaParam } = useRouteHelper();

  return (
    <Row gutter={16}>
      {movies.map((movie) => (
        <Col  key={movie.id} style={{ marginBottom: "3vh" }}>
          <Movie data={movie} movieDetailsPath={`${mediaParam}/${movie.id}`} />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
