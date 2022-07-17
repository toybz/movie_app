import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { Card, Col, Row } from "antd";
import Page from "../../components/Page";
import React from "react";
import { fetchMovieDetails } from "../../api";
import { MediaItem } from "../../types";
import Image from "next/image";
import { getMediaType } from "../../utils/server";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { mediaType } = getMediaType(context?.params?.mediaType);

  const movieId: any = context?.params?.movieId;

  try {
    const movieReq = await fetchMovieDetails(mediaType, movieId);
    const movieDetails = await movieReq.json();

    return {
      props: {
        movieDetails,
      },
    };
  } catch (e: any) {
    return {
      props: {
        serverErrorOccurred: true,
        serverErrorMessage:
          "An error occurred while fetching movie data.Please try again",
      },
    };
  }
};

type PageProps = {
  movieDetails: MediaItem;
  serverErrorOccurred?: boolean;
  serverErrorMessage?: string;
};

const MovieDetailsPage: NextPage<PageProps> = ({
  movieDetails,
  serverErrorOccurred,
  serverErrorMessage,
}) => {
  return (
    <Page
      serverErrorOccurred={serverErrorOccurred}
      serverErrorMessage={serverErrorMessage}
    >
      <Row style={{ marginTop: "2vh" }}>
        <Col md={8}>
          <Card
            style={{ width: "100%", background: "transparent" }}
            cover={
              <img
                alt={movieDetails.title || movieDetails.name}
                src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}
                `}
              />
            }
          />
        </Col>

        <Col md={12} md-offset={2}>
          <Card>
            <>
              <h2>{movieDetails?.title || movieDetails.name}</h2>

              <div>
                <span>Overview</span>
                <p>{movieDetails.overview}</p>
              </div>
              <div>
                <span>Release date</span>
                <p>
                  {movieDetails.release_date || movieDetails.first_air_date}{" "}
                </p>
              </div>
              {movieDetails?.genres?.length && (
                <div>
                  <span>Genres</span>
                  <p>
                    {" "}
                    {movieDetails.genres.map((genre) => (
                      <span key={genre.id}>{genre.name} </span>
                    ))}
                  </p>
                </div>
              )}

              <div>
                <span>Rating</span>
                <p>{movieDetails.vote_average}</p>
              </div>

              <div>
                <span>Language</span>
                <p>{movieDetails.original_language}</p>
              </div>
            </>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default MovieDetailsPage;
