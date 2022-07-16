import type { GetServerSideProps, NextPage } from "next";
import MoviesList from "../../components/MoviesList";
import { Col, Divider, PageHeader, Row } from "antd";
import Page from "../../components/Page";
import React from "react";
import { search } from "../../api";
import { MediaItem } from "../../types";
import { getMediaType } from "../../utils/server";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { mediaType, selectedMedia } = getMediaType(context?.params?.mediaType);
  const query: any = context?.query?.query || "";

  try {
    const request = await search(mediaType, query);
    const response = await request.json();
    const searchResults = response.results;

    return {
      props: {
        searchResults,
        selectedMedia,
        query,
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
  searchResults: [MediaItem];
  selectedMedia: "Movie" | "Series";
  query: string;
  serverErrorOccurred?: boolean;
  serverErrorMessage?: string;
};

const SearchResultPage: NextPage<PageProps> = ({
  searchResults,
  selectedMedia,
  query,
  serverErrorOccurred,
  serverErrorMessage,
}) => {
  const title = searchResults.length ? (
    <span>
      Search results for{" "}
      <span style={{ textTransform: "capitalize" }}>{query} </span> (
      {selectedMedia})
    </span>
  ) : (
    "No results found"
  );

  return (
    <Page
      serverErrorOccurred={serverErrorOccurred}
      serverErrorMessage={serverErrorMessage}
    >
      <Row align={"middle"} justify="space-between">
        <Col>
          <PageHeader
            className="site-page-header"
            title={title}
            style={{ paddingLeft: 0, paddingTop: 0 }}
          />
        </Col>
      </Row>
      <Divider style={{ marginTop: 0 }} />

      <MoviesList movies={searchResults} />
    </Page>
  );
};

export default SearchResultPage;
