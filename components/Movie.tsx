import { Card } from "antd";
import React from "react";
import { MediaItem, Path } from "../types";
import Link from "next/link";

const { Meta } = Card;

type MovieProp = { data: MediaItem; movieDetailsPath: Path };

const Movie: React.FC<MovieProp> = ({ data, movieDetailsPath }) => {
  return (
    <Link href={movieDetailsPath}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt={data.title}
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}
`}
          />
        }
      >
        <Meta title={data.title || data.name} description="" />
      </Card>
    </Link>
  );
};

export default Movie;
