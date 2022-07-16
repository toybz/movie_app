import type { GetServerSideProps, NextPage } from "next";
import MoviesList from "../../components/MoviesList";
import { Col, Divider, PageHeader, Result, Row } from "antd";
import Page from "../../components/Page";
import React from "react";
import { fetchTrending } from "../../api";
import { MediaItem, MediaParamType, MediaType } from "../../types";
import { getMediaType } from "../../utils/server";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { mediaType, selectedMedia } = getMediaType(context?.params?.mediaType);

  try {
    const request = await fetchTrending(mediaType);
    const response = await request.json();
    const trendingMovies = response.results;

    return {
      props: {
        trendingMovies,
        selectedMedia,
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
  serverErrorOccurred?: boolean;
  serverErrorMessage?: string;
};

const LandingPage: NextPage<PageProps> = ({
  trendingMovies,
  selectedMedia,
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
            title={`Trending ${selectedMedia}`}
            style={{ paddingLeft: 0, paddingTop: 0 }}
          />
        </Col>
      </Row>
      <Divider style={{ marginTop: 0 }} />

      <MoviesList movies={trendingMovies} />
    </Page>
  );
};

export default LandingPage;
