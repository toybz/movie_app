import type { GetServerSideProps, NextPage } from "next";
import MoviesList from "../../../components/MoviesList";
import { Col, Divider, PageHeader, Row } from "antd";
import Page from "../../../components/Page";
import React from "react";
import { fetchGenreMovies } from "../../../api";
import { MediaItem } from "../../../types";
import { getMediaType } from "../../../utils/server";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { mediaType, selectedMedia } = getMediaType(context?.params?.mediaType);

  const genreId: any = context?.params?.genreId;
  const genreName: any = context?.query?.name;

  try {
    const movieReq = await fetchGenreMovies(mediaType, genreId);
    const movieResponse = await movieReq.json();
    const trendingMovies = movieResponse.results;

    return {
      props: {
        trendingMovies,
        selectedMedia,
        genreName,
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
  trendingMovies: [MediaItem];
  selectedMedia: "Movie" | "Series";
  genreName: string;
  serverErrorOccurred?: boolean;
  serverErrorMessage?: string;
};

const GenreMoviesPage: NextPage<PageProps> = ({
  trendingMovies,
  selectedMedia,
  genreName,
  serverErrorOccurred,
  serverErrorMessage,
}) => {
  return (
    <Page
      serverErrorOccurred={serverErrorOccurred}
      serverErrorMessage={serverErrorMessage}
    >
      <Row align={"middle"} justify="space-between">
        <Col>
          <PageHeader
            className="site-page-header"
            title={`${genreName} ${selectedMedia}`}
            style={{ paddingLeft: 0, paddingTop: 0 }}
          />
        </Col>
      </Row>
      <Divider style={{ marginTop: 0 }} />

      <MoviesList movies={trendingMovies} />
    </Page>
  );
};

export default GenreMoviesPage;
